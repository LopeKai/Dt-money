import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.73%; // 16x0.9373 = 15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; // 16x0.875 = 14px
        }
        // REM = 1REM = font-size do root da nossa aplicaçao
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // vai deixar a fontes mais nítidas
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
   
    h1, h2 , h3 , h4 , h5 , h6 , strong {
        font-weight: 600;
    }
    
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-alloweb;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background-color: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`