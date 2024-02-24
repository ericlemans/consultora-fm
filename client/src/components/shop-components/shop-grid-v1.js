import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import parse from 'html-react-parser';
import axios from "axios";
import PageHeader from "../global-components/page-header";
import {ThreeDots} from "react-loader-spinner";

const ShopGridV1 = () => {

    const {search} = useLocation();
    const queryParameters = new URLSearchParams(search)

    const barrio = queryParameters.get("barrio");
    const propiedad = queryParameters.get("propiedad");
    const publicacion = queryParameters.get("publicacion");

    const [loading, setLoading] = useState(true);

    // GET PROPERTIES
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/items/propiedad?fields=*.*,fk_amenities.*.*`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_SERVER_ADMIN_TOKEN}`
            },
            params: {
                filter: {
                    ...publicacion != "null" && {fk_tag: {name: {_contains: publicacion}}},
                    ...barrio != "null" && {fk_address: {locality: {_contains: barrio}}},
                    ...propiedad != "null" && {fk_property_type: {name: {_contains: propiedad}}}
                }
            }
        })
            .then(response => {
                setProperties(response.data.data)
                setLoading(false);
            })
            .catch(error => {
                console.log(error.response)
                setLoading(false);
            })
    }, []);


    const [properties, setProperties] = useState([]);

    let publicUrl = process.env.REACT_APP_SERVER_URL;

    const renderProductItem = (data, index) => {
        return (
            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                <div className="product-img img-container">
                    <Link to={`/product-details/${data.id}`}>
                        <img
                            loading="lazy"
                            src={`${publicUrl}/assets/${data.images[0].directus_files_id}?${process.env.REACT_APP_GRID_THUMBNAIL}`}
                            alt={`${data.title} - Foto ${index + 1}`}/>
                    </Link>

                </div>
                <div className="product-card-info">
                    <div className="product-badge">
                        <ul>
                            <li className="sale-badge">
                                {data.fk_tag.name}
                            </li>
                        </ul>
                    </div>
                    <h2 className="product-title go-top">
                        <Link to={`/product-details/${data.id}`}>
                            {data.title}
                        </Link>
                    </h2>
                    <div className="product-img-location">
                        <ul>
                            <li className="go-top">
                                <Link to="/contact">
                                    <i className="flaticon-pin"/>
                                    {`${data.fk_address[0]?.street}${" " + data.fk_address[0]?.number}, ${data.fk_address[0]?.locality}`}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>{data.rooms} </span>
                            Habitaciones
                        </li>
                        <li><span>{data.bathrooms} </span>
                            Baños
                        </li>
                        <li><span>{data.covered_size + data.balcony_size + data.patio_size} </span>
                            m²
                        </li>
                    </ul>
                </div>
                <div className="product-info-bottom">
                    <div className="product-price">
                                <span>
                                    U$D {data.price.toLocaleString("es-AR")}
                                    {data.fk_tag.id === 2 && <label> /mes</label>}
                                </span>
                    </div>
                </div>
            </div>


        )
    }

    return (
        <div id="shop-grid">
            {/*<PageHeader headertitle="Shop Grid"/>*/}
            <div className="ltn__product-area ltn__product-gutter mb-100 mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__shop-options d-flex justify-content-end">
                                <ul>
                                    {/*<li>*/}
                                    {/*    <div className="ltn__grid-list-tab-menu ">*/}
                                    {/*        <div className="nav">*/}
                                    {/*            <a className="active show" data-bs-toggle="tab"*/}
                                    {/*               href="#liton_product_grid">*/}
                                    {/*                <i className="fas fa-th-large"/></a>*/}
                                    {/*            <a data-bs-toggle="tab" href="#liton_product_list">*/}
                                    {/*                <i className="fas fa-list"/>*/}
                                    {/*            </a>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    <li>
                                        <div className="showing-product-number text-right">
                                            {properties.length &&
                                                <span>Mostrando {properties?.length} {properties?.length > 1 ? "avisos" : "aviso"}</span>}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content ">
                                <div className="tab-pane fade active show" id="liton_product_grid">
                                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                        <div id="product-card">
                                            {/* ltn__product-item */}
                                            <div className="row">

                                                {
                                                    !loading ? (
                                                        properties.length && properties.map((item, index) => (
                                                            <div key={item.id} className="col-lg-4 col-sm-6 col-12">
                                                                {renderProductItem(item, index)}
                                                            </div>
                                                        ))) : (
                                                        <div className="justify-content-center d-flex my-5">
                                                            <ThreeDots height="80"
                                                                       width="80"
                                                                       color="red"
                                                                       radius="9"
                                                                       ariaLabel="three-dots-loading"
                                                                       wrapperStyle={{}}
                                                                       wrapperClass=""/>
                                                        </div>
                                                    )
                                                }

                                            </div>
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

export default ShopGridV1