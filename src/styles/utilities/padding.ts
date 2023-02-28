import styled from 'styled-components';
import { Container } from '../layouts/containers';
import { rem } from '../../helpers/units';


interface PaddingProp {
    $padding?: number;
};

interface InlinePadding {
    $inline?: number;
};

interface BlockPadding {
    $block?: number;
};

interface CustomPadding {
    $block?: number;
    $inline?: number;
};

export const Padding = styled(Container) <PaddingProp>`
    padding: ${({ $padding }) => $padding ? `${rem($padding)}` : `${rem(16)}`};
`;

export const PaddingInline = styled(Container) <InlinePadding>`
    padding-inline: ${({ $inline }) => $inline ? `${rem($inline)}` : `${rem(16)}`};
`;

export const PaddingBlock = styled(Container) <BlockPadding>`
    padding-block: ${({ $block }) => $block ? `${rem($block)}` : `${rem(16)}`};
`;

export const PaddingCustom = styled(Container) <CustomPadding>`
    padding-block: ${({ $block }) => $block ? `${rem($block)}` : `${rem(16)}`};
    padding-inline: ${({ $inline }) => $inline ? `${rem($inline)}` : `${rem(16)}`};
`;