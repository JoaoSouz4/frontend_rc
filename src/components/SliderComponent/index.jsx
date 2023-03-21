import './styles.css';

export const SliderComponent = (props) => {
   return(
    <div className="slider-with-draws">
        <div>{props.children}</div>
    </div>
)}