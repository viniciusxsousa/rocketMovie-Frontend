import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 40px 123px;
    }
`

export const Content = styled.div`
    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        font-size: 36px;
        font-weight: 500;
        margin-top: 24px;
        margin-bottom: 40px;
    }

    > div.inputs {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > h3 {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 24px;
    }

    > div.marcadores {
        display: flex;
        gap: 24px;

        background-color: ${({theme}) => theme.COLORS.BLACK_200};

        border-radius: 8px;

        padding: 16px;

        margin-bottom: 40px;
    }

    > div.buttons {
        display: flex;
        gap: 40px
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    height: 230px;
    padding: 19px 16px;
    margin-bottom: 40px;
    resize: none;

    border: none;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
`