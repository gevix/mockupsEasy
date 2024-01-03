// Create PixiJS application
const app = new PIXI.Application({
  background: "#ffffff",
  width: 1000,
  height: 800,
  transparent: true,
});
document.getElementById("pixi-container").appendChild(app.view);

const imageInput = document.getElementById("imageInput");

// create a new Sprite from an image path
const shirt_mockup = PIXI.Sprite.from("./img/shirt_mockup.png");
// center the sprite's anchor point
shirt_mockup.anchor.set(0.5);

// move the sprite to the center of the screen
shirt_mockup.x = app.screen.width / 2;
shirt_mockup.y = app.screen.height / 2;

// scale sprite to fill the t-shirt printable area

app.stage.addChild(shirt_mockup);

const imageContainer = new PIXI.Container();
shirt_mockup.addChild(imageContainer);

// Function to create a mask based on the shirt mockup
function createMask(shirtMockup) {
  const mask = new PIXI.Graphics();
  mask.beginFill(0xffffff); // White color for the mask
  mask.drawRect(
      -shirtMockup.width / 2,
      -shirtMockup.height / 2,
      shirtMockup.width,
      shirtMockup.height
  );
  mask.endFill();
  return mask;
}

// Create a mask for the shirt mockup and add it to the stage
const mask = createMask(shirt_mockup);


imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const texture = PIXI.Texture.from(e.target.result);
      const image = new PIXI.Sprite(texture);

      // Wait for the image to load
      image.texture.baseTexture.on("loaded", () => {
        image.interactive = true;
        image.buttonMode = true;

        // Adjust transparency as needed
        image.anchor.set(0.5);
        image.alpha = 0.8;
        image.x = app.screen.width / 2;
        image.y = app.screen.height / 2;
        const printableHight = app.screen.height / 2.4;
        const printableWidth = app.screen.width / 2.4;
        let scaleFactor = Math.min(
            printableWidth / image.width,
            printableHight / image.height
        );

        addResizeHandles(image);
        
        // Create a border graphics object
                const border = new PIXI.Graphics();
                border.lineStyle(100, 0xf08132); // Set line color and thickness
                border.drawRect(
                  -image.width / 2, // Adjusted for border thickness
                  -image.height / 2, // Adjusted for border thickness
                  image.width + 2, // Adjusted for border thickness
                  image.height + 2 // Adjusted for border thickness
                );
                border.visible = false; // Initially, the border is not visible
                
                const centerButton = document.getElementById('center-button');

                centerButton.addEventListener('click', () => {
                    if (image) {
                    image.x = app.screen.width / 2;
                    image.y = app.screen.height / 2;
                }
              });
                  
                // Set up event listeners for hover
                image.on("mouseover", () => {
                    border.visible = true; // Show the border on hover
                });
        
                image.on("mouseout", () => {
                    border.visible = false; // Hide the border when not hovering
                });
        
        // Scale the image to fit within the printable area
        image.scale.set(scaleFactor);


        image
            .on("pointerdown", onDragStart)
            .on("pointerup", onDragEnd)
            .on("pointerupoutside", onDragEnd)
            .on("pointermove", onDragMove);

       

        app.stage.addChild(image);
        
        

        image.addChild(border); // Add the border to the image
      });
    };

    reader.readAsDataURL(file);
  }
});

function onDragStart(event) {
    const newPosition = event.data.getLocalPosition(this.parent);
    
    // Calculate the offset between the pointer's position and the image's position
    this.data = {
        originalPosition: this.position.clone(),
        clickPosition: newPosition,
    };
    
    this.alpha = 0.5;
    this.dragging = true;
}


function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  this.data = null;
}

function onDragMove(event) {
    if (this.dragging) {
        const newPosition = event.data.getLocalPosition(this.parent);
        const offset = {
            x: newPosition.x - this.data.clickPosition.x,
            y: newPosition.y - this.data.clickPosition.y,
        };

        // Calculate the new position based on the offset
        this.position.set(
            this.data.originalPosition.x + offset.x,
            this.data.originalPosition.y + offset.y
        );
    }
}


// Function to add resize handles
function addResizeHandles(image) {
  const handles = [];
  const handleSize = 150;



  // Bottom-right handle
  const bottomRight = createResizeHandle(handleSize);
  bottomRight.position.set(image.width / 2, image.height / 2);
  bottomRight.anchor.set(0.5);
  handles.push(bottomRight);

  // Add handles to the image
  handles.forEach((handle) => {
    handle.interactive = true;
    handle.buttonMode = true;
    handle.on("pointerdown", onResizeStart.bind(this, image));
    image.addChild(handle);
  });
}

function createResizeHandle(size) {
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0x07ec54);
  graphics.drawRect(-size / 2, -size / 2, size, size);
  graphics.endFill();

  // Generate a texture from the graphics object
  const texture = app.renderer.generateTexture(graphics);

  return new PIXI.Sprite(texture);
}

// Function to handle resize start
function onResizeStart(image, event) {
  const handle = event.currentTarget;
  const data = event.data;

  // Get the local position relative to the canvas
  const localPos = data.getLocalPosition(app.stage);

  // Store initial position and size
  const initialPosition = { x: localPos.x, y: localPos.y };
  const initialSize = { width: image.width, height: image.height };

  // Function to handle resize move
  function onResizeMove(event) {
    // Get the new position relative to the canvas
    const newPosition = event.data.getLocalPosition(app.stage);

    // Calculate new size based on the initial position and the difference in the pointer's position
    const newSize = {
        width: initialSize.width + (newPosition.x - initialPosition.x),
        height: initialSize.height + (newPosition.y - initialPosition.y),
    };


  // Calculate the aspect ratio of the original image
  const aspectRatio = image.width / image.height;

  // Maintain aspect ratio while resizing
  if (aspectRatio > 1) {
      // Landscape image
      image.width = newSize.width;
      image.height = image.width / aspectRatio;
  } else {
      // Portrait or square image
      image.height = newSize.height;
      image.width = image.height * aspectRatio;
  }



  // Update the mask dimensions based on the new image size
  shirt_mockup.mask.width = image.width;
  shirt_mockup.mask.height = image.height;
}



  // Function to handle resize end
  function onResizeEnd() {
    // Remove event listeners
    data.originalEvent.preventDefault();
    data.originalEvent.stopPropagation();
    image.off("pointermove", onResizeMove);
    image.off("pointerup", onResizeEnd);
    image.off("pointerupoutside", onResizeEnd);
  }

  // Add event listeners for resize movement and end
  image.on("pointermove", onResizeMove);
  image.on("pointerup", onResizeEnd);
  image.on("pointerupoutside", onResizeEnd);
}

app.start();
