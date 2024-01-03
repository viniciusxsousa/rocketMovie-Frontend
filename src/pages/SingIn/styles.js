import styled from 'styled-components'

import img from '../../assets/background.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 123px 123px;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 48px;
        font-weight: 700;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-size: 14px;
        font-weight: 400;
        
        margin-bottom: 48px;
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        font-size: 24px;
        margin-bottom: 48px;
    }

    > button {
        margin-top: 24px;
        margin-bottom: 42px;
    }

    > a {
        display: inline-block;
        margin: auto;
    }
`

export const BackgroundImg = styled.div`
    width: 800px;
    background-image: url(${img});
    opacity: 0.5;
`