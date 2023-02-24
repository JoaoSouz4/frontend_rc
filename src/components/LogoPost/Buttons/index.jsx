import './styles.css'
import { MdDownload } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

export const Buttons = ()=> {
    return(
    <div className='post-options'>
        <div className='func' id='like-btn'><AiOutlineLike/></div>
        <div className='func' id = 'download-btn'><MdDownload/></div>
    </div>
    )
}