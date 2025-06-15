'use client'

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MeshStandardMaterial, Mesh } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: Mesh
    Object_3: Mesh
    Object_4: Mesh
    Object_5: Mesh
    Object_6: Mesh
    Object_7: Mesh
    Object_8: Mesh
    Object_9: Mesh
    Object_10: Mesh
    Object_11: Mesh
    Object_12: Mesh
    Object_13: Mesh
  }
  materials: {
    Desk_1: MeshStandardMaterial
    Posters: MeshStandardMaterial
    Keyboard: MeshStandardMaterial
    speaker_2: MeshStandardMaterial
    BG_Dark: MeshStandardMaterial
    Carpet: MeshStandardMaterial
    Emission: MeshStandardMaterial
    Emission_Blue: MeshStandardMaterial
    Foam_Acoustic: MeshStandardMaterial
    Trim_Sheet_Wall: MeshStandardMaterial
    Monitor_Single: MeshStandardMaterial
  }
}

type Props = React.ComponentProps<'group'>

export default function comp(props: Props) {
  const { nodes, materials } = useGLTF('/assets/Models/sci-fi_computer_room.glb') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.987}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Desk_1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Posters} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Keyboard} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.speaker_2} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.BG_Dark} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Carpet} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Emission} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Emission_Blue} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Foam_Acoustic} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Trim_Sheet_Wall} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Monitor_Single} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Models/sci-fi_computer_room.glb')
