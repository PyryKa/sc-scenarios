import { Box, Button, IconButton, Paper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ButtonContainer, TimeLineContainer, TimelinePaper } from "./styles";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import SimulationContext from "../../../contexts/simulationContext";

interface TimelineProps {

}

const Timeline = (props: TimelineProps) => {
    const { currentFrame, updateCurrentFrame, animationIsPlaying, nextFrame, prevFrame, togglePlayAnimation } = useContext(SimulationContext)

    useEffect(() => {
        console.log('currentFrame', currentFrame)
    }, [currentFrame])
    return (
        <TimelinePaper>
            <ButtonContainer>
                <IconButton onClick={() => updateCurrentFrame(0)}>
                    <KeyboardDoubleArrowLeftIcon/>
                </IconButton>
                <IconButton onClick={prevFrame}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton onClick={togglePlayAnimation}>
                    {animationIsPlaying ? <StopCircleIcon /> : <PlayCircleFilledWhiteIcon />}
                </IconButton>
                <IconButton onClick={nextFrame}>
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </ButtonContainer>
            <TimeLineContainer>
                <div style={{position: 'relative', width: '100%', height: '4px', background: 'grey', margin: 'auto'}}>
                    <div style={{ background: 'white', borderRadius: '5px',
                        position: 'absolute', width: '10px', height: '10px', left: currentFrame, bottom: '-2px'}}>

                    </div>
                </div>
            </TimeLineContainer>
        </TimelinePaper>
    )
}

export default Timeline;