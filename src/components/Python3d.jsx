/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 python.gltf --transform 
Files: python.gltf [10.38KB] > C:\Users\admin\Downloads\python_programming_language\python-transformed.glb [5.09KB] (51%)
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import python from '../assets/objet3d/python-transformed.glb'

export function Python3d(props) {
  const { nodes, materials } = useGLTF(python)
  return (
    <group {...props} dispose={null}>
       <ambientLight intensity={1}/>
       <directionalLight intensity={2}/>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[-0.002, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.501} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['.001']} position={[-0.002, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={1.501} />
    </group>
  )
}

useGLTF.preload(python)
