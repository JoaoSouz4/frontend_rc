import { useState, useEffect } from "react";

function ShowLikes(props){

    const [ likes, setLike ] = useState();

    useEffect(() => {
        setLike(props.likes)
    }, [props.likes])
    
    return (
        <span>{likes}</span>
    )
}
export default ShowLikes