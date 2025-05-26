import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Anatomy3DViewer() {
  return (
    <div className="h-96 w-full bg-gray-100 rounded-lg">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}