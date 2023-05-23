import { useState, useRef, useEffect } from "react";
import { Spinner } from "reactstrap";
import Wrapper from "../div";
import { Image } from "./syles";

function ImageDraw (props){

    const [ isComplete, setIsComplete ] = useState(false);
    const imgRef = useRef();

    useEffect(()=> {
        imgRef.current.style.animationName = 'animation'
    }, [isComplete])

    return(
        <Wrapper width = '100%' height = '100%' jc = 'center' alignItems = 'center' position = 'relative'>
            <Image
                className = 'imgPost'
                ref = {imgRef}
                src= {props.url} 
                alt = {props.alt}
                loading = 'lazy'
                onLoad = {() => {
                    setIsComplete(true);
                }}
            />

            {!isComplete &&
                <Wrapper width = '100%' height = '100%' jc = 'center' alignItems = 'center' >
                    <Wrapper width = '100%' position = 'absolute' top = '50%' left = '50%'>
                        <Spinner color = 'secundary' type = 'grow'></Spinner> 
                    </Wrapper>
                </Wrapper>
            }
        </Wrapper>
    )
    
}

export default ImageDraw;