import React, { useContext, useState } from "react";
import SimulationContext from "../../../contexts/simulationContext";

interface AnimatableMeshProps {
    position: [
        x: number,
        y: number,
        z: number
    ],
    name: string
}

const AnimatableMesh = (props: AnimatableMeshProps) => {
    const { selectedMeshName, updateSelectedMeshName, nextFrame } = useContext(SimulationContext);
    const [hovered, setHovered] = useState<boolean>(false);

    const handleClick = (e: any) => {
        updateSelectedMeshName(props.name)
    }

    const handleMiss = (e:any) => {
        updateSelectedMeshName(null);
    }
    return (
        <mesh
            onClick={(e) => (e.stopPropagation(), handleClick(e))}
            // If a click happened but this mesh wasn't hit we null out the target,
            // This works because missed pointers fire before the actual hits
            onPointerMissed={(e) => e.type === 'click' && (handleMiss(e))}
            // Right click cycles through the transform modes
            // onContextMenu={(e) => snap.current === name && (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => setHovered(false)}
            position={props.position}
            name={props.name}

        >
            <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
            <meshPhongMaterial attach='material' color={props.name === selectedMeshName ? '#ff6080' : 'white'}/>
        </mesh>
    )
}

export default AnimatableMesh;