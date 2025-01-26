import React, { useEffect, useRef } from 'react';
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ alpha: true });
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let object;
let controls;
// Resize listener
const handleResize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
// Mouse move listener
const handleMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const letsRenderModel = (containerRef, modelName) => {
  // Create a Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // Load the 3D model
  const loader = new GLTFLoader();
  const objToRender = modelName; // Change this to load different models

  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef?.current?.appendChild(renderer.domElement);

  loader.load(
    `./models/${objToRender}/scene.gltf`,
    (gltf) => {
      object = gltf.scene;
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
      console.error(error);
    }
  );

  // Set camera position
  camera.position.z = objToRender === 'dino' ? 25 : 500;

  // Add lights
  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, objToRender === 'dino' ? 5 : 1);
  scene.add(ambientLight);

  // Orbit controls
  if (objToRender === 'dino') {
    controls = new OrbitControls(camera, renderer.domElement);
  }

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    if (object && objToRender === 'eye') {
      object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
      object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
    }
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', (camera, renderer));

  document.addEventListener('mousemove', (e) => handleMouseMove(e));
};

const ThreeDScene = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    letsRenderModel(containerRef, props?.modelName);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      containerRef?.current?.removeChild(renderer.domElement);
    };
  }, [props?.modelName]);

  return <div key={props?.key} ref={containerRef} id='container3D'></div>;
};

export default ThreeDScene;
