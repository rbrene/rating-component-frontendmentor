import styled from 'styled-components';
import { animated } from 'react-spring';


export const Container = styled(animated.div)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

interface Props {
    $top?: number;
    $right?: number;
    $bottom?: number;
    $left?: number;
    $zIndex?: number;
};


export const AbsoluteContainer = styled(animated.div) <Props>`
    position: absolute;
    top: ${({ $top }) => $top ? $top : '0'};
    right: ${({ $right }) => $right ? $right : '0'};
    bottom: ${({ $bottom }) => $bottom ? $bottom : '0'};
    left: ${({ $left }) => $left ? $left : '0'};
    width: 100%;
    height: 100%;
    z-index: ${({ $zIndex }) => $zIndex ? $zIndex : 'inherit'};
`;


export const FixedContainer = styled(animated.div) <Props>`
    position: fixed;
    top: ${({ $top }) => $top ? $top : '0'};
    right: ${({ $right }) => $right ? $right : '0'};
    bottom: ${({ $bottom }) => $bottom ? $bottom : '0'};
    left: ${({ $left }) => $left ? $left : '0'};
    width: 100%;
    height: 100%;
    z-index: ${({ $zIndex }) => $zIndex ? $zIndex : 'inherit'};
`;
