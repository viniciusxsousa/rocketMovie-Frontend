import { Container } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

export function ButtonTxt({icon, title, ...rest}){
    return(
        <Container {...rest}>
            {icon && <FiArrowLeft/>}
            {title}
        </Container>
    )
}