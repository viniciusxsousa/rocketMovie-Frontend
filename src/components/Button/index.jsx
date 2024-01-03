import { Container } from './styles'

export function Button({icon: Icon, title, isBlack, ...rest}){
    return(
        <Container isBlack={isBlack} {...rest}>
            {Icon && <Icon/>}
            <p>{title}</p>
        </Container>
    )
}