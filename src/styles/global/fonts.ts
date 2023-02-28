import { createGlobalStyle } from 'styled-components';
import overpassRegular from '../../assets/fonts/Overpass-Regular.ttf';
import overpassBold from '../../assets/fonts/Overpass-Bold.ttf';


const Fonts = createGlobalStyle`
/*
=====================
    Overpass Font
=====================
*/
@font-face {
    src: local('Overpass-Regular'), url(${overpassRegular}) format('truetype');
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
}

@font-face {
    src: local('Overpass-Bold'), url(${overpassBold}) format('truetype');
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
}
`;

export default Fonts;