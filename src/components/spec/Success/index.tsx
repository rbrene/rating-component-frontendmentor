import React, { useContext } from 'react';
import * as Element from '../../../styles/components/spec/success';
import * as UtilityPadding from '../../../styles/utilities/padding';
import * as Layout from '../../../styles/layouts/flex';
import { ReactComponent as ThankYou } from '../../../assets/images/illustration-thank-you.svg';
import { SuccessCard } from '../../../data';
import { RatingContext } from '../../../context';
import { useSpring } from 'react-spring';


export const Success = () => {
    const { thanks, message } = SuccessCard;
    const { rate, success } = useContext(RatingContext)!;
    const rotate = useSpring({
        to: {
            rotateY: success.state ? 0 : 180
        }
    });

    return (
        <Element.Card style={rotate}>
            <UtilityPadding.Padding $padding={32}>
                <Element.Layout>
                    <Element.Header>
                        <Layout.FlexAlign
                            $direction='column'
                            $alignItems='center'
                            $justifyContent='center'
                            $gap={16}
                        >
                            <Element.Illustration children={<ThankYou />} />
                            <Element.Selected children={`You selected ${rate} out of 5`} />
                        </Layout.FlexAlign>
                    </Element.Header>
                    <Element.Body>
                        <Layout.FlexAlign
                            $direction='column'
                            $alignItems='center'
                            $justifyContent='center'
                            $gap={8}
                        >
                            <Element.Title children={thanks} />
                            <Element.Message children={message} />
                        </Layout.FlexAlign>
                    </Element.Body>
                </Element.Layout>
            </UtilityPadding.Padding>
        </Element.Card>
    )
};