import { Sphere, useKTX2, useTexture } from "@react-three/drei";
import React, { useEffect } from "react";
import THREE, { BackSide, MeshPhongMaterial } from "three";
import stantonHurston from 'public\assets\stanton-hurston-1.jpg'

interface SkyBoxProps {

}

const SkyBox = (props: SkyBoxProps) => {
    // const texture = useKTX2('stanton-hurston-1.jpg')
    const texture = useTexture('space-bg.jpg')

    // useEffect(() => {
    //     console.log('texture ', texture)
    // }, [texture])

    // const texture = new THREE.TextureLoader().load('public\assets\stanton-hurston-1.jpg')

    return (
        <mesh >
            <Sphere args={[100, 25, 25]}>
                <meshBasicMaterial color='white' map={texture} side={BackSide}/>
            </Sphere>
        </mesh>
    )
}

export default SkyBox;