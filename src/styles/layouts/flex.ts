import styled from 'styled-components';
import { Container } from './containers';
import { rem } from '../../helpers/units';


type DirectionPropType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrapPropType = 'wrap' | 'nowrap';

interface Props {
    $gap?: number;
    $direction?: DirectionPropType;
    $wrap?: FlexWrapPropType;
}

interface AlignProps {
    $direction?: string;
    $alignItems?: 'start' | 'center' | 'end' | string;
    $justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-evenly' | 'space-around';
}


export const Flex = styled(Container) <Props>`
    display: flex;
    ${({ $direction }) => $direction && `flex-direction: ${$direction}`};
    ${({ $wrap }) => $wrap && `flex-wrap: ${$wrap}`};
    ${({ $gap }) => $gap && `gap: ${rem($gap)}`};
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const FlexCenter = styled(FlexColumn)`
    align-items: center;
    justify-content: center;
`;

export const FlexAlign = styled(Flex) <AlignProps>`
    align-items: ${({ $alignItems }) => $alignItems ? $alignItems : 'center'};
    ${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent}`};
`;