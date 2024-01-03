import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Header = styled.header`
    width: 100%;
    height: 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    display: flex;
    align-items: center;
    padding-left: 144px;
`

export const Form = styled.form`
    width: 350px;
    margin: -100px auto;

    div:nth-child(4) {
        margin-top: 24px;
    }

    div:nth-child(5) {
        margin-bottom: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;

    width: 186px;
    height: 186px;

    border-radius: 50%;

    margin: auto;
    margin-bottom: 64px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        position: absolute;
        bottom: 2px;
        right: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: ${({theme}) => theme.COLORS.PINK};

        padding: 14px;
        border-radius: 50px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BLACK_200};
        }
    }
`