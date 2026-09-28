import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera & WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Floating Laptop / Cyber Computer Console Mesh Group
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(2.4, 0.12, 1.6);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.6;
    laptopGroup.add(baseMesh);

    // Keyboard Glow Accent
    const kbGeo = new THREE.PlaneGeometry(2.1, 1.2);
    const kbMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.rotation.x = -Math.PI / 2;
    kbMesh.position.set(0, -0.53, 0.1);
    laptopGroup.add(kbMesh);

    // Laptop Screen Frame
    const screenGeo = new THREE.BoxGeometry(2.4, 1.6, 0.08);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.8,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.25, -0.75);
    screenMesh.rotation.x = -Math.PI * 0.08;
    laptopGroup.add(screenMesh);

    // Glowing Holographic Display Face
    const displayGeo = new THREE.PlaneGeometry(2.2, 1.4);
    const displayMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const displayMesh = new THREE.Mesh(displayGeo, displayMat);
    displayMesh.position.set(0, 0.25, -0.7);
    displayMesh.rotation.x = -Math.PI * 0.08;
    laptopGroup.add(displayMesh);

    // 3. Orbiting 3D Tech Emblems (React Atom, Gemini Polyhedron, Node Cylinder, C++ Cube)
    const emblemsGroup = new THREE.Group();
    scene.add(emblemsGroup);

    // React Torus Ring 1
    const r1Geo = new THREE.TorusGeometry(0.8, 0.03, 16, 100);
    const r1Mat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const r1Mesh = new THREE.Mesh(r1Geo, r1Mat);
    r1Mesh.rotation.x = Math.PI / 3;
    emblemsGroup.add(r1Mesh);

    // React Torus Ring 2
    const r2Mesh = new THREE.Mesh(r1Geo, r1Mat);
    r2Mesh.rotation.x = -Math.PI / 3;
    emblemsGroup.add(r2Mesh);

    // Gemini AI Icosahedron Core
    const aiGeo = new THREE.IcosahedronGeometry(0.4, 1);
    const aiMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.8,
    });
    const aiMesh = new THREE.Mesh(aiGeo, aiMat);
    emblemsGroup.add(aiMesh);

    // 4. Particle Matrix Galaxy (1200+ vertices)
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // 5. Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4, 30);
    cyanLight.position.set(3, 4, 4);
    scene.add(cyanLight);

    const indigoLight = new THREE.PointLight(0x6366f1, 3, 30);
    indigoLight.position.set(-3, -3, 3);
    scene.add(indigoLight);

    // 6. Smooth Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = (e.clientX - halfX) / halfX;
      mouseY = (e.clientY - halfY) / halfY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Laptop floating physics
      laptopGroup.position.y = Math.sin(elapsed * 1.5) * 0.15;
      laptopGroup.rotation.y = Math.sin(elapsed * 0.8) * 0.1;

      // Emblem orbit
      emblemsGroup.rotation.y = elapsed * 0.4;
      emblemsGroup.rotation.x = elapsed * 0.2;
      aiMesh.rotation.y = -elapsed * 0.8;

      particlesMesh.rotation.y = elapsed * 0.03;

      // Mouse camera lerp
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
    />
  );
};
