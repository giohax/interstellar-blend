import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import Blackhole from './blackhole'
import { SkyBox } from './skybox'

function Particles() {
    const controlsRef = useRef<any>()
    const { camera, gl } = useThree()

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.update()
        }
    })

    return <OrbitControls
        ref={controlsRef}
        args={[camera, gl.domElement]}
        enableZoom
        minDistance={1}  // minimum zoom distance
        maxDistance={500}  // maximum zoom distance
    />
}

const SpaceBackground: React.FC = () => {
    return (
        <Canvas style={{ position: "fixed", top: 0, left: 0 }}>
            
            <Stars
                radius={0} // Radius of the inner sphere (default=100)
                depth={250} // Depth of area where stars should fit (default=50)
                count={10000} // Amount of stars (default=5000)
                factor={6} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade // Faded dots (default=false)
            />
            <Particles />
            <Suspense fallback={null}>
                <SkyBox />
            </Suspense>
            
            <Suspense fallback={null}>
            <Blackhole/>
            </Suspense>
        </Canvas>
    )
}

export default SpaceBackground