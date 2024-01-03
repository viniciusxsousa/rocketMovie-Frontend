import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${({theme, brown}) => brown ? theme.COLORS.BACKGROUND_200 : theme.COLORS.BLACK_100};
    color: ${({theme}) => theme.COLORS.WHITE_100};

    padding: 5px 16px;
    border-radius: 8px;

    font-size: 12px;
    font-weight: 400;
    text-align: center;

    margin-right: 8px;
`