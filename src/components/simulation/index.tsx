import React, { useState } from "react";
import { Mesh } from "three";
import { SimulationContextProvider } from "../../contexts/simulationContext";
import { TransformMode } from "../../utils/enums/transform-modes";
import SideDrawer from "./side-drawer";
import { SimulationContainer } from "./styles";
import ThreeCanvasWrapper from "./three-canvas-wrapper";
import Timeline from "./timeline";

interface Simulation {

}

const Simulation = (props: Simulation) => {
    //AnimationContext
    const [currentFrame, setCurrentFrame] = useState<number>(0);
    const [animationIsPlaying, setAnimationIsPLaying] = useState<boolean>(false);
    //TransformContext
    const [selectedMeshName, setSelectedMeshName] = useState<string | null>(null);
    const [transformMode, setTransformMode] = useState<TransformMode>(TransformMode.translate);

    const togglePlayAnimation = () => {
        setAnimationIsPLaying(!animationIsPlaying);
    }

    const updateCurrentFrame = (frame: number) => {
        setCurrentFrame(frame);
    }

    const nextFrame = () => {
        updateCurrentFrame(currentFrame + 1)
    }

    const prevFrame = () => {
        updateCurrentFrame(currentFrame - 1)
    }
    
    const updateSelectedMeshName = (name: string | null) => {
        console.log('name ', name)
        setSelectedMeshName(name);
    }

    const updateTransformMode = (mode: TransformMode) => {
        setTransformMode(mode);
    }

    const simulationContextValues = {
        currentFrame,
        updateCurrentFrame,
        animationIsPlaying,
        togglePlayAnimation,
        nextFrame,
        prevFrame,
        selectedMeshName,
        updateSelectedMeshName,
        transformMode,
        updateTransformMode
    }

    

    return (
        <SimulationContextProvider value={simulationContextValues}>
            <SimulationContainer>
                <SideDrawer />
                <ThreeCanvasWrapper />
                <Timeline />
            </SimulationContainer>
        </SimulationContextProvider>

    )
}

export default Simulation;