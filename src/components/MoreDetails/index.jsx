import './styles.css';
import { AiOutlineClose } from 'react-icons/ai'

export const MoreDetails = (props) => {
    const { funcCallback, dataDraw } = props;

    const handleCloser = () => {
        funcCallback("none");
    }

    
    return (
        <div className='container-more-details'>

            <div className='container-button-closer'  onClick={handleCloser}>
            <AiOutlineClose className='icon-closer'
            />
            </div>

            <div className='sub-container'>
                <div className="draw-photo">

                </div>

                <div className="draw-informations">

                    <div className="draw-datas">
                        <h2 className="draw-title">Titulo do Desenho</h2>
                        <p>Feito em: </p>
                        <p>Fonte: </p>
                    </div>

                    <div className="draw-description">
                        <h2>Descrição</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id quidem, molestiae sed quisquam maxime vero, ut necessitatibus eaque aut doloremque soluta omnis deleniti unde ducimus ratione earum eveniet vitae?
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}