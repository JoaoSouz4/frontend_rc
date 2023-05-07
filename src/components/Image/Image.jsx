import { useState, useRef, useEffect } from "react";
import { Spinner } from "reactstrap";
import './styles.css';
import Wrapper from "../div";

function Image (props){

    const [ isComplete, setIsComplete ] = useState(false);

    const imgRef = useRef();
    const wrapperRef = useRef();

    useEffect(()=> {
        imgRef.current.style.animationName = 'animation'
    }, [isComplete])

    return(
        <Wrapper width = '100%' height = '100%' jc = 'center' alignItems = 'center' position = 'relative'>
            <img
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

export default Image;