import { createContext } from "react";
import { Mesh } from "three";
import { TransformMode } from "../utils/enums/transform-modes";



// export interface TransformContextProps {
//     selectedMeshName: string | null,
//     updateSelectedMeshName: (name:string | null) => void,
//     transformMode: TransformMode,
//     updateTransformMode: (mode:TransformMode) => void
// }

// const TransformContext = createContext<TransformContextProps>({
//     selectedMeshName: null,
//     updateSelectedMeshName: (name:string | null) => {},
//     transformMode: TransformMode.translate,
//     updateTransformMode: (mode:string) => {}
// })


// export const TransformContextProvider = TransformContext.Provider;
// export const TransformContextConsumer = TransformContext.Consumer;
// export default TransformContext;