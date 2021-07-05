import { createGlobalStyle } from 'styled-components';
import loginDragon from '../assets/loginDragon.jpg';

export default createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --white: #fff;
    --background: #F7F7F7;
    --border: #DFE0E4;
    --gray: #79869E;
    --gray-light: #BFC6D2;
    --border: #C1C6CA;
    --border-dark: #B5C0CE;
    --text: #000000;
    --title: #2e384d;
    --red: #E72582;
    --red-light: #FBC5C5;
    --red-danger: #ff5555;
    --orange: #EF7D00;
    --yellow: #FBBA00;
    --yellow-light: #FFEBB1;
    --green: #50AF47;
    --green-light: #C0EFBB;
    --pink: #F93B94;
    --purple: #5F62FF;
    --purple-dark: #5A328A;
    --blue: #004F9F;
    --blue-light: #ABDEEF;
    --blue-dark: #102A63;
    --blue-twitter: #00B1EB;

    --main-color: #f5f6fa;
    --sicredi-darkest-green: #323c32;

    --sicredi-text-green: #64c832;
    --sicredi-text-gray: #757575;
    
    --sicredi-white-background: #fbfbfb;
    --sicredi-gray-background: #5a645b;
    --sicredi-green-background: #69be41;
	
    --highlighted-content: #e1b12c;

	--background-highlighted: #2f3640;
	--background-highlighted-transparent: rgba(47, 54, 64, 0.9);
	--highlight-warn: #c23616;
	
}

@media (max-width: 991px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 767px) {
    html {
        font-size: 87.5%;
    }
}

body {
	overflow:hidden;
	width:100%;
	height:100%;
    background-image: url(${loginDragon});
	background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    //background: var(--sicredi-white-background);
    color: var(--white) !important;
}

body,
input,
textarea,
button {
    font: 400 .9375rem "Montserrat", sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

hr {
    border-color: var(--border);
}

*:focus {
    outline-color: var(--blue-dark);
}
html {
	overflow:hidden;
	width:100%;
	height:100%;
}
`;
