import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox, {useLightboxState} from "yet-another-react-lightbox";
import {Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";

const ProductSliderV1 = ({images}) => {

    const [windowSize, setWindowSize] = useState({
        width: 1200,
        height: 800
    });

    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(false);

    useEffect(() => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener("resize", () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        });
    }, []);


    const SlickArrowLeft = ({currentSlide, slideCount, ...props}) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow align-items-center d-flex" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <ChevronLeft/>
        </button>
    );
    const SlickArrowRight = ({currentSlide, slideCount, ...props}) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow align-items-center d-flex" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <ChevronRight/>
        </button>
    );

    const settings = {
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        dots: true,
        swipe: true,
        slidesToShow: 5,
        afterChange: (index) => {
            setIndex(index)
        },
        prevArrow: <SlickArrowLeft/>,
        nextArrow: <SlickArrowRight/>,
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                },
            },
        ],
    };
    const parseImages = () => {
        let parsedImgArray = [];
        images.forEach(item => {
            parsedImgArray.push(
                {
                    src: `${process.env.REACT_APP_SERVER_URL}/assets/${item.directus_files_id.id}?fit=cover&height=${windowSize.height}&format=webp&quality=75`,
                    alt: item.directus_files_id.description,
                    width: 1904,
                    height: 1006,
                }
            )
        })
        return (parsedImgArray)
    }

    return (
        <>
            <div className="ltn__img-slider-area mb-50">
                <div className="container-fluid">
                    <Slider {...settings}
                            className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all"
                    >
                        {images.map((image) => (
                            <div key={image.id}>
                                <div className="ltn__img-slide-item-4 mx-3 mb-3">
                                    <a onClick={() => setOpen(true)}>
                                        <img
                                            src={`${process.env.REACT_APP_SERVER_URL}/assets/${image.directus_files_id.id}?fit=cover&height=600&width=800&format=webp&quality=75`}
                                            alt={image.directus_files_id.description}/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={parseImages()}
                plugins={[Thumbnails, Zoom]}
                index={index}
                on={{view: ({index: currentIndex}) => setIndex(currentIndex)}}
            />
        </>

    )


}

export default ProductSliderV1