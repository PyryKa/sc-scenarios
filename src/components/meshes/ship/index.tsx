import { useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type GLFTResult = GLTF & {
    nodes: {
        Pyramid: THREE.Mesh;
    };
    materials: {
        ['default']: THREE.MeshStandardMaterial;
    };
};

const ShipMesh = () => {
    // const gltf = useLoader(GLTFLoader, 'redeemer.glft')

    // const { nodes, materials } = useGLTF('redeemer.glft') as GLFTResult;
    // return (
    //     <Suspense fallback={null}>
    //         <primitive object={gltf.scene} />
    //         </Suspense>
    //     // <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry}/>
    // )
}

// useGLTF.preload('redeemer.gltf')

export default ShipMesh;