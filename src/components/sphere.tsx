"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Sphere = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.IcosahedronGeometry(1.2, 1);

    // Material
    const material = new THREE.MeshStandardMaterial({
      color: "#3b82f6",
      emissive: "#3b82f6",
      emissiveIntensity: 0.3,
      wireframe: true,
    });

    // Mesh
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);


    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        mouseX = (clientX / innerWidth) * 2 - 1;
        mouseY = -(clientY / innerHeight) * 2 + 1;
    }

    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getDelta();

      // Slow constant rotation
      icosahedron.rotation.x += 0.05 * elapsedTime;
      icosahedron.rotation.y += 0.05 * elapsedTime;
      
      // Follow mouse with more intensity
      const targetRotationX = mouseY * Math.PI * 0.3;
      const targetRotationY = mouseX * Math.PI * 0.3;
      icosahedron.rotation.x += (targetRotationX - icosahedron.rotation.x) * 0.05;
      icosahedron.rotation.y += (targetRotationY - icosahedron.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Sphere;
