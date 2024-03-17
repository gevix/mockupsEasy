import React, { useRef, useEffect, useState } from "react";
import * as PIXI from "pixi.js";

function PixiJSApp({
  size,
  isCenterHorizontally,
  isCenterVertically,
  image,
  onTextureImageChange,
  templateImage,
  imageHeight,
  imageWidth,
}) {
  const pixiContainer = useRef(null);
  const imageDesignRef = useRef(null);
  const [stageImageUrl, setStageImageUrl] = useState(null);
  const appRef = useRef();

  useEffect(() => {
    // Create PixiJS application
    const app = new PIXI.Application({
      background: "#ffffff",
      width: imageWidth,
      height: imageHeight,
      transparent: true,
    });

    appRef.current = app;

    // Create a transparent Graphics object
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xffffff, 0); // 0 alpha for full transparency
    graphics.drawRect(0, 0, app.screen.width, app.screen.height);
    graphics.endFill();

    // Create a render texture from the Graphics object
    const renderTexture = app.renderer.generateTexture(graphics);

    // Create a sprite from the render texture
    const transparentSprite = new PIXI.Sprite(renderTexture);

    // Create a container to hold both sprites
    const container = new PIXI.Container();

    // Add the transparent sprite to the container
    container.addChild(transparentSprite);

    // Upload image design
    console.log("image:", templateImage);
    const imageDesign = PIXI.Sprite.from(templateImage);
    imageDesign.anchor.set(0.5);
    imageDesign.x = app.screen.width;
    imageDesign.y = app.screen.height;

    // Scale the sprite to half its original size
    imageDesignRef.current = imageDesign;

    // Enable interaction on the sprite
    imageDesign.eventMode = "dynamic";
    imageDesign.buttonMode = true;

    // Add variables to hold the state of dragging
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    // Add event listeners for the drag start, end, and move events
    imageDesign
      .on("pointerdown", (event) => {
        isDragging = true;
        prevX = event.global.x;
        prevY = event.global.y;
      })
      .on("pointerup", () => {
        isDragging = false;
        renderStage();
      })
      .on("pointerupoutside", () => {
        isDragging = false;
        renderStage();
      })
      .on("pointermove", (event) => {
        if (isDragging) {
          const newX = event.global.x;
          const newY = event.global.y;
          imageDesign.x += newX - prevX;
          imageDesign.y += newY - prevY;
          prevX = newX;
          prevY = newY;
        }
      });

    // Add the image design sprite to the container
    container.addChild(imageDesign);

    // Add the container to the stage
    app.stage.addChild(container);

    // Append the app view to the container
    pixiContainer.current.appendChild(app.view);

    // Clean up on unmount
    return () => {
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  useEffect(() => {
    // Update PixiJS application size on window resize
    imageDesignRef.current.scale.set(size / 100);
    renderStage();
  }, [size]);

  useEffect(() => {
    imageDesignRef.current.x = imageWidth / 2;
    renderStage();
  }, [isCenterHorizontally]);

  useEffect(() => {
    imageDesignRef.current.y = imageHeight / 2;
    renderStage();
  }, [isCenterVertically]);

  useEffect(() => {
    if (image) {
      const texture = PIXI.Texture.from(image);
      imageDesignRef.current.texture = texture;
      appRef.current.render();
      renderStage();
    }
  }, [image]);

  useEffect(() => {
    // Call the callback function whenever stageImageUrl changes
    if (stageImageUrl) {
      onTextureImageChange(stageImageUrl);
    }
  }, [stageImageUrl]);

  const renderStage = () => {
    // Extract a transparent PNG of the entire app
    const renderer = appRef.current.renderer;
    const stage = appRef.current.stage;
    const extract = renderer.extract;

    // Define the area to extract
    const area = new PIXI.Rectangle(
      0,
      0,
      appRef.current.screen.width,
      appRef.current.screen.height
    );

    // Extract the area as a canvas
    const canvas = extract.canvas(stage, area);

    const dataUrl = canvas.toDataURL("image/png", 1);

    // Set the stage image URL
    setStageImageUrl(dataUrl);
  };
  return (
    <div>
      <div
        className="border-dashed border-2 border-sky-500"
        ref={pixiContainer}
      />
    </div>
  );
}

export default PixiJSApp;
