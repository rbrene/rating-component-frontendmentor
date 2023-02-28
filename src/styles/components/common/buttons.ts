import styled from 'styled-components';
import { rem } from '../../../helpers/units';
import { media } from '../../../helpers/mediaQueries';
import { animated } from 'react-spring';


export const Button = styled(animated.button)`
    position: relative;
    width: 100%;
    padding-block: ${rem(10)};
    font-size: ${rem(14)};
    font-family: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25ch;
    border-radius: ${rem(50)};
    border: 1px solid var(--orange);
    background-color: var(--orange);
    color: var(--white);
    z-index: inherit;
    cursor: default;

    @media ${media.tablet.min} {
        cursor: pointer;
    }
`;