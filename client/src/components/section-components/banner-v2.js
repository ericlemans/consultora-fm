import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return (
            <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
                <div className="ltn__slider-11-inner">
                    <div className="ltn__slider-11-active">
                        {/* slide-item */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                            <div className="ltn__slide-item-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">

                                                    <h6 className="slide-sub-title white-color--- animated"><span><i
                                                        className="fas fa-home"/></span> Operaciones inmobiliarias</h6>
                                                    <h1 className="slide-title animated ">Consultora FM<br/>
                                                        <span>Propiedades</span></h1>
                                                    <div className="slide-brief animated">
                                                        <p>Encontrá exclusivas propiedades e inmuebles en venta y
                                                            alquiler.
                                                            Tenemos trayectoria y garantía profesional.</p>
                                                    </div>
                                                    <div className="btn-wrapper animated">
                                                        <Link to="/about" className="theme-btn-1 btn btn-effect-1">Contactate
                                                            con nosotros</Link>
                                                        {/*<a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">*/}
                                                        {/*  <i className="icon-play  ltn__secondary-color" />*/}
                                                        {/*</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-item-img">
                                                <img
                                                    src={process.env.REACT_APP_SERVER_URL + "assets/img/fmconsultora/heredia_point_front.jpeg"}
                                                    alt="Proyecto Heredia Point"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BannerV2