
import { FooterContainer, Label } from './styles'
export const Footer = () => {
    return(
        <FooterContainer>
            <div className="footer-content">
                    <div className='credits'>
                        <Label fontSize = '1.3rem'>Meu Repositório Criativo &copy; </Label>
                        <Label >v1.1.5</Label>
                    </div>
                    <Label fontSize = '1.1rem'>Desenvolvido por: <strong>João Souza</strong></Label>
            </div>
        </FooterContainer>
    )
}