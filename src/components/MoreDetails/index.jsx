import './styles.css';
import { AiOutlineClose } from 'react-icons/ai'

export const MoreDetails = (props) => {
    const { funcCallback, dataToMd } = props;

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
                    <img src = {`http://localhost:3000/files${dataToMd.img[0]}`} className="draw-photo"/>
    
                    <div className="draw-informations">
    
                        <div className="draw-datas">
                            <h2 className="draw-title">{dataToMd.title}</h2>
                            <p>Feito em: {dataToMd.data}</p>
                            <p>Fonte: {dataToMd.font}</p>
                        </div>
    
                        <div className="draw-description">
                            <h2>Descrição</h2>
                            <p>{dataToMd.description}</p>
                        </div>
                    </div>
                </div>
                
            </div>) 
    }