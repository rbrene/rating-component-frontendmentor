import React from 'react';
import { useHover } from '../../hooks/useHover';
import { Button } from '../../styles/components/common/buttons';
import { useSpring } from 'react-spring';
import { SubmitProps } from '../../types/components/button';


export const Submit: React.FC<SubmitProps> = ({ onClick }) => {
    const { hover, mouseEnter, mouseLeave } = useHover();
    const spring = useSpring({
        to: {
            borderColor: hover ? 'hsl(0, 0%, 100%)' : 'hsl(25, 97%, 53%)',
            backgroundColor: hover ? 'hsl(0, 0%, 100%)' : 'hsl(25, 97%, 53%)',
            color: hover ? 'hsl(25, 97%, 53%)' : 'hsl(0, 0%, 100%)'
        }
    })

    return (
        <Button
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={onClick}
            style={spring}
        >
            Submit
        </Button>
    );
}