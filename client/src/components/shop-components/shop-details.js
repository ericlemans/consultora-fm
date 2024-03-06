import React, {useEffect, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link, useLocation} from 'react-router-dom';
import dayjs from "dayjs";
import {Divider} from "@mui/material";
import SocialMediaWidget from "../consultora-fm-components/social-media-widget";
import LocationMap from "../consultora-fm-components/locationMap";
import FormWidget from "../consultora-fm-components/form-widget";

require('dayjs/locale/es')

function ShopDetails({details}) {

    const location = useLocation();

    const [floorplanTab, setFloorplanTab] = useState(0);
    const encodedURL = process.env.REACT_APP_FRONTEND_URL+location.pathname;

    const renderFloorplanContent = () => {
        return (
            <div className="ltn__apartments-tab-content-inner">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="apartments-plan-img ltn__img-slide-item-4">
                            <a href={`${process.env.REACT_APP_SERVER_URL}/assets/${details.floorplans[floorplanTab].directus_files_id.id}`}
                               data-rel="lightcase:floorplan"
                               target="_blank"
                            >
                                <img
                                    src={`${process.env.REACT_APP_SERVER_URL}/assets/${details.floorplans[floorplanTab].directus_files_id.id}?height=480&quality=75`}
                                    alt={details.floorplans[floorplanTab].directus_files_id.title}
                                />
                            </a>
                        </div>
                    </div>
                    {/*<div className="col-lg-5">*/}
                    {/*    <div className="apartments-plan-info ltn__secondary-bg--- text-color-white---">*/}
                    {/*        <h2>{details.floorplans[floorplanTab].directus_files_id.title}</h2>*/}
                    {/*        <p>{details.floorplans[floorplanTab].directus_files_id.description}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }

    return <div className="ltn__shop-details-area pb-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                        <div className="d-flex justify-content-between">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-category">
                                        <Link className="" to="#">{details.fk_tag.name}</Link>
                                    </li>
                                    <li className="ltn__blog-date">
                                        <i className="far fa-calendar-alt"/> {dayjs(details.date_created).locale("es").format("DD MMM YYYY")}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h1 className="mb-10">{details.title}</h1>
                        <label>
                                <span className="ltn__secondary-color">
                                    <i className="flaticon-pin"/></span> {`${details.fk_address[0]?.street}${" " + details.fk_address[0]?.number}, ${details.fk_address[0]?.locality}`}
                        </label>
                        <h4 className="title-2">Descripción</h4>
                        <div>{ReactHtmlParser(details.description)}</div>

                        <h4 className="title-2">Detalles de la propiedad</h4>
                        <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                            <ul>
                                <li><label>Propiedad ID:</label> <span>{details.id}</span></li>
                                <li><label>Superficie: </label>
                                    <span>{details.covered_size + details.balcony_size + details.patio_size} m²</span>
                                </li>
                                <li><label>Habitaciones:</label> <span>{details.rooms}</span></li>
                                <li><label>Baños:</label> <span>{details.bathrooms}</span></li>
                                <li><label>WC:</label> <span>{details.wc}</span></li>
                            </ul>
                            <ul>
                                <li><label>Precio:</label> <span>USD {details.price.toLocaleString("es")}</span>
                                </li>
                                <li><label>Ubicación:</label> <span>{details.fk_address[0]?.locality}</span></li>
                                <li><label>Piso:</label> <span>{details.piso}</span></li>
                                <li><label>Tipo:</label> <span>{details.fk_tag.name}</span></li>
                                <li><label>Año const.:</label> <span>{details.year_built}</span></li>
                            </ul>
                        </div>

                        {
                            details.fk_amenities.length > 0 && (
                                <>
                                    <h4 className="title-2 mb-10">Amenities</h4>
                                    <div className="property-details-amenities mb-60">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="ltn__menu-widget">
                                                    <ul className="amenities-section-container">
                                                        {
                                                            details.fk_amenities.map(item => {
                                                                return (
                                                                    <li key={item.id}>
                                                                        <label className="checkbox-item">
                                                                            {item.amenities_id.name}
                                                                            <input type="checkbox" defaultChecked="checked"
                                                                                   disabled/>
                                                                            <span className="checkmark"/>
                                                                        </label>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {/*GOOGLE MAPS*/}
                        <LocationMap details={details}/>

                        {/* APARTMENTS PLAN AREA START */}
                        {details.floorplans.length > 0 && (
                            <>
                                <h4 className="title-2">Planos</h4>
                                <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                                    <div
                                        className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                                        <div className="nav">
                                            {details.floorplans.map((item, index) => {
                                                return (
                                                    <a
                                                        key={item.id}
                                                        onClick={() => setFloorplanTab(index)}
                                                        className={`${floorplanTab === index && "active show"}`}
                                                        style={{cursor: "pointer"}}
                                                    >
                                                        {item.directus_files_id.title}
                                                    </a>
                                                )
                                            })}
                                        </div>

                                    </div>
                                    <div className="tab-content">
                                        {renderFloorplanContent()}
                                    </div>
                                </div>
                            </>
                        )}


                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                        {/* Author Widget */}
                        <div className="widget ltn__author-widget pb-2">
                            <div className="ltn__author-widget-inner text-center">
                                <img
                                    src={`${process.env.REACT_APP_SERVER_URL}/assets/${details.fk_agent.avatar}?height=200&width=200`}
                                    alt="Perfil"/>
                                <h5 className="mb-1">{details.fk_agent.first_name} {details.fk_agent.last_name}</h5>
                                <small className="ltn__secondary-color my-1">{details.fk_agent.title}</small>
                                <Divider style={{marginTop: 15, marginBottom: 15}}/>
                                <p>
                                    {details.fk_agent.description}
                                </p>
                            </div>
                        </div>

                        <FormWidget details={details} category={"Propiedad"}/>

                        <SocialMediaWidget/>

                    </aside>
                </div>
            </div>
        </div>
    </div>

}

export default ShopDetails