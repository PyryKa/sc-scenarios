import styled from 'styled-components';
import { GLOBAL_VARIABLES } from '../../utils/global-variables/global-variables';

export const ScenarioContainer = styled.div`
    height: calc(100% - ${GLOBAL_VARIABLES.HEADER_MAX_H}px);
    width: 100%;
`