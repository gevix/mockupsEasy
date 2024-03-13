import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { hsvaToHex } from "@uiw/color-convert";

function ThreeJSApp({ color, textureImage, glb }) {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const containerRef = useRef();
  const mockupAreaMaterialRef = useRef();
  const geometryTextureRef = useRef();
  console.log(glb);
  useEffect(() => {
    let animationFrameId;

    const currentContainerRef = containerRef.current;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const scene = new THREE.Scene();
    const aspect = containerWidth / containerHeight;
    const camera = new THREE.OrthographicCamera(
      -aspect * 2,
      aspect * 2,
      2,
      -2,
      0.1,
      51
    );

    renderer.setSize(containerWidth, containerHeight);
    // Append the renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Set the camera position
    camera.position.z = 51;

    // Create a GLTFLoader
    const loader = new GLTFLoader();

    // Load a .glb file
    loader.load(
      glb, // path to .glb file
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh && child.name === "image") {
            // replace 'ImagePlane' with the actual name of your image plane
            const texture = child.material.map;
            child.material = new THREE.MeshBasicMaterial({ map: texture });
          }
          if (child.isMesh && child.name === "geometry") {
            const texture = new THREE.TextureLoader().load(
              "http://127.0.0.1:8000/static/images/testImage.png"
            );
            texture.flipY = false;
            texture.colorSpace = THREE.SRGBColorSpace;
            child.material = new THREE.MeshBasicMaterial({
              map: texture,
              visible: true,
            });
            child.material.transparent = true;
            child.material.opacity = 1;
            geometryTextureRef.current = texture;
          }
          if (child.isMesh && child.name === "shades") {
            child.material.transparent = true;
            child.material.opacity = 0.4; // Set opacity to 50%
            child.material.needsUpdate = true;
          }
          if (child.isMesh && child.name === "mockupArea") {
            const material = new THREE.MeshBasicMaterial({
              transparent: true,
              opacity: 0.8,
            });
            child.material = material;
            mockupAreaMaterialRef.current = material;
          }
        });

        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Return a cleanup function that will be called when the component is unmounted or before a new scene is created
    return () => {
      // Stop the animation
      cancelAnimationFrame(animationFrameId);

      // Remove the renderer's DOM element from the container
      currentContainerRef.removeChild(renderer.domElement);

      // Traverse the scene and dispose the materials and geometries
      scene.traverse((object) => {
        if (!object.isMesh) return;

        object.geometry.dispose();

        if (object.material.isMaterial) {
          cleanMaterial(object.material);
        } else {
          for (const material of object.material) cleanMaterial(material);
        }
      });

      // Dispose of the renderer
      renderer.dispose();
    };

    function cleanMaterial(material) {
      material.dispose();

      // dispose textures
      for (const key of Object.keys(material)) {
        const value = material[key];
        if (value && typeof value === "object" && "minFilter" in value) {
          value.dispose();
        }
      }
    }
  }, []);

  useEffect(() => {
    if (mockupAreaMaterialRef.current) {
      mockupAreaMaterialRef.current.color.set(hsvaToHex(color));
    }
  }, [color]);

  useEffect(() => {
    console.log("textureImage:", textureImage); // Log the textureImage
    if (geometryTextureRef.current && textureImage) {
      const loader = new THREE.TextureLoader();
      loader.load(textureImage, function (newTexture) {
        newTexture.flipY = false;
        newTexture.colorSpace = THREE.SRGBColorSpace;
        geometryTextureRef.current.image = newTexture.image;
        geometryTextureRef.current.needsUpdate = true;
      });
    }
  }, [textureImage]);

  return (
    <div>
      <div className="threejs-app" ref={containerRef}>
        {/* The Three.js scene will be appended here */}
      </div>
    </div>
  );
}

export default ThreeJSApp;
