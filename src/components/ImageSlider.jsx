import { useEffect, useRef, useState } from 'react'
import slide1 from '../assets/images/slider_1.jpg'
import slide2 from '../assets/images/slider_2.jpg'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import '../styles/ImageSlider.css'
import MobileStepper from '@mui/material/MobileStepper';

function ImageSlider({productImage}) {
    const images = [productImage, slide1, slide2]
    const [position, setPosition] = useState(0)
    const containerRef = useRef(null);

    useEffect(()=>{
        const container = containerRef.current
        container.style.width = images.length * 100 + '%'
        container.style.left = position * (-100) + '%'
    }, [position])


    function slideRight() {
        if (position === images.length - 1) {
            setPosition(0)
        } else
        setPosition(position => position + 1)
    }

    function slideLeft() {
        if (position === 0) {
            setPosition(images.length - 1)
        } else {
            setPosition(position => position - 1)
        }
    }

    return (  
        <div className="slider_wrapper">
            <div className="slide-container" ref={containerRef}>
                {images.map((image, index) => {
                    return (
                        <div key={index} className="slide">
                            <img src={image} alt="product slide" className='slider-img' />
                        </div>
                    )
                })}
            </div>
            <div className="controls">
                <MobileStepper
                    variant="dots"
                    steps={images.length}
                    position="static"
                    activeStep={position}
                    sx={{ 
                        flexGrow: 1,
                        '& .MuiMobileStepper-dotActive': {
                            backgroundColor: 'black'
                        }
                    
                    }}
                    nextButton={
                        <button 
                        className='arrow' 
                        onClick={slideRight}>
                            <ArrowForwardIosOutlinedIcon fontSize='small'/>
                        </button>   
                    }
                    backButton={
                        <button 
                        className='arrow' 
                        onClick={slideLeft}>
                            <ArrowBackIosOutlinedIcon fontSize='small'/>
                        </button>
                    }
                />

            </div>
        </div>
        
    );
}

export default ImageSlider;

