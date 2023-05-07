import { useState, useEffect } from "react";
import Wrapper from "../../../components/div";
import { Spinner } from "reactstrap";

function ShowComments(props){

    const [ c, setC ] = useState();

    useEffect(() => {setC(props.comments)}, [props.comments]);
   
    return (
        <Wrapper>{
            c == undefined ? <Spinner color = 'secundary' type = 'grow' style = {{height: '0.5rem', width: '0.5rem'}}/> : <span>{c}</span>
        }</Wrapper>
    )

}
export default ShowComments