import React from 'react';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-grid-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

const ShopGrid_V1 = () => {

    const {search} = useLocation();
    const queryParameters = new URLSearchParams(search)

    const publicacion = queryParameters.get("publicacion");

    return <>
        <Helmet>
            <title>
                {publicacion
                    ? `Propiedades en ${publicacion} | FM Consultora Inmuebles`
                    : "Propiedades | FM Consultora Inmuebles"
                }
            </title>
        </Helmet>
        <div>
            {publicacion
                ? <PageHeader headertitle={`Propiedades en ${publicacion}`}/>
                : <PageHeader headertitle={`Propiedades`}/>
            }
            <ShogGrid/>
            <CallToActionV1/>
            <Footer/>
        </div>
    </>
}

export default ShopGrid_V1

