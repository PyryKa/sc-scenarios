import { OrbitControls, Sphere, TransformControls, useContextBridge } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useContext } from "react";
import SimulationContext from "../../../contexts/simulationContext";
import AnimatableMesh from "../../meshes/basic/box-mesh";
import ShipMesh from "../../meshes/ship";
import Redeemer from "../../meshes/ship/redeemer";
import CustomTransformControls from "../transform-controls";
import SkyBox from "../utils/skybox";

interface CanvasProps {

}

const ThreeCanvasWrapper = (props: CanvasProps) => {
    const { currentFrame, selectedMeshName, transformMode } = useContext(SimulationContext);
    // const { scene } = useThree()
    const ContextBridge = useContextBridge(SimulationContext);


    return (
        <Canvas>
            <ContextBridge>
                <Suspense fallback={<mesh></mesh>}>
                    <OrbitControls makeDefault />
                    {selectedMeshName !== null &&
                        <CustomTransformControls />
                    }
                    <SkyBox />
                    <gridHelper args={[30, 30]} />
                    <ambientLight intensity={.3} />
                    <pointLight position={[0, 10, 0]} intensity={1.5} />
                    {/* <mesh> */}
                    {/* <Sphere>
                        <meshPhongMaterial color="orange" />
                    </Sphere> */}
                    {/* </mesh> */}
                    <Redeemer/>
                    <AnimatableMesh name="name1" position={[1, 1, 1 + currentFrame]} />
                    <AnimatableMesh name="name2" position={[5 + currentFrame, -5, 5]} />
                </Suspense>
            </ContextBridge>

        </Canvas>
    )
}

export default ThreeCanvasWrapper

