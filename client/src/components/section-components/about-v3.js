import React, {Component} from 'react';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="ltn__about-us-area pt-115 pb-100 section-bg-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-img-wrap about-img-left">
                            <img src={`${process.env.REACT_APP_SERVER_URL}/assets/ce3710a3-bf12-4699-b43d-7ca0b3f99182?height=920&width=626`}
                                 alt="About Us Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-info-wrap">
                            <div className="section-title-area ltn__section-title-2--- mb-30">
                                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                                    Sobre nosotros
                                </h6>
                                <h1 className="section-title">
                                    Trayectoria, confianza y profesionalismo
                                </h1>
                                <p>
                                    Nuestro profesionalismo y seriedad han establecido un sólido vínculo de confianza con nuestros clientes.
                                    Apostamos cada día a nuevos desafíos elevando la bara en la calidad de nuestra atención, para que encontrar tu nuevo hogar sea una experiencia comfortable.
                                </p>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-house-4"/></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>TRAYECTORIA</h4>
                                    <p>
                                        Con 15 años de experiencia, hemos acompañado a nuestros clientes en el proceso de venta,
                                        alquileres, desarrollos inmobiliarios y tasaciones de una gran variedad de inmuebles.
                                    </p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-call-center-agent"/></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>CONFIANZA</h4>
                                    <p>
                                        La voz de nuestros clientes habla por sí sola. Nosotros creemos que la confianza es un
                                        factor fundamental a la hora de presentarnos como asesores inmobiliarios.
                                    </p>
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-maps-and-location"/></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4>PROFESIONALIDAD</h4>
                                    <p>
                                        Por sobre todo, un carácter profesional y una ética de trabajo seria es uno de nuestros
                                        pilares en FM Consultora.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AboutV3