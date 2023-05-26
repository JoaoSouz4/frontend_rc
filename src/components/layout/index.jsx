import { Wrapper, Container } from './styles'

function Layout({children}){
    return (
        <Container>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

export default Layout;