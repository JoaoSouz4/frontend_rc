import { useState, useRef, useEffect } from "react";
import { Spinner } from "reactstrap";
import Wrapper from "../../../components/div";
import { Image } from "./styles";

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
                <Wrapper width = '100%' height = '100%' jc = 'center' alignItems = 'center' position = 'absolute'>
                    <Wrapper width = '100%' jc = 'center' alignItems = 'center'>
                        <Spinner color = 'secundary' type = 'grow'></Spinner> 
                    </Wrapper>
                </Wrapper>
            }
        </Wrapper>
    )
    
}

export default ImageDraw;