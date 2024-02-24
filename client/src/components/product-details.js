import React, {useEffect, useState} from 'react';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import axios from "axios";
import {useParams} from "react-router-dom";

const Product_Details = () => {

    const [propertyDetails, setPropertyDetails] = useState({});

    const params = useParams();

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
            <ProductSlider images={propertyDetails.images}/>
            <ProductDetails details={propertyDetails} />
            <CallToActionV1/>
            <Footer/>
        </div>
    }
    return <></>;
}

export default Product_Details

