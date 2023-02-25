import './styles.css'
import { Buttons } from './Buttons';

export const DrawPost = (props) =>{
    const { title, description, data, font, categories, img, funcCallback } = props;
    const handleOpen = ()=>{
        funcCallback("block", props)
    }
    return(
        <>
        <div className='container-draw'>
            <img src = {"http://localhost:3000/files"+img[0]} alt={title} onClick = {handleOpen}/>
            <div className='post-description'>
                <label className='title'>{title}</label>
                <label className='font'>{font}</label>
                <label className='data'>{data}</label>
            </div>
           <Buttons/>
        </div>
        </>
    )
}
