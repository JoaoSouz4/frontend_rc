import { useState, useEffect } from "react";
import Wrapper from "../../../components/div";
import { Spinner } from "reactstrap";
function ShowLikes(props){

    const [ likes, setLike ] = useState();

    useEffect(() => {setLike(props.likes)}, [props.likes])
    
    return (
        <Wrapper>{
            likes == undefined ? <Spinner color = 'secundary' type = 'grow' style = {{height: '0.5rem', width: '0.5rem'}}/> : <span>{likes}</span>
        }</Wrapper>
    )
}
export default ShowLikes