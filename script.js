// Create PixiJS application
const app = new PIXI.Application({ width: 800, height: 600, transparent: true });
document.getElementById("pixi-container").appendChild(app.view);

const imageInput = document.getElementById("imageInput");

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const texture = PIXI.Texture.from(e.target.result);
            const image = new PIXI.Sprite(texture);

            // Adjust transparency as needed
            image.alpha = 0.5;

            app.stage.addChild(image);
        };

        reader.readAsDataURL(file);
    }
});

const textureImage = new PIXI.Sprite.from("path/to/texture-image.jpg");
app.stage.addChild(textureImage);

app.start();
