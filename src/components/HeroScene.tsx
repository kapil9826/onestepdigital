import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function DataFlowRing({ radius, speed, color, count = 8 }: {
    radius: number;
    speed: number;
    color: string;
    count?: number;
}) {
    const group = useRef<THREE.Group>(null);
    const sphereRefs = useRef<THREE.Mesh[]>([]);

    useFrame((state) => {
        if (!group.current) return;
        group.current.rotation.y += speed * 0.01;
        group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        sphereRefs.current.forEach((mesh, i) => {
            if (!mesh) return;
            const t = state.clock.elapsedTime * speed + (i / count) * Math.PI * 2;
            (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity =
                0.5 + Math.sin(t * 2) * 0.3;
        });
    });

    const positions = useMemo(() =>
        Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * Math.PI * 2;
            return [
                Math.cos(angle) * radius,
                Math.sin(angle * 0.5) * 0.8,
                Math.sin(angle) * radius,
            ] as [number, number, number];
        }), [count, radius]);

    return (
        <group ref={group}>
            {positions.map((pos, i) => (
                <mesh
                    key={i}
                    position={pos}
                    ref={(el) => { if (el) sphereRefs.current[i] = el; }}
                >
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.6}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}

function CoreSphere() {
    return (
        <Sphere args={[1.2, 64, 64]}>
            <MeshDistortMaterial
                color="#1e40af"
                attach="material"
                distort={0.25}
                speed={2}
                roughness={0}
                metalness={0.6}
                transparent
                opacity={0.85}
            />
        </Sphere>
    );
}

function TechCube({ position }: { position: [number, number, number] }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x = state.clock.elapsedTime * 0.4;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.6;
        mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.3;
    });

    return (
        <mesh ref={mesh} position={position}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial
                color="#06b6d4"
                wireframe
                transparent
                opacity={0.7}
            />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} color="#6366f1" intensity={3} />
            <pointLight position={[-5, -5, 5]} color="#06b6d4" intensity={2} />
            <pointLight position={[0, 0, 8]} color="#f59e0b" intensity={1} />
            <CoreSphere />
            <DataFlowRing radius={2.2} speed={0.8} color="#06b6d4" count={10} />
            <DataFlowRing radius={3} speed={-0.5} color="#6366f1" count={8} />
            <DataFlowRing radius={3.8} speed={0.3} color="#f59e0b" count={6} />
            <TechCube position={[-4, 1, 0]} />
            <TechCube position={[4, -1, -1]} />
            <TechCube position={[0, 3, -2]} />
            <TechCube position={[-3, -2, 0]} />
        </>
    );
}

export function HeroScene() {
    return (
        <div style={{ width: "100%", height: "100%", minHeight: 480 }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 55 }}
                style={{ background: "transparent" }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
