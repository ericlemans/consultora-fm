import React, {useEffect, useState} from 'react';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

const Product_Details = () => {

    const [propertyDetails, setPropertyDetails] = useState({});

    const params = useParams();


    const metatTitle = `FM Consultora | ${propertyDetails?.title}`;
    const metaDescription = propertyDetails?.description?.replace(/<[^>]*>?/gm, '');
    const metaImage = propertyDetails?.images?.length > 0 && `${process.env.REACT_APP_SERVER_URL}/assets/${propertyDetails.images[0].directus_files_id.id}?height=400&format=webp&quality=75`
    const metaURL = window.location.href;


    // GET PROPERTY DETAILS
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/items/propiedad/${params.id}?fields=*.*,fk_amenities.amenities_id.name,floorplans.directus_files_id.*.*,images.directus_files_id.*`, {
            headers: {Authorization: `Bearer ${process.env.REACT_APP_SERVER_ADMIN_TOKEN}`}
        })
            .then(response => {
                setPropertyDetails(response.data.data)
            })
            .catch(error => {
                console.log(error.response)
            })
    }, []);

    if (propertyDetails.id) {
        return <div id="property-details">
            <Helmet>
                <meta name="title" content={metatTitle}/>
                <meta name="description" content={metaDescription}/>

                {/*Metadatos para redes sociales (opcional, pero recomendado)*/}
                <meta property="og:title"
                      content={metatTitle}/>
                <meta property="og:description"
                      content={metaDescription}/>
                <meta property="og:image"
                      content={metaImage}/>
                <meta property="og:url" content={metaURL}/>

                {/*Metadatos de Twitter (opcional)*/}
                <meta name="twitter:card"
                      content={metaImage}/>
                <meta name="twitter:title"
                      content={metatTitle}/>
                <meta name="twitter:description"
                      content={metaDescription}/>
                <meta name="twitter:image"
                      content={metaImage}/>


            </Helmet>


            <ProductSlider images={propertyDetails.images}/>
            <ProductDetails details={propertyDetails} />
            <CallToActionV1/>
            <Footer/>
        </div>
    }
    return <></>;
}

export default Product_Details

