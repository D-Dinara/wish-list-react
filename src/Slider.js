import { useState } from "react";

function Slider ({imagesArray}) {
    const [image,setImage] = useState(0);
    const showNextImage = () => {
        setImage(
            image => {
                if (image < imagesArray.length - 1) image++;
                else image = 0;
                return image;
            }
        )
    }
    const showPrevImage = () => {
        setImage(
            image => {
                if (image > 0) image--;
                else image = imagesArray.length - 1;
                return image;
            }
        )
    }
    return(
        <div className="slider">
            <button className="sliderBtn" onClick={showPrevImage}>{'<'}</button>
            <img src={imagesArray[image]} alt="gift" width="200px"/>
            <button className="sliderBtn" onClick={showNextImage}>{'>'}</button>
            
        </div>
    )
}

export default Slider;
