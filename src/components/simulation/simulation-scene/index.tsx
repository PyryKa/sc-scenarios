import { OrbitControls, Sphere, TransformControls, useContextBridge } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useContext } from "react";
import SimulationContext from "../../../contexts/simulationContext";
import AnimatableMesh from "../../meshes/basic/box-mesh";

interface CanvasProps {

}

const SimulationScene = (props: CanvasProps) => {
    const { currentFrame, selectedMeshName, transformMode } = useContext(SimulationContext);
    const { scene } = useThree()

    return (
        <scene>
            <OrbitControls makeDefault />\
            <TransformControls object={scene.getObjectByName(selectedMeshName ? selectedMeshName : '')} mode={transformMode} />
            <gridHelper args={[30, 30]} />
            <ambientLight intensity={.3} />
            <pointLight position={[-10, 10, -10]} intensity={1.5} />
            <mesh>
                <Sphere>
                    <meshPhongMaterial color="orange" />
                </Sphere>
            </mesh>
            <AnimatableMesh name="name1" position={[1, 1, 1 + currentFrame]} />
            <AnimatableMesh name="name2" position={[5 + currentFrame, -5, 5]} />
        </scene>
    )
}

export default SimulationScene