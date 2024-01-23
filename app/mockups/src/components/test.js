import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeJSApp() {
  const imageUploadRef = useRef();

  useEffect(() => {
    function handleFileUpload() {
      // Ensure a file was selected
      if (this.files && this.files[0]) {
        // Create a FileReader
        const reader = new FileReader();

        // When the file is loaded, create a texture and apply it to the object
        reader.onload = function(e) {
          // Create a texture
          const texture = new THREE.TextureLoader().load(e.target.result);

          // Flip the texture vertically
          texture.flipY = false;

          texture.colorSpace = THREE.SRGBColorSpace;

          // Apply the texture to the object
          scene.traverse(function (child) {
            if (child.isMesh && child.name === 'geometry') {
              child.material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
              child.material.opacity = 1; 
              child.material.needsUpdate = true;
            }
            if (child.isMesh && child.name === 'shades') {
              child.material.transparent = true; // Enable transparency
              child.material.opacity = 0.5; // Set opacity to 50%
              child.material.needsUpdate = true;
            }
          });

          scene.traverse(function (child) {
            if (child.isMesh && child.name === 'mockupArea') {
              child.material = new THREE.MeshBasicMaterial();
              child.material.color.set(0xdc0a0a); // Set color to red
              child.material.transparent = true; // Enable transparency
              child.material.opacity = 0.5; // Set opacity to 50%
              child.material.needsUpdate = true;
            }
          });
        };

        // Read the file as a data URL
        reader.readAsDataURL(this.files[0]);
      }
    }

    // Add the event listener
    imageUploadRef.current.addEventListener('change', handleFileUpload);

    // Remove the event listener on cleanup
    return () => {
      imageUploadRef.current.removeEventListener('change', handleFileUpload);
    };
  }, []);

  return <input ref={imageUploadRef} type="file" />;
}

export default ThreeJSApp;