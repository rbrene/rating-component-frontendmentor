import styled from 'styled-components';
import { animated } from 'react-spring';
import * as Element from './rating';
import { P } from '../../typography';
import { em, rem } from '../../../helpers/units';
import { Grid } from '../../layouts/grids';


export const Card = styled(animated.div)`
    position: absolute;
    max-width: ${rem(370)};
    width: 100%;
    max-height: ${rem(400)};
    height: 100%;
    border-radius: ${rem(32)};
    background: linear-gradient(to bottom, var(--darkBlue2) 0%, var(--darkBlue3) 100%);
    color: var(--white);
    backface-visibility: hidden;
    z-index: -1;
`;

export const Header = styled(Element.Header)`

`;

export const Body = styled(Element.Body)``;

export const Layout = styled(Grid)`
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
`;

export const Illustration = styled(animated.div)``;

export const Selected = styled(P)`
    width: max-content;
    margin-inline: auto;
    padding: ${em(8)} ${rem(16)};
    font-size: ${rem(16)};
    background-color: var(--darkBlue);
    border-radius: ${em(50)};
    color: var(--orange);
`;

export const Title = styled(Element.Title)`
    text-align: center;
`;

export const Message = styled(Element.Description)`
    text-align: center;
`;