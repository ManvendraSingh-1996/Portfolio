import { Canvas } from '@react-three/fiber';
import { Stars, Float, Sphere, Torus, Octahedron } from '@react-three/drei';

function AnimatedShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Torus args={[1.5, 0.4, 16, 100]} position={[-4, 2, -5]} scale={0.5}>
          <meshStandardMaterial color="#8b5cf6" wireframe opacity={0.5} transparent />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[1, 32, 32]} position={[4, -2, -6]} scale={0.8}>
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.4} transparent />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Octahedron args={[1]} position={[0, -4, -8]} scale={1.2}>
          <meshStandardMaterial color="#ec4899" wireframe opacity={0.3} transparent />
        </Octahedron>
      </Float>
    </>
  );
}

export function Background() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Adds beautiful moving stars */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <AnimatedShapes />
      </Canvas>
    </div>
  );
}
