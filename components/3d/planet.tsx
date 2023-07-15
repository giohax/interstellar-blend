import { Sphere } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Planet() {
  return (
    <Sphere args={[5, 32, 32]}>
      <meshStandardMaterial attach="material" color='yellow' />
    </Sphere>
  )
}
export default Planet