import './styles.css'

export const DrawPost = (props) =>{
    const { title, description, data, font, categories, img, funcCallback } = props;
    const handleOpen = ()=>{
        funcCallback("flex", props)
    }
    return(
        <>
        <div className='container-draw'>
            {!props.img && alert('askdjn')}
            <img src = {"https://api-draw-rc.onrender.com/files"+img} alt={title} onClick = {handleOpen}/>
            <div className='post-description'>
                <label className='title'>{title}</label>
                <label className='font'>{font}</label>
                <label className='data'>{data}</label>
            </div>
        </div>
        </>
    )
}
