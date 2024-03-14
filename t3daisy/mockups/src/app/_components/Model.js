'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export default function Model(props) {
    const { scene } = useGLTF('/myScene13.glb')
  
    useFrame((state, delta) => (scene.rotation.y += delta))
  
    return <primitive object={scene} {...props} />
  }

