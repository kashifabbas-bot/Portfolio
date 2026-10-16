"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useDocumentVisible, useIsMobile } from "@/lib/hooks";

const ACCENT = "#00e5ff";
const ACCENT_2 = "#7c5cff";

function hash(index: number, salt: number): number {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function createGlowTexture(): THREE.Texture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.25, "rgba(255,255,255,0.6)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Particles({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const { camera } = useThree();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const from = new THREE.Color(ACCENT);
    const to = new THREE.Color(ACCENT_2);
    const mixed = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      const radius = 13 * Math.cbrt(hash(i, 1));
      const theta = hash(i, 2) * Math.PI * 2;
      const phi = Math.acos(2 * hash(i, 3) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      mixed.copy(from).lerp(to, hash(i, 4));
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [count]);

  const glowMap = useMemo(() => createGlowTexture(), []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      glowMap.dispose();
    };
  }, [geometry, glowMap]);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      scrollRef.current = Math.min(1, window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state, delta) => {
    const group = groupRef.current;
    const points = pointsRef.current;
    if (!group || !points) return;

    points.rotation.y += delta * 0.03;

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      state.pointer.y * 0.18,
      0.05,
    );
    group.rotation.z = THREE.MathUtils.lerp(
      group.rotation.z,
      -state.pointer.x * 0.1,
      0.05,
    );

    group.position.z = THREE.MathUtils.lerp(
      group.position.z,
      -scrollRef.current * 7,
      0.08,
    );

    const nextCameraX = THREE.MathUtils.lerp(
      camera.position.x,
      state.pointer.x * 0.7,
      0.05,
    );
    const nextCameraY = THREE.MathUtils.lerp(
      camera.position.y,
      state.pointer.y * 0.5,
      0.05,
    );
    camera.position.set(nextCameraX, nextCameraY, camera.position.z);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.08}
          sizeAttenuation
          vertexColors
          map={glowMap}
          transparent
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ParticleScene() {
  const mobile = useIsMobile();
  const active = useDocumentVisible();
  const count = mobile ? 1200 : 3000;

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 16], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Particles count={count} />
    </Canvas>
  );
}
