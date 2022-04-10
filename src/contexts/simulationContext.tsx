import { createContext } from "react";
import { TransformMode } from "../utils/enums/transform-modes";

export interface SimulationContextProps {
    currentFrame: number,
    updateCurrentFrame: (frame:number) => void,
    animationIsPlaying: boolean,
    togglePlayAnimation: () => void,
    nextFrame: () => void,
    prevFrame: () => void,
    selectedMeshName: string | null,
    updateSelectedMeshName: (name:string | null) => void,
    transformMode: TransformMode,
    updateTransformMode: (mode:TransformMode) => void
}

const SimulationContext = createContext<SimulationContextProps>({
    currentFrame: 0,
    updateCurrentFrame: (frame:number) => {},
    animationIsPlaying: false,
    togglePlayAnimation: () => {},
    nextFrame: () => {},
    prevFrame: () => {},
    selectedMeshName: null,
    updateSelectedMeshName: (name:string | null) => {},
    transformMode: TransformMode.translate,
    updateTransformMode: (mode:string) => {}
})


export const SimulationContextProvider = SimulationContext.Provider;
export const SimulationContextConsumer = SimulationContext.Consumer;
export default SimulationContext;