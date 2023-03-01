import './styles.css'


export const LogoPost = (props) =>{
    const { title, description, data, font, categories, img, funcCallback,  } = props;
    const handleOpen = ()=>{
        funcCallback("flex", props)
    }
    return(
        <>
        <div className='container-draw'>
            <img src = {"https://api-draw-rc.onrender.com/files"+img[0]} alt={title} onClick={handleOpen}/>
            <div className='post-description'>
                <label className='title'>{title}</label>
                <label className='font'>{font}</label>
                <label className='data'>{data}</label>
            </div>
        </div>
        </>
    )
}
