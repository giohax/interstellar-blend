import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Blackhole() {
    const gltf = useGLTF("/models/blackhole/scene.gltf");

    useFrame((state, delta) => {
        if (gltf.scene) {
            gltf.scene.rotation.y += delta;
        }
    });

    
    return <primitive object={gltf.scene} rotation={[9.5, Math.PI / 2, 0]} />;
}