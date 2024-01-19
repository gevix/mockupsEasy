import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function ThreeJSApp() {
  const imageUploadRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef(); 
  const containerRef = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    // Add ambient light
    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    scene.add( cube );

    // Append the renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div ref={containerRef}>
      <input type="file" id="image-upload" ref={imageUploadRef} />
      {/* The Three.js scene will be appended here */}
    </div>
  );
}

export default ThreeJSApp;