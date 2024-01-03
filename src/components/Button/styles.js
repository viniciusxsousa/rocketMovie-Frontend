import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    border-radius: 8px;
    padding: 32px;
    height: 48px;

    background-color: ${({theme, isBlack}) => isBlack ? theme.COLORS.BLACK_200 : theme.COLORS.PINK};
    color: ${({theme, isBlack}) => isBlack ? theme.COLORS.PINK : theme.COLORS.BLACK_100};

    font-size: 16px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`