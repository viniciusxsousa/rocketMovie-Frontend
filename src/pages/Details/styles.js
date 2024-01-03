import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 110px auto;
    grid-template-areas: 
    'header'
    'content';

    > main {
        grid-area: content;

        padding: 40px 123px;
        overflow-y: auto;
    }
`

export const Content = styled.div`
    > a {
        margin-bottom: 24px;
    }

    > div.title {
        display: flex;
        align-items: center;

        margin-bottom: 24px;

        h2 {
            color: ${({theme}) => theme.COLORS.WHITE_200};
            margin-right: 20px;
        }

        svg {
            color: ${({theme}) => theme.COLORS.PINK};
            margin-right: 10px;
        }
    }

    > div.time {
        display: flex;
        align-items: center;
        gap: 10px;

        margin-bottom: 40px;

        svg {
            color: ${({theme}) => theme.COLORS.PINK};
        }

        p {
            color: ${({theme}) => theme.COLORS.WHITE_200};
        }
    }

    > p {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        margin-top: 40px;
        text-align: justify;
        margin-bottom: 20px;
    }
`