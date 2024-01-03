import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    padding: 24px 123px;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 64px;

    grid-area: header;

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: 700;
    }

    > div:nth-child(3) {
        display: flex;
        align-items: center;
        width: 300px;
    }

    > div span {
        display: flex;
        flex-direction: column;
        text-align: right;
        font-size: 14px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_200};
        cursor: pointer;

        strong {
          color: ${({theme}) => theme.COLORS.WHITE_200};
          font-weight: 700;
        }
    }

    > div img {
        width: 64px;
        height: 64px;
        border-radius: 35px;
        margin-left: 9px;
    }
`
