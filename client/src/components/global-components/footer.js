import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import {FloatingWhatsApp} from "react-floating-whatsapp";
import axios from "axios";
import toast from "react-hot-toast";
import {Checkbox} from "@mui/material";
import {whatsappNumber} from "../../variables";

const Footer_v1 = () => {

    const [email, setEmail] = useState("");
    const [newsletterConfirmation, setNewsletterConfirmation] = useState(false);

    // useEffect(() => {
    //     const $ = window.$;
    //
    //     let publicUrl = process.env.PUBLIC_URL + '/'
    //     const minscript = document.createElement("script");
    //     minscript.async = true;
    //     minscript.src = publicUrl + "assets/js/main.js";
    //
    //     document.body.appendChild(minscript);
    //
    //     $('.go-top').find('a').on('click', function () {
    //
    //         $(".quarter-overlay").fadeIn(1);
    //
    //         $(window).scrollTop(0);
    //
    //         setTimeout(function () {
    //             $(".quarter-overlay").fadeOut(300);
    //         }, 800);
    //
    //     });
    //
    //
    //     $(document).on('click', '.theme-btn-1 ', function () {
    //         $('div').removeClass('modal-backdrop');
    //         $('div').removeClass('show');
    //         $('div').removeClass('fade');
    //         $('body').attr("style", "");
    //     });
    // }, []);

    const newsletterSubscribe = () => {

        const emailPattern = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")

        if (emailPattern.test(email)) {
            if (!newsletterConfirmation) {
                toast.error("Por favor confirmá tu suscripción en la caja de abajo.", {position: "bottom-right"})
            } else {
                axios.get(`${process.env.REACT_APP_SERVER_URL}/items/newsletter`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_SERVER_ADMIN_TOKEN}`
                    },
                    params: {
                        filter: {
                            email: {
                                "_eq": email
                            }
                        }
                    }
                })
                    .then(response => {
                        if (response.data.data.length > 0) {
                            toast.success("Tu email ya está suscripto en nuestra base de datos.")
                        } else {
                            axios.post(`${process.env.REACT_APP_SERVER_URL}/items/newsletter`, {
                                email,
                                subscribed: true
                            })
                                .then(response => {
                                    toast.success("Gracias por suscribirte a nuestro newsletter.");
                                    setNewsletterConfirmation(false);
                                    setEmail("")
                                })
                                .catch(() => toast.error("Hubo un problema para suscribirte a nuestro newsletter. Por favor comunicate con nosotros al Whatsapp o a nuestro Email."))
                        }
                    })
                    .catch(() => toast.error("Hubo un problema para suscribirte a nuestro newsletter. Por favor comunicate con nosotros al Whatsapp o a nuestro Email."))
            }
        } else {
            toast.error("Por favor introducí un email válido.")
        }

    }


    let publicUrl = process.env.REACT_APP_SERVER_URL;

    return (
        <footer className="ltn__footer-area  ">
            <div className="footer-top-area  section-bg-2 plr--5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-xs-4 col-12">
                            <div className="footer-widget footer-about-widget text-center text-sm-start">
                                <div className="footer-logo">
                                    <div className="site-logo">
                                        <img className="m-auto m-sm-0"
                                             src={`${publicUrl}/assets/59b1204b-871b-4a4f-80f1-d8955f924bf0`}
                                             alt="Logo"/>
                                    </div>
                                </div>
                                <p>Venta, alquiler y tasación de inmuebles.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-4 col-6">
                            <h4 className="footer-title">Contacto</h4>
                            <div className="footer-address">
                                <ul>
                                    <li>
                                        <div className="footer-address-icon">
                                            <i className="icon-placeholder"/>
                                        </div>
                                        <div className="footer-address-info">
                                            <p>Heredia 1450, CABA</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-address-icon">
                                            <i className="fa-whatsapp"/>
                                        </div>
                                        <div className="footer-address-info">
                                            <p><a href={`https://wa.me/${whatsappNumber}`}>+54 9 11 3105 5616</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-address-icon">
                                            <i className="icon-mail"/>
                                        </div>
                                        <div className="footer-address-info">
                                            <p><a href="mailto:info@consultora-fm.com.ar">info@consultora-fm.com.ar</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="ltn__social-media mt-20">
                                <Social/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-xs-4 col-6">
                            <div className="footer-widget footer-menu-widget clearfix">
                                <h4 className="footer-title">Links</h4>
                                <div className="footer-menu go-top">
                                    <ul>
                                        <li><Link to="/shop-grid">Propiedades</Link></li>
                                        <li><Link to="/about">Sobre nosotros</Link></li>
                                        <li><Link to="/contact">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-widget footer-newsletter-widget">
                                <h4 className="footer-title">Newsletter</h4>
                                <p>Suscribite a nuestro newsletter y recibí las últimas novedades por email.</p>
                                <div className="footer-newsletter">
                                    <form>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                               placeholder="Email*"/>
                                        <div className="btn-wrapper">
                                            <button onClick={newsletterSubscribe} className="theme-btn-1 btn"><i
                                                className="fas fa-location-arrow"/></button>
                                        </div>

                                    </form>

                                    <div className="d-flex align-content-center mt-3">
                                        <Checkbox
                                            sx={{padding: 0, marginRight: 1}}
                                            color="warning"
                                            checked={newsletterConfirmation}
                                            onClick={() => setNewsletterConfirmation(!newsletterConfirmation)}
                                        />
                                        <span>Confirmo que quiero suscribirme al newsletter y recibir información de FM Consultora.</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
            <FloatingWhatsApp
                phoneNumber={whatsappNumber}
                accountName="Mónica Fernández"
                avatar={`${process.env.REACT_APP_SERVER_URL}/assets/187c7a59-5348-4f32-85dd-43b34a5a79ea?height=60&width=60`}
                statusMessage="Disponible"
                chatMessage="¿Cómo te puedo ayudar?"
                placeholder="Escribí tu mensaje..."xw
                buttonStyle={{marginRight: 0, marginBottom: 5}}
            />
        </footer>
    )
}


export default Footer_v1