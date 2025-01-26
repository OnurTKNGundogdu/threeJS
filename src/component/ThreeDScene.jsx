import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDScene = ({ modelName, key2,renderer }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a unique renderer for this instance

    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = containerRef.current;
    container?.appendChild(renderer.domElement);

    // Create a unique scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = modelName === 'dino' ? 25 : 500;

    // Add lights
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, modelName === 'dino' ? 5 : 1);
    scene.add(ambientLight);

    // Load the 3D model
    const loader = new GLTFLoader();
    let object = null;

    loader.load(
      `./models/${modelName}/scene.gltf`,
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

    // Orbit controls (if required)
    let controls = null;
    if (modelName === 'dino') {
      controls = new OrbitControls(camera, renderer.domElement);
    }

    // Handle window resize for this specific renderer and camera
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle mouse movement for interaction
    const handleMouseMove = (e) => {
      if (object && modelName === 'eye') {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
        object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      container?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [modelName]);

  return <div key={key2} ref={containerRef} className={'container3D'}></div>;
};

export default ThreeDScene;
