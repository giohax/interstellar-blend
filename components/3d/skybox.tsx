import { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { TextureLoader, SphereGeometry, MeshBasicMaterial, Mesh, BackSide } from 'three'

export function SkyBox() {
  const texture = useLoader(TextureLoader, '/images/skybox.png')

  // Getting the scene from useThree hook
  const { scene } = useThree();

  useEffect(() => {
    // Create a Sphere Geometry
    const geometry = new SphereGeometry(500, 60, 40)
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1)

    // Create a basic material that contains the texture we just loaded as its map
    const material = new MeshBasicMaterial({
      map: texture
    })

    // Create a Mesh containing the geometry and material
    const skyBox = new Mesh(geometry, material)

    // Then add the skybox to your scene
    scene.add(skyBox)
  }, [texture, scene]) // passing scene as a dependency

  return null
}
