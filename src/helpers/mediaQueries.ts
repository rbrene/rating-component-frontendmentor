import { em, ViewportDimensions } from "./units";


export const media = {
    desktop: {
        min: `(min-width: ${em(ViewportDimensions.desktop)})`,
        max: `(max-width: ${em(ViewportDimensions.desktop)})`
    },
    tablet: {
        min: `(min-width: ${em(ViewportDimensions.tablet)})`,
        max: `(max-width: ${em(ViewportDimensions.tablet)})`
    },
    mobile: {
        min: `(min-width: ${em(ViewportDimensions.mobile)})`,
        max: `(max-width: ${em(ViewportDimensions.mobile)})`
    }
}