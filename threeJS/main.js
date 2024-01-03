import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a white PointLight and set its position
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 0, 5);
// Add the light to the scene
scene.add(light);

// Instantiate a loader
const loader = new OBJLoader();

let model = null;

// Load a resource
loader.load(
  // Resource URL
  '/model.obj',
  // Called when resource is loaded
  function (object) {
    // Set the position of the object to the origin
    object.position.set(0, 0, 0);

    // Traverse the object and set a basic material to all its children
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({ color: 0x555555 });
      }
    });

    scene.add(object);
  },
  // Called when loading is in progress
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  // Called when loading has errors
  function (error) {
    console.error('An error happened:', error);
  }
);

// Move the camera further away
camera.position.z = 100;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
  
    // Log the model
    console.log(model);
  
    // Rotate the model if it's not null
    if (model) {
      console.log('Rotating model');
      model.rotation.x += 0.01;
      model.rotation.y += 0.01;
    }
  
    renderer.render(scene, camera);
  }
  animate();