import { Paper } from '@mui/material'
import styled from 'styled-components'

export const TimelinePaper = styled(Paper)`
    position: absolute;
    left: 70px;
    bottom: 20px;
    width: calc(100% - 84px);
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const TimeLineContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
`