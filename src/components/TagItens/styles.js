import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_100};
    
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : 'none'};
    border-radius: 10px;

    > input {
        max-width: 150px;
        padding: 8px;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE_300};
    }

    > button {
        border: none;
        background-color: transparent;
    }

    > button svg {
        width: 22px;
        height: 22px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

`