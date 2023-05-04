import { useState, useEffect } from "react";

function ShowComments(props){

    const [ c, setC ] = useState();

    useEffect(() => {
        setC(props.comments)
    }, [props.comments])
    
    return (
        <span>{c}</span>
    )
}
export default ShowComments