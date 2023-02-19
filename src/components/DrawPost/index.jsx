import './styles.css'
import { MdDownload } from 'react-icons/md'
import { FcLike } from 'react-icons/fc'
import { Buttons } from './Buttons';

export const DrawPost = (props) =>{
    const { title, description, data, font, categories, img } = props;
    return(
        <div className='container-draw'>
            <img alt={title} />
            <div className='post-description'>
                <label className='title'>{title}</label>
                <label className='font'>{font}</label>
                <label className='data'>{data}</label>
            </div>
           <Buttons/>
        </div>
    )
}
