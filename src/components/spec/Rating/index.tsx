import React from 'react';
import * as Element from '../../../styles/components/spec/rating';
import * as UtilityPadding from '../../../styles/utilities/padding';
import * as Layout from '../../../styles/layouts/flex';
import { ReactComponent as Star } from '../../../assets/images/icon-star.svg';
import { Card, rates } from '../../../data';
import { RateComponent } from './Rate';
import { RatingContext } from '../../../context';
import { Submit } from '../../common/Submit';
import { useSpring } from 'react-spring';


export const Rating = () => {
    const { rate, success } = React.useContext(RatingContext)!;

    const submitRating = () => {
        const { dispatch } = success;
        if (rate !== 0) {
            dispatch(true);
        } else if (rate === 0) {
            dispatch(false);
        }
    };

    const rotate = useSpring({
        to: {
            x: success.state ? 16 : 0,
            rotateY: success.state ? 180 : 0
        }
    });


    return (
        <Element.Card style={rotate}>
            <UtilityPadding.Padding $padding={32}>
                <Element.Layout>
                    <Element.Header>
                        <Layout.FlexAlign
                            $direction='column'
                            $alignItems='start'
                            $justifyContent='space-between'
                        >
                            <Element.Icon>
                                <UtilityPadding.Padding $padding={16}>
                                    <Star />
                                </UtilityPadding.Padding>
                            </Element.Icon>
                            <Element.Title>{Card.heading}</Element.Title>
                        </Layout.FlexAlign>
                    </Element.Header>
                    <Element.Body>
                        <Element.BodyLayout>
                            <Element.Description>
                                {Card.description}
                            </Element.Description>
                            <Layout.FlexAlign
                                $alignItems='center'
                                $justifyContent='space-between'
                            >
                                {rates.map(number => <RateComponent number={number} key={number} />)}
                            </Layout.FlexAlign>
                        </Element.BodyLayout>
                    </Element.Body>
                    <Element.Footer>
                        <Layout.FlexAlign $alignItems='center'>
                            <Submit onClick={submitRating} />
                        </Layout.FlexAlign>
                    </Element.Footer>
                </Element.Layout>
            </UtilityPadding.Padding>
        </Element.Card>
    )
}