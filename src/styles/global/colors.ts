import { createGlobalStyle } from 'styled-components';


const Colors = createGlobalStyle`
:root {
    --orange: hsl(25, 97%, 53%);
    --white: hsl(0, 0%, 100%);
    --lightGrey: hsl(217, 12%, 63%);
    --mediumGrey: hsl(216, 12%, 54%);
    --darkBlue: hsl(213, 19%, 18%);
    --darkBlue2: hsl(215, 21%, 16%);
    --darkBlue3: hsl(215, 25%, 14%);
    --veryDarkBlue: hsl(216, 12%, 8%);
}
`;

export default Colors;
