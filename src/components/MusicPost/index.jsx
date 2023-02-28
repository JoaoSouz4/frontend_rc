import { useRef } from 'react';
import { BiPlay, BiPause } from 'react-icons/bi';
import { BsVolumeUpFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './styles.css';

export const MusicPost = (props) => {
    const { title, description, style, tone, url } = props;
    const playerAudio = useRef();
    const rangeVol = useRef();
    const rangeTime = useRef();
    const musicDesc = useRef();
    
    const handlePlay = async () => {
        await playerAudio.current.play();  
    }

    const handlePause = async () => {
        await playerAudio.current.pause();
    }

    const setVolume = (res) => {
        playerAudio.current.volume = res / 100;
    }

    const showDescription = () =>{
        if(musicDesc.current.style.display == "none") {
            musicDesc.current.style.display = "block";
            return
        }  else musicDesc.current.style.display = "none";
    }


    return (
        <>
        <div className='music-post'>

            <div className="music-container">
                <MdOutlineKeyboardArrowDown className = "arrow"
                    onClick={showDescription}
                />
                <div className="name">
                    <h4>{title}</h4>
                    <h5>Style: {style}</h5>
                </div>
                <audio ref = {playerAudio}src= {`http://localhost:8080/files${url}`}></audio>
                <div className="controls">
                    <BiPlay className = "control" onClick={handlePlay}/>
                    <BiPause className = "control" onClick={handlePause}/>
                </div>
                <div className="time-music">
                    <span>00:00</span>
                </div>
                <input ref = {rangeTime} type="range" min = "0" max= "100" step = "1"/>
                <BsVolumeUpFill className='control-volume'/>
                <input ref = { rangeVol } type="range" min = "0" max= "100" step = "1" id='volume'
                onChange = {(e) => setVolume(rangeVol.current.value)}/>

                   
                <div className='container-description' ref={musicDesc}>
                    <div className='desc'>
                        <h4>Descrição da Música:</h4>
                        <p>{description}</p>
                    </div>
                    <button className = "btn-download">Baixar Música</button>
                </div>
            </div>
        </div>
        </>
    )
}