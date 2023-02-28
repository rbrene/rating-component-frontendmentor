import React from 'react';
import * as Element from '../../../styles/components/spec/rating';
import * as Layout from '../../../styles/layouts/flex';
import { useSpring } from 'react-spring';
import { useHover } from '../../../hooks/useHover';
import { RatingContext } from '../../../context';
import { RateProps as Props } from '../../../types/components/rate';



export const RateComponent: React.FC<Props> = ({ number }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();
    const { rate, dispatch } = React.useContext(RatingContext)!;
    const spring = useSpring({
        to: {
            backgroundColor: hover && rate !== number ? 'hsl(25, 97%, 53%)' : rate === number ? 'hsl(216, 12%, 54%)' : 'hsl(213, 19%, 18%)',
            color: hover ? 'hsl(0, 0%, 100%)' : rate === number ? 'hsl(0, 0%, 100%)' : 'hsl(216, 12%, 54%)'
        }
    });

    const click = () => {
        dispatch(number);
    };

    return (
        <Element.Number
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={click}
            style={spring}
        >
            <Layout.FlexCenter>
                {number}
            </Layout.FlexCenter>
        </Element.Number>
    )
}