import React from "react";

const BasePlane = () => {

    return(
    <mesh rotation={[-Math.PI / 2 , 0 ,0]} position={[0, 0, 0]}>
        <planeBufferGeometry attach='geometry' args={[100,100]}/>
        <meshBasicMaterial attach='material' color='#082444'/>
    </mesh>
    )
}

export default BasePlane;