import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Wrapper from "../../../components/div";
import AbsoluteWrapper from "./AbsoluteWrapper";
function SocialMedias(){
    return (
        <AbsoluteWrapper>
            <Wrapper gap = "3rem">
                <a href='https://www.instagram.com/jv.art.0/'><AiOutlineInstagram/></a>
                <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-souza-508a30231/'><AiFillLinkedin/></a>
                <a href='https://github.com/JoaoSouz4'><AiFillGithub/></a>
            </Wrapper>
        </AbsoluteWrapper>
    )
}

export default SocialMedias;