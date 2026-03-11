import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
            // Blue to cyan color range
            const t = Math.random();
            col[i * 3] = t * 0.1;
            col[i * 3 + 1] = 0.4 + t * 0.4;
            col[i * 3 + 2] = 0.8 + t * 0.2;
        }
        return [pos, col];
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingOrb({
    position,
    color,
    scale = 1,
}: {
    position: [number, number, number];
    color: string;
    scale?: number;
}) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.position.y =
            position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.4;
        mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    });

    return (
        <mesh ref={mesh} position={position} scale={scale}>
            <icosahedronGeometry args={[0.5, 1]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.15}
                wireframe
            />
        </mesh>
    );
}

function TechGrid() {
    const lines = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!lines.current) return;
        lines.current.rotation.z = state.clock.elapsedTime * 0.01;
    });

    const gridGeometry = useMemo(() => {
        const points = [];
        for (let i = 0; i < 12; i++) {
            const x1 = (Math.random() - 0.5) * 28;
            const y1 = (Math.random() - 0.5) * 18;
            const x2 = x1 + (Math.random() - 0.5) * 8;
            const y2 = y1 + (Math.random() - 0.5) * 8;
            points.push(new THREE.Vector3(x1, y1, -5), new THREE.Vector3(x2, y2, -5));
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }, []);

    return (
        <group ref={lines}>
            <lineSegments geometry={gridGeometry}>
                <lineBasicMaterial color="#00d4ff" transparent opacity={0.12} />
            </lineSegments>
        </group>
    );
}

export function ParticleBackground() {
    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} color="#6366f1" intensity={1} />
                <pointLight position={[-5, -5, 5]} color="#06b6d4" intensity={1} />
                <Particles count={150} />
                <TechGrid />
                <FloatingOrb position={[-5, 2, -3]} color="#6366f1" scale={2} />
                <FloatingOrb position={[5, -2, -4]} color="#06b6d4" scale={1.5} />
                <FloatingOrb position={[0, 3, -5]} color="#f59e0b" scale={1} />
                <FloatingOrb position={[-3, -3, -2]} color="#10b981" scale={1.2} />
            </Canvas>
        </div>
    );
}
