import { Container } from './styles'

export function Tag({title, brown}) {
    return(
        <Container brown={brown}>{title}</Container>
    )
}