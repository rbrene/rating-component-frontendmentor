import { createGlobalStyle } from 'styled-components';
import { rem } from '../../helpers/units';


const StyleSheet = createGlobalStyle`
html {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 100%;
    box-sizing: border-box;
    z-index: 0;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

* {
    @supports (scroll-behaviour: smooth) {
        scroll-behavior: smooth;
    }
    &::-webkit-scrollbar {
        width: ${rem(8)};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        display: block;
        border-radius: ${rem(50)};
    }
}

body {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
}

body {
    font-size: ${rem(16)};
    font-family: 'Overpass', 'Arial', sans-serif;
    font-weight: 400;
    background-color: var(--veryDarkBlue);
    color: inherit;
    user-select: none;
}

#root {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}
`;

export default StyleSheet;