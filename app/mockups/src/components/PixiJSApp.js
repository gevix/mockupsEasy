import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";

function PixiJSApp({
  size,
  isCenterHorizontally,
  isCenterVertically,
  image,
  setTextureImage,
}) {
  const pixiContainer = useRef(null);
  const imageDesignRef = useRef(null);

  useEffect(() => {
    // Create PixiJS application
    const app = new PIXI.Application({
      background: "#fff",
      width: 544,
      height: 770,
      transparent: true,
    });

    pixiContainer.current.appendChild(app.view);

    // Upload image design
    const imageDesign = PIXI.Sprite.from("./img/textureImage.png");
    imageDesign.anchor.set(0.5);
    imageDesign.x = app.screen.width / 2;
    imageDesign.y = app.screen.height / 2;

    // Scale the sprite to half its original size
    imageDesignRef.current = imageDesign;

    // Enable interaction on the sprite
    imageDesign.interactive = true;
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
        const dataUrl = app.renderer.plugins.extract.base64(app.stage);
        setTextureImage(dataUrl);
      })
      .on("pointerupoutside", () => {
        isDragging = false;
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

    app.stage.addChild(imageDesign);

    // Clean up on unmount
    return () => {
      app.destroy(true, { children: true, texture: true, baseTexture: true });
    };
  }, [setTextureImage]); // Empty dependency array means this effect runs once on mount and clean up on unmount

  useEffect(() => {
    // Update PixiJS application size on window resize
    imageDesignRef.current.scale.set(size / 100);
  }, [size]);

  useEffect(() => {
    imageDesignRef.current.x = 324;
  }, [isCenterHorizontally]);

  useEffect(() => {
    imageDesignRef.current.y = 400;
  }, [isCenterVertically]);

  useEffect(() => {
    if (image) {
      const texture = PIXI.Texture.from(image);
      imageDesignRef.current.texture = texture;
    }
  }, [image]);
  return <div ref={pixiContainer} />;
}

export default PixiJSApp;
