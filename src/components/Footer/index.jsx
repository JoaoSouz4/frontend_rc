import './styles.css'
export const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                    <div className='credits'>
                        <label id='name'>Meu Repositório Criativo &copy; </label>
                        <label id='finesh'>v1.0.1</label>
                    </div>
                    <label id='author'>Desenvolvido por: <strong>João Souza</strong></label>
            </div>
        </footer>
    )
}