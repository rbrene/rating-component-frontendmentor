import React, { useState } from 'react';
import { RatingContext } from '../../context';
import { RateType } from '../../types/state';
import { Rating } from '../spec/Rating';
import { Success } from '../spec/Success';



export const Rate = () => {
    const [rate, setRate] = useState<RateType>(0);
    const [success, setSuccess] = useState<boolean>(false);

    const context = {
        rate: rate,
        dispatch: setRate,
        success: {
            state: success,
            dispatch: setSuccess
        },
    };

    return (
        <RatingContext.Provider value={context}>
            <Rating />
            <Success />
        </RatingContext.Provider>
    )
}