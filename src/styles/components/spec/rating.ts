import styled from 'styled-components';
import { animated } from 'react-spring';
import { rem } from '../../../helpers/units';
import { Grid } from '../../layouts/grids';
import { media } from '../../../helpers/mediaQueries';


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
    z-index: inherit;

    @media ${media.mobile.min} {
        max-width: ${rem(400)};
    }
`;

export const Header = styled(animated.header)`
    position: relative;
    width: 100%;
    z-index: inherit;
`;

export const Body = styled(animated.article)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Footer = styled(animated.footer)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export const Layout = styled(Grid)`
    grid-template-columns: 100%;
    grid-template-rows: 30% 1fr 20%;
    gap: ${rem(8)};
`;

export const BodyLayout = styled(Grid)`
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
`;

export const Icon = styled(animated.span)`
    position: relative;
    background-color: var(--darkBlue);
    border-radius: 50%;
    z-index: inherit;
`;

export const Title = styled(animated.h4)`
    position: relative;
    font-size: ${rem(26)};
    font-weight: 700;
    z-index: inherit;
`;

export const Description = styled(animated.p)`
    position: relative;
    font-size: ${rem(15)};
    font-family: inherit;
    font-weight: 400;
    line-height: 1.4;
    color: var(--lightGrey);
    z-index: inherit;
`;

export const Number = styled(animated.button)`
    position: relative;
    aspect-ratio: 1/1;
    padding: ${rem(20)};
    outline: none;
    border: none;
    border-radius: 50%;
    background-color: var(--darkBlue);
    color: var(--mediumGrey);
    z-index: inherit;
    cursor: default;

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;