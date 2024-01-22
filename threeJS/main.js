import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Get a reference to the div
const container = document.getElementById('threejs-container');

// Create a Scene
const scene = new THREE.Scene();

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Set the size of the renderer to the size of the div
renderer.setSize(container.clientWidth, container.clientHeight);

// Append the renderer to the div
container.appendChild(renderer.domElement);

// Calculate aspect ratio
const aspect = container.clientWidth / container.clientHeight;

// Create an orthographic camera
const camera = new THREE.OrthographicCamera(-aspect * 2, aspect * 2, 2, -2, 0.1, 51);
camera.position.z = 50;


// Create a GLTFLoader
const loader = new GLTFLoader();

// Load a .glb file
loader.load(
  '/public/myScene13.glb', // path to .glb file
  (gltf) => {
    gltf.scene.traverse((child) => {
      if (child.isMesh && child.name === 'image') { // replace 'ImagePlane' with the actual name of your image plane
        const texture = child.material.map;
        child.material = new THREE.MeshBasicMaterial({ map: texture });
        if (child.isMesh && child.name === 'geometry') { 
          const texture = child.material.map;
          child.material = new THREE.MeshStandardMaterial({ map: texture, transparent: true });
        }
      }
    });

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        console.log(child.name);
        // Traverse the scene graph
        scene.traverse((child) => {
          // If the child is a mesh and its name is 'mockupArea'
          if (child.isMesh && child.name === 'mockupArea') {
            const texture = child.material.map;
            child.material = new THREE.MeshBasicMaterial({ map: texture });
            child.material.needsUpdate = true;
          }
        });
      }
    });

    scene.add(gltf.scene);
  },
  undefined,
  function(error) {
    console.error(error);
  }
);

// Get the file input element
const imageUpload = document.getElementById('image-upload');

// Listen for file selection
imageUpload.addEventListener('change', function() {
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
        }if (child.isMesh && child.name === 'shades') {
          child.material.transparent = true; // Enable transparency
          child.material.opacity = 0.18; // Set opacity to 50%
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




// Get references to the buttons
const redButton = document.getElementById('red-button');
const greenButton = document.getElementById('green-button');
const blueButton = document.getElementById('blue-button');

// Function to change the color of mockupArea
function changeMockupAreaColor(color) {
  scene.traverse(function (child) {
    if (child.isMesh && child.name === 'mockupArea') {
      child.material.color.set(color);
      child.material.needsUpdate = true;
    }
  });
}

// Listen for button clicks
redButton.addEventListener('click', function() {
  changeMockupAreaColor(0xff0000); // Red
});

greenButton.addEventListener('click', function() {
  changeMockupAreaColor(0x00ff00); // Green
});

blueButton.addEventListener('click', function() {
  changeMockupAreaColor(0x0000ff); // Blue
});


});
    }

    // Read the file as a data URL
    reader.readAsDataURL(this.files[0]);
  }
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Get a reference to the button
const btn = document.getElementById('download-button');

// When the button is clicked
btn.addEventListener('click', function () {
  // Render the scene
  renderer.render(scene, camera);

  // Convert the rendered frame to a base64-encoded PNG
  const dataURL = renderer.domElement.toDataURL('image/png');

  // Create a download link
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = 'render.png';

  // Trigger a click event on the download link
  // Note: This might not work in all browsers due to popup blockers
  a.click();

 
});
