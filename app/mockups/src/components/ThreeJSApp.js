import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function ThreeJSApp() {
  const imageUploadRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const currentImageUpload = imageUploadRef.current;
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

    // Add the event listener
    currentImageUpload.addEventListener("change", handleFileUpload);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Set the camera position
    camera.position.z = 51;

    // Create a GLTFLoader
    const loader = new GLTFLoader();

    // Load a .glb file
    loader.load(
      "/myScene13.glb", // path to .glb file
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh && child.name === "image") {
            // replace 'ImagePlane' with the actual name of your image plane
            const texture = child.material.map;
            child.material = new THREE.MeshBasicMaterial({ map: texture });
          }
            if (child.isMesh && child.name === "geometry") {
              child.material = new THREE.MeshBasicMaterial({ visible: false });
            
            } 
            if (child.isMesh && child.name === "shades") {
              child.material.transparent = true;
              child.material.opacity = 0.4; // Set opacity to 50%
              child.material.needsUpdate = true;
            
            }
            if (child.isMesh && child.name === "mockupArea") {
              child.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.35 });
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
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Return a cleanup function that will be called when the component is unmounted or before a new scene is created
    return () => {
      // Stop the animation
      cancelAnimationFrame(animate);

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

    function handleFileUpload() {
      // Ensure a file was selected
      if (this.files && this.files[0]) {
        // Create a FileReader
        const reader = new FileReader();

        // When the file is loaded, create a texture and apply it to the object
        reader.onload = function (e) {
          // Create a texture
          const texture = new THREE.TextureLoader().load(e.target.result);

          // Flip the texture vertically
          texture.flipY = false;

          texture.colorSpace = THREE.SRGBColorSpace;

          // Apply the texture to the object
          scene.traverse(function (child) {
            if (child.isMesh && child.name === "geometry") {
              child.material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
              });
              child.material.opacity = 1;
              child.material.needsUpdate = true;
            }
            if (child.isMesh && child.name === "shades") {
              child.material.transparent = true;
              child.material.opacity = 0.4; // Set opacity to 50%
              child.material.needsUpdate = true;
            }
          });

          scene.traverse(function (child) {
            if (child.isMesh && child.name === "mockupArea") {
              child.material = new THREE.MeshBasicMaterial();
              child.material.color.set(0xffffff); // Set color to red
              child.material.transparent = true; // Enable transparency
              child.material.opacity = 0.35; // Set opacity to 50%
              child.material.needsUpdate = true;
            }
          });
        };

        // Read the file as a data URL
        reader.readAsDataURL(this.files[0]);
      }
    }
  }, []);

  return (
    <div>
      <input ref={imageUploadRef} type="file" />
      <div className="threejs-app" ref={containerRef}>
        {/* The Three.js scene will be appended here */}
      </div>
    </div>
  );
}

export default ThreeJSApp;
