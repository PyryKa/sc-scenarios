import { Paper } from '@mui/material';
import styled from 'styled-components';
import { GLOBAL_VARIABLES } from '../../utils/global-variables/global-variables';

export const HomeContainer = styled.div`
    height: calc(100% - ${GLOBAL_VARIABLES.HEADER_MAX_H}px);
    width: 100%;
    display: flex;
    justify-content: center;
`
export const HomePaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 20px;
`