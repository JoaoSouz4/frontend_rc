import { useEffect, useRef, useState } from 'react';
import { BiPlay, BiPause } from 'react-icons/bi';
import { BsVolumeUpFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './styles.css';

function usePlayerState(playerAudio){
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
        handleChangeAudio
       });

       useEffect(()=>{
        playerState.playing ? playerAudio.current.play() : playerAudio.current.pause();
       },[playerState.playing]);
    
        const handlePlay = async () => {
            console.log(playerAudio)
            setPlayerState({
               ...playerState,
               playing: !playerState.playing
            })
        }

        const handleTimeUpdate = ()=>{
            const currentPercentage = (playerAudio.current.currentTime / playerAudio.current.duration)*100;
            setPlayerState({
                ...playerState,
                percentage: currentPercentage
             })
        }

        function handleChangeAudio (event){
            const e = event.target.value;
            playerAudio.current.currentTime = playerAudio.current.duration / 100 * e
            setPlayerState({
                ...playerState,
                percentage: e 
             })
        }
        return {
            playerState,
            handlePlay,
            handleTimeUpdate,
            handleChangeAudio
        }
   }

export const MusicPost = (props) => {

   const { title, description, style, tone, url } = props;
   const playerAudio = useRef(null);

   const { 
     playerState,
     handlePlay,
     handleTimeUpdate,
     handleChangeAudio,
    } = usePlayerState(playerAudio);

   const rangeVol = useRef();
   const musicDesc = useRef("none");

    const setVolume = (res) => {
        playerAudio.current.volume = res / 100;
    }

    const setTimeRange = async (res) => {
        playerAudio.current.currentTime = res;
    }

    const showDescription = () =>{
        if(musicDesc.current.style.display == "none") {
            musicDesc.current.style.display = "block";
            return;
        }  else  {
            musicDesc.current.style.display = "none";
            return;
        }
    }


    return (
        <>
        <div className='music-post'>

            <div className="music-container">

                <MdOutlineKeyboardArrowDown 
                    className = "arrow"
                    onClick={showDescription}
                />

                <div className="name">
                    <h4>{title}</h4>
                    <h5>Style: {style}</h5>
                </div>

                <audio 
                    ref = {playerAudio}
                    src= {`https://api-music-rc.onrender.com/files${url}`}
                    onTimeUpdate = {handleTimeUpdate}
                ></audio>

                <div className="controls">
                    {playerState.playing ? <BiPause className = "control" onClick={handlePlay}/> : <BiPlay className = "control" onClick={handlePlay}/>}
                </div>

                <input  
                    type="range" 
                    min = "0" 
                    max= "100"
                    value = {playerState.percentage}
                    onChange = {handleChangeAudio}
                    step = "1"
                />

                <BsVolumeUpFill className='control-volume'>
                </BsVolumeUpFill>

                <input 
                    ref = { rangeVol }
                    type="range" 
                    min = "0" 
                    max= "100" 
                    step = "1" 
                    id='volume'
                    onChange = {(e) => setVolume(rangeVol.current.value)}
                />

                   
                <div className='container-description' ref={musicDesc}>

                    <div className='desc'>
                        <h4>Descrição da Música:</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}