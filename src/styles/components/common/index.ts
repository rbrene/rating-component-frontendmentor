import styled from 'styled-components';
import { animated } from 'react-spring';


export const Main = styled(animated.main)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Section = styled(animated.section)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
`;