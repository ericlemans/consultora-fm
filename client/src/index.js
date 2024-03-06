import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, useHistory} from "react-router-dom";
import HomeV2 from './components/home-v2';
import About from './components/about';
import Error from './components/404';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import Contact from './components/contact';
import Privacy from "./components/privacy";
import Navbar from "./components/global-components/navbar-v2";

import {Toaster} from "react-hot-toast";

import "./assets/css/custom-css.scss";
import {Helmet} from "react-helmet";

const Root = () => {

    return (
        <HashRouter basename="/">
            <div>
                <Helmet>
                    {/*Google tag (gtag.js)*/}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC1DJYWT38"></script>
                    <script>
                        {`window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-GC1DJYWT38');`}
                    </script>

                    <meta charset="UTF-8"/>

                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="title" content="FM Consultora | Alquiler y venta de propiedades en Capital Federal"/>
                    <meta name="description" content="Descubrí tu próximo hogar en los barrios más exclusivos de Buenos Aires, Capital Federal, CABA. Venta, alquiler y tasación de propiedades en Palermo Hollywood, Palermo Chico, Palermo Soho, Belgrano, Colegiales, Villa Crespo y Recoleta. ¡Encontrá tu rincón porteño con nosotros! Explorá nuestro catálogo y recibí un servicio profesional, con experiencia y confianza. ¡Queremos acompañarte para que encuentres tu hogar soñado!"/>

                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

                    <title>FM Consultora Inmobiliaria | Propiedades en Venta y Alquiler</title>

                    <link rel="canonical" href="https://consultora-fm.com.ar"/>

                    {/*Palabras clave específicas para SEO*/}
                    <meta name="keywords"
                          content="departamentos en CABA, departamentos en Capital Federal, venta de departamentos, alquiler de departamentos, alquiler de departamentos en Capital, alquiler de apartamentos, venta de deptos, compra de departamentos, alquiler de departamentos en Capital Federal, Buenos Aires Palermo, alquiler de departamentos Buenos Aires, compra y venta de departamentos, departamentos en Buenos Aires Capital, compra de deptos, deptos en CABA, barrio Palermo Buenos Aires, depto en Capital Federal, departamentos en Bs As Capital, alquiler de departamentos Buenos Aires Capital, alquiler de departamentos en Buenos Aires Capital Federal, alquiler de depto en Capital Federal, alquiler de deptos en Capital, apartamentos Capital Federal, apartamentos en Capital Federal, barrio de Palermo en Buenos Aires, Buenos Aires Barrio Palermo, CABA departamentos, Capital Federal departamentos"/>



                    {/*Metadatos para redes sociales (opcional, pero recomendado)*/}
                    <meta property="og:title"
                          content="FM Consultora Inmobiliaria | Propiedades en Venta y Alquiler"/>
                    <meta property="og:description"
                          content="Encontrá propiedades en venta y alquiler en Argentina. Expertos en bienes raíces con experiencia y confianza."/>
                    <meta property="og:image"
                          content="https://admin.consultora-fm.com.ar/assets/e7904a16-20bf-40b8-bb75-ab52ef09a1f7?height=80"/>
                    <meta property="og:url" content="https://consultora-fm.com.ar"/>

                    {/*Metadatos de Twitter (opcional)*/}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title"
                          content="Inmobiliaria en Argentina | Propiedades en Venta y Alquiler"/>
                    <meta name="twitter:description"
                          content="Encontraá propiedades en venta y alquiler en Buenos Aires. Expertos en bienes raíces con experiencia y confianza."/>
                    <meta name="twitter:image"
                          content="https://admin.consultora-fm.com.ar/assets/e7904a16-20bf-40b8-bb75-ab52ef09a1f7?height=80"/>


                    {/*Meta Pixel Code*/}
                    <script>
                        {`!function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '2146276052373213');
                        fbq('track', 'PageView');`}
                    </script>
                    <noscript>{`<img height="1" width="1" style="display:none"
                                   src="https://www.facebook.com/tr?id=2146276052373213&ev=PageView&noscript=1"
                    />`}</noscript>
                    {/*End Meta Pixel Code*/}

                    {/*COOCKIE SCRIPT*/}
                    <script type="text/javascript" charSet="UTF-8"
                            src="//cdn.cookie-script.com/s/b2f54557b645c4b57c0ee39f1513e967.js"></script>

                </Helmet>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomeV2}/>
                    <Route path="/product-details/:id" component={ProdductDetails}/>
                    <Route path="/shop-grid/" component={ShopGrid}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/politica-de-privacidad" component={Privacy}/>
                    <Route component={Error}/>

                </Switch>
            </div>
            <Toaster/>
        </HashRouter>
    )
}

export default Root;

ReactDOM.render(<Root/>, document.getElementById('quarter'));
