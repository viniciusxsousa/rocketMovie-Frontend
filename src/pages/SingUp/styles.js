import styled from 'styled-components'

import img from '../../assets/background.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 123px;
    display: flex;
    flex-direction: column;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
        font-weight: 700;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
        margin-bottom: 48px;
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        font-weight: 500;
        margin-bottom: 48px;
    }

    > button {
        margin-top: 16px;
        margin-bottom: 42px;
    }

    > a {
        margin: auto;
    }
`

export const BackgroundImg = styled.div`
    width: 800px;
    background-image: url(${img});
    opacity: 0.5;
`