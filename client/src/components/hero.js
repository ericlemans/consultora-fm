import React, {useEffect, useState} from 'react';
import {Parallax} from "react-parallax";
import {Link} from "react-router-dom";
import SearchForm from "./section-components/search-form";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";

const Hero = () => {

    const [barrios, setBarrios] = useState([]);
    const [selectedBarrio, setSelectedBarrio] = useState(null);
    const [selectedTipoDePropiedad, setSelectedTipoDePropiedad] = useState(null);
    const [selectedTipoDePublicacion, setSelectedTipoDePublicacion] = useState(null);

    const [loading, setLoading] = useState(true);


    // Get parameters for search
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/items/propiedad`, {
            params: {
                fields: "fk_address.*, fk_tag.*",
                filter: {
                    ...selectedTipoDePublicacion != "null" && {
                        fk_tag: {
                            name: {
                                _contains: selectedTipoDePublicacion
                            }
                        }
                    },
                    // ...selectedBarrio != "null" && {
                    //     fk_address: {
                    //         locality: {
                    //             _contains: selectedBarrio
                    //         }
                    //     }
                    // },
                }
            },

        })
            .then(response => {
                let items = [];
                response.data.data.forEach(item => {
                    items.push(item.fk_address[0].locality)
                })
                const uniqueItems = [...new Set(items)];
                setBarrios(uniqueItems);
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)

            })
    }, [selectedTipoDePublicacion, selectedBarrio]);

    const renderTitle = () => (
        <div className="text-center mb-4">
            {/*<h1 className="slide-title animated white-color text-uppercase">*/}
            {/*    Consultora FM*/}
            {/*</h1>*/}
            <div className="slide-title animated hero-title">
                <img src={process.env.REACT_APP_SERVER_URL + "/assets/59b1204b-871b-4a4f-80f1-d8955f924bf0"}
                     alt="Logo FM Consultora"/>
            </div>

            {/*<div className="mt-4 mb-4">*/}
            {/*      <h5 className="white-color animated font-weight-bolder">*/}
            {/*    Encontrá exclusivas propiedades e inmuebles en venta y alquiler.<br/>*/}
            {/*    Tenemos trayectoria y garantía profesional.*/}
            {/*</h5>*/}
            {/*</div>*/}


        </div>
    )
    const renderSearchBar = () => {
        function handleBarrio(e) {
            setSelectedBarrio(e.target.value)
        }

        function handleTipoDePropiedad(e) {
            setSelectedTipoDePropiedad(e.target.value)
        }

        function handleTipoDePublicacion(e) {
            setSelectedTipoDePublicacion(e.target.value)
        }

        if (!loading) {
            return (
                <div className="ltn__car-dealer-form-tab mt-30 flex-grow-1 shadow-standard">
                    <div className="tab-content search-bar box-shadow-1 position-relative pb-10">
                        <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                            <div className="car-dealer-form-inner">
                                <form className="ltn__car-dealer-form-box row">
                                    <div
                                        className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-4 col-md-6">
                                        <select onChange={handleTipoDePublicacion} className="nice-select">
                                            <option value={"null"}>Publicación...</option>
                                            <option value={"venta"}>Venta</option>
                                            <option value={"alquiler"}>Alquiler</option>
                                            <option value={"temporario"}>Temporario</option>
                                        </select>
                                    </div>

                                    {/*<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-4 col-md-6">*/}
                                    {/*    <select onChange={handleTipoDePropiedad} className="nice-select">*/}
                                    {/*        <option value={null}>Vivienda...</option>*/}
                                    {/*        <option value={"casa"}>Casa</option>*/}
                                    {/*        <option value={"departamento"}>Departamento</option>*/}
                                    {/*        <option value={"ph"}>PH</option>*/}
                                    {/*    </select>*/}
                                    {/*</div>*/}

                                    <div
                                        className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-4 col-md-6">
                                        <select onChange={handleBarrio} className="nice-select">
                                            <option key="Seleccionar" value={null}>Ubicación...</option>
                                            {barrios.map((item) => <option key={item} value={item}>{item}</option>)}
                                        </select>
                                    </div>


                                    <div
                                        className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-12">
                                        <div className="btn-wrapper text-md-center text-start mt-0 go-top">
                                            <Link
                                                to={`/shop-grid?propiedad=${selectedTipoDePropiedad}&barrio=${selectedBarrio}&publicacion=${selectedTipoDePublicacion}`}>
                                                <button
                                                    className="btn theme-btn-1 btn-effect-1 text-uppercase text-uppercase">
                                                    Buscar
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <ThreeDots
                    height="80"
                    width="80"
                    color="red"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )
        }

    }


    return (
        <div id="hero">
            <div className="position-absolute overlay-hero hero-height"/>

            <div className="bg-image-hero-container justify-content-center align-items-center d-flex">
                <div className="container ltn__z-index-9">
                    <div className="row">
                        <div className="col-12">
                            {renderTitle()}
                        </div>
                        <div className="col-12 justify-content-center d-flex">
                            {renderSearchBar()}
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Hero;
