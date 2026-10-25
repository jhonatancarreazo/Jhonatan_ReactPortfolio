import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Eye, RotateCw, Sun, Moon, Layers, ChevronDown, ChevronUp } from 'lucide-react';

export const ThreeDeviceScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWireframe, setIsWireframe] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [activeScreenTab, setActiveScreenTab] = useState<'preview' | 'code'>('preview');

  const controlsRef = useRef<OrbitControls | null>(null);
  const materialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const screenMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const canvasTextureRef = useRef<THREE.CanvasTexture | null>(null);

  // Function to create procedural screen texture
  const generateScreenCanvas = (mode: 'preview' | 'code') => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    if (mode === 'preview') {
      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 1024, 640);

      // Browser Header bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, 1024, 52);

      // Window controls
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(30, 26, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(52, 26, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(74, 26, 7, 0, Math.PI * 2);
      ctx.fill();

      // URL bar
      ctx.fillStyle = '#0b0f19';
      ctx.roundRect(110, 12, 500, 28, 6);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('https://tunegocio.com.co (Carga ultrarrápida)', 125, 31);

      // Lighthouse score badge on top right
      ctx.fillStyle = '#064e3b';
      ctx.roundRect(840, 12, 160, 28, 14);
      ctx.fill();
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('⚡ 100% Mobile Ready', 855, 31);

      // Hero banner inside simulated site
      const grad = ctx.createLinearGradient(0, 52, 1024, 400);
      grad.addColorStop(0, '#1e1b4b');
      grad.addColorStop(1, '#0f172a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 52, 1024, 280);

      // Title inside screen
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Consultorio Odontológico del Caribe', 60, 130);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '18px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Atención personalizada en Cartagena · Citas en línea directo al WhatsApp', 60, 175);

      // CTA button inside screen
      ctx.fillStyle = '#10b981';
      ctx.roundRect(60, 215, 230, 48, 8);
      ctx.fill();
      ctx.fillStyle = '#022c22';
      ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Agendar por WhatsApp', 85, 245);

      // Secondary button
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.strokeRect(310, 215, 170, 48);
      ctx.fillStyle = '#ffffff';
      ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Ver Especialidades', 330, 245);

      // 3 Feature Cards
      const cardWidth = 280;
      const cardHeight = 220;
      const cardY = 360;

      const services = [
        { title: 'Ortodoncia Invisible', text: 'Tecnología estética y rápida.' },
        { title: 'Diseño de Sonrisa', text: 'Resultados naturales garantizados.' },
        { title: 'Urgencias 24/7', text: 'Respuesta inmediata por chat.' },
      ];

      services.forEach((srv, i) => {
        const x = 60 + i * 320;
        ctx.fillStyle = '#1e293b';
        ctx.roundRect(x, cardY, cardWidth, cardHeight, 12);
        ctx.fill();

        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(x + 24, cardY + 24, 40, 40);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(srv.title, x + 24, cardY + 100);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(srv.text, x + 24, cardY + 130);
      });
    } else {
      // CODE TAB
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, 1024, 640);

      // Header bar
      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, 1024, 46);

      ctx.fillStyle = '#6b7280';
      ctx.font = '14px monospace';
      ctx.fillText('App.tsx · TypeScript & React (Cartagena Web Stack)', 30, 28);

      const codeLines = [
        '// Código limpio, modular y sin plantillas lentas',
        'import React from "react";',
        'import { WhatsAppConversionButton } from "./components";',
        '',
        'export const LandingCartagena = () => {',
        '  const metrics = { fcp: "0.4s", lighthouse: 99, mobileOptimized: true };',
        '  ',
        '  return (',
        '    <section className="hero-conversion">',
        '      <h1>Tu negocio abierto las 24 horas</h1>',
        '      <p>Convierte visitantes en clientes reales por WhatsApp</p>',
        '      <WhatsAppConversionButton destination="57300..." />',
        '    </section>',
        '  );',
        '};',
      ];

      ctx.font = '17px "JetBrains Mono", monospace';
      codeLines.forEach((line, index) => {
        if (line.startsWith('//')) ctx.fillStyle = '#64748b';
        else if (line.includes('import') || line.includes('export') || line.includes('const') || line.includes('return')) ctx.fillStyle = '#f43f5e';
        else if (line.includes('"')) ctx.fillStyle = '#34d399';
        else if (line.includes('<') || line.includes('>')) ctx.fillStyle = '#38bdf8';
        else ctx.fillStyle = '#e2e8f0';

        ctx.fillText(line, 40, 90 + index * 32);
      });
    }

    return canvas;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js skill directive
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0f19);
    scene.fog = new THREE.Fog(0x0b0f19, 10, 28);

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(3.8, 3.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Studio Environment Reflection (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 3. Studio PBR Lighting Rig (Warm Key Light + Cool Fill)
    const hemiLight = new THREE.HemisphereLight(0xdbeafe, 0x0f172a, 1.2);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const dirLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    dirLight.position.set(5, 7, 4);
    dirLight.castShadow = !isSoftwareGl;
    if (dirLight.shadow) {
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.bias = -0.0005;
      dirLight.shadow.normalBias = 0.02;
    }
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // Secondary rim light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.0);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // 4. OrbitControls with smooth damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.04; // Don't clip underneath ground
    controls.minDistance = 3.5;
    controls.maxDistance = 10;
    controls.target.set(0, 0.7, 0);
    controlsRef.current = controls;

    // 5. Composite 8-Part Procedural 3D Laptop Device Model (THREE.Group)
    const deviceGroup = new THREE.Group();
    materialsRef.current = [];

    // Part 1: Aluminum Unibody Base Chassis
    const baseGeo = new THREE.BoxGeometry(3.2, 0.12, 2.2);
    const chassisMat = new THREE.MeshPhysicalMaterial({
      color: 0x222734,
      metalness: 0.85,
      roughness: 0.28,
      clearcoat: 0.1,
    });
    materialsRef.current.push(chassisMat);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.y = 0.06;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    deviceGroup.add(baseMesh);

    // Part 2: Chiclet Keyboard Inset Deck
    const kbGeo = new THREE.BoxGeometry(2.8, 0.015, 1.1);
    const kbMat = new THREE.MeshPhysicalMaterial({
      color: 0x111622,
      metalness: 0.1,
      roughness: 0.75,
    });
    materialsRef.current.push(kbMat);
    const kbMesh = new THREE.Mesh(kbGeo, kbMat);
    kbMesh.position.set(0, 0.125, -0.35);
    deviceGroup.add(kbMesh);

    // Part 3: Trackpad Plate with subtle hairline bevel
    const trackpadGeo = new THREE.BoxGeometry(1.0, 0.01, 0.7);
    const trackpadMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e2433,
      metalness: 0.4,
      roughness: 0.35,
    });
    materialsRef.current.push(trackpadMat);
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, 0.124, 0.62);
    deviceGroup.add(trackpadMesh);

    // Part 4: Display Screen Lid Group with Hinge Pivot
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.12, -1.08);

    // Lid chassis back
    const lidGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    const lidMesh = new THREE.Mesh(lidGeo, chassisMat);
    lidMesh.position.set(0, 1.05, 0);
    lidMesh.castShadow = true;
    lidGroup.add(lidMesh);

    // Part 5: Procedural Screen with HTML5 Canvas albedo
    const screenGeo = new THREE.PlaneGeometry(3.04, 1.94);
    const screenCanvas = generateScreenCanvas(activeScreenTab);
    const screenTex = new THREE.CanvasTexture(screenCanvas);
    screenTex.colorSpace = THREE.SRGBColorSpace;
    screenTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    canvasTextureRef.current = screenTex;

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTex,
    });
    screenMaterialRef.current = screenMat;
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 1.05, 0.042);
    lidGroup.add(screenMesh);

    // Part 6: Camera bezel dot / lens
    const lensGeo = new THREE.SphereGeometry(0.02, 16, 16);
    const lensMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.position.set(0, 2.04, 0.043);
    lidGroup.add(lensMesh);

    // Angle the lid open at 108 degrees
    lidGroup.rotation.x = 0.34;
    deviceGroup.add(lidGroup);

    // Part 7: Rubber Base Feet (4 corners)
    const footGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12);
    const footMat = new THREE.MeshBasicMaterial({ color: 0x0a0d14 });
    const footOffsets = [
      [-1.4, -0.9],
      [1.4, -0.9],
      [-1.4, 0.9],
      [1.4, 0.9],
    ];
    footOffsets.forEach(([fx, fz]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(fx, 0.005, fz);
      deviceGroup.add(foot);
    });

    // Part 8: Radial Contact Shadow Grounding Plane (depthWrite false, grounded flush)
    const shadowGeo = new THREE.PlaneGeometry(5.2, 4.2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0,0,0,0.7)');
      grad.addColorStop(0.5, 'rgba(0,0,0,0.3)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.001;
    scene.add(shadowPlane);

    // Center and lift device
    deviceGroup.position.set(0, 0.02, 0);
    scene.add(deviceGroup);

    // Soft subtle ambient floating animation variables
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      const elapsedTime = clock.getElapsedTime();

      // Gentle subtle floating breathing motion
      deviceGroup.position.y = 0.02 + Math.sin(elapsedTime * 1.2) * 0.03;
      deviceGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.05;

      controls.update();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update screen texture on activeScreenTab change
  useEffect(() => {
    if (canvasTextureRef.current && screenMaterialRef.current) {
      const newCanvas = generateScreenCanvas(activeScreenTab);
      canvasTextureRef.current.image = newCanvas;
      canvasTextureRef.current.needsUpdate = true;
    }
  }, [activeScreenTab]);

  // Wireframe toggle effect
  useEffect(() => {
    materialsRef.current.forEach((m) => {
      m.wireframe = isWireframe;
      m.needsUpdate = true;
    });
  }, [isWireframe]);

  // Lighting toggle (Day / Cartagena Night)
  useEffect(() => {
    if (dirLightRef.current && hemiLightRef.current) {
      if (isNightMode) {
        dirLightRef.current.color.setHex(0x38bdf8);
        dirLightRef.current.intensity = 1.4;
        hemiLightRef.current.color.setHex(0x1e1b4b);
        hemiLightRef.current.intensity = 0.7;
      } else {
        dirLightRef.current.color.setHex(0xffedd5);
        dirLightRef.current.intensity = 2.2;
        hemiLightRef.current.color.setHex(0xdbeafe);
        hemiLightRef.current.intensity = 1.2;
      }
    }
  }, [isNightMode]);

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.target.set(0, 0.7, 0);
    }
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[580px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
      {/* 3D WebGL Canvas mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating subtle overlay badge: Top-Left (Anti-slop clean typography) */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
        <span className="font-semibold text-white">Simulador 3D:</span>
        <span>Rendimiento Web Real</span>
        <span className="text-slate-500">·</span>
        <span className="text-emerald-400">WebGL PBR</span>
      </div>

      {/* Interactive Screen Tab Switcher: Top-Right */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 p-1 rounded-lg bg-slate-900/90 border border-slate-800">
        <button
          onClick={() => setActiveScreenTab('preview')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            activeScreenTab === 'preview'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Vista Web
        </button>
        <button
          onClick={() => setActiveScreenTab('code')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            activeScreenTab === 'code'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Código React
        </button>
      </div>

      {/* Collapsible Bottom Control Dock (Strictly <= 15% viewport footprint) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-[620px]">
        {/* Toggle Collapse Pill */}
        <div className="flex justify-center mb-1.5">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/95 border border-slate-800 text-[11px] font-medium text-slate-400 hover:text-white transition-all shadow-md"
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Mostrar controles 3D</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Modo silencioso</span>
              </>
            )}
          </button>
        </div>

        {/* The Dock Surface */}
        {!isDockCollapsed && (
          <div className="flex items-center justify-between gap-3 p-2.5 px-4 rounded-xl bg-slate-900/95 border border-slate-800 shadow-xl text-xs text-slate-300">
            <span className="hidden sm:inline text-slate-400 font-medium">Inspeccionar modelo:</span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsWireframe(!isWireframe)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-colors ${
                  isWireframe
                    ? 'bg-sky-500/20 border-sky-400/50 text-sky-300'
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:text-white'
                }`}
                title="Alternar vista en malla de alambre"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="text-[11px]">Malla</span>
              </button>

              <button
                onClick={() => setIsNightMode(!isNightMode)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-colors ${
                  isNightMode
                    ? 'bg-indigo-500/20 border-indigo-400/50 text-indigo-300'
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:text-white'
                }`}
                title="Cambiar iluminación del estudio"
              >
                {isNightMode ? <Moon className="w-3.5 h-3.5 text-indigo-300" /> : <Sun className="w-3.5 h-3.5 text-amber-300" />}
                <span className="text-[11px]">{isNightMode ? 'Noche' : 'Día'}</span>
              </button>

              <button
                onClick={handleResetCamera}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
                title="Reiniciar ángulo de cámara"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="text-[11px]">Reiniciar</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500 font-mono hidden md:block">
              Arrastra para rotar · Scroll para zoom
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
