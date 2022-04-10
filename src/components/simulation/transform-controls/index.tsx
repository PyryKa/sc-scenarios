import { TransformControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useContext, useEffect } from "react"
import SimulationContext from "../../../contexts/simulationContext"

interface TransformControlsProps {

}

const CustomTransformControls = (props: TransformControlsProps) => {
    const { selectedMeshName, transformMode } = useContext(SimulationContext)
    const { scene } = useThree();

    useEffect(() => {
        console.log('transformMode ', transformMode)
    }, [transformMode])
    return(
        <TransformControls enabled={selectedMeshName !== null} object={scene.getObjectByName(selectedMeshName !== null ? selectedMeshName : 'invalid')} mode={transformMode} />
    )
}

export default CustomTransformControls;