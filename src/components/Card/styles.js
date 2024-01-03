import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    display: block;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 16px;


    > h3 {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        font-size: 24px;
        margin-bottom: 2px;
    }

    > div svg {
        width: 12px;
        height: 12px;
        margin-right: 6px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 15px;
    }
`