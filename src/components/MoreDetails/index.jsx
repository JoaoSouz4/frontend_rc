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
                <AiOutlineClose className='icon-closer'/>
            </div>
    
            <div className='container-whith-informations'>
                <div className="draw-photo-container">
                    <img src = {`http://localhost:3001/files${dataToMd.img}`} className="draw-photo-item"/>
                </div> 
               
    
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