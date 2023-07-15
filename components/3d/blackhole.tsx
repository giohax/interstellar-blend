import { useGLTF } from "@react-three/drei";
export default function Blackhole() {
    const gltf = useGLTF("/models/blackhole/scene.gltf");
    return <primitive object={gltf.scene} rotation={[9.5, Math.PI / 2, 0]} />;
}