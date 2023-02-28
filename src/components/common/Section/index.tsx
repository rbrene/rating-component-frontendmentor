import React, { forwardRef } from 'react';
import { ComponentProps, ComponentRef } from '../../../types/components/section';
import { Section as Element } from '../../../styles/components/common';


const Section = forwardRef<ComponentRef, ComponentProps>(({ id, children }, ref?) => {
    return (
        <Element id={id} ref={ref}>
            {children}
        </Element>
    )
});

export default Section;