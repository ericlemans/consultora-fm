import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
import SocialMediaWidget from "../consultora-fm-components/social-media-widget";

const NavbarV2 = (props) => {

    let publicUrl = process.env.PUBLIC_URL + '/';
    let CustomClass = props.CustomClass ? props.CustomClass : '';

    const [open, setOpen] = useState("null");

    return (
        <div>
            <header
                className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- " + CustomClass}>
                {/* ltn__header-middle-area start */}
                <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo-wrap">
                                    <div className="site-logo go-top">
                                        <Link to="/">
                                            <img
                                                src={process.env.REACT_APP_SERVER_URL + "/assets/e7904a16-20bf-40b8-bb75-ab52ef09a1f7?height=80"}
                                                alt="Logo"/>
                                        </Link>
                                    </div>
                                    <div className="get-support clearfix d-none">
                                        <div className="get-support-icon">
                                            <i className="icon-call"/>
                                        </div>
                                        <div className="get-support-info">
                                            <h6>Get Support</h6>
                                            <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col header-menu-column">
                                <div className="header-menu d-none d-xl-block go-top">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul className="justify-content-end">
                                                <li><Link to="/">Inicio</Link></li>
                                                {/*<li><Link to="/shop-grid">Propiedades</Link></li>*/}
                                                <li><Link
                                                    to="/shop-grid?propiedad=null&barrio=null&publicacion=alquiler">Alquiler</Link>
                                                </li>
                                                <li><Link
                                                    to="/shop-grid?propiedad=null&barrio=null&publicacion=venta">Venta</Link>
                                                </li>
                                                <li>
                                                    <HashLink smooth to="/#tasaciones">
                                                        Tasaciones
                                                    </HashLink>
                                                </li>
                                                {/*<li><Link to="/about">About</Link></li>*/}
                                                <li><Link to="/contact">Contacto</Link></li>
                                                <li><a className="ltn__secondary-color" target="_blank"
                                                       href="https://admin.consultora-fm.com.ar">Admin</a></li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col--- ltn__header-options ltn__header-options-2 ">
                                {/* Mobile Menu Button */}
                                <div className="mobile-menu-toggle d-xl-none">
                                    <a onClick={() => setOpen("ltn__utilize-open")} className="ltn__utilize-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"/>
                                            <path d="M300,320 L540,320" id="middle"/>
                                            <path
                                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                id="bottom"
                                                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ltn__header-middle-area end */}
            </header>
            <div id="ltn__utilize-mobile-menu" className={`ltn__utilize ltn__utilize-mobile-menu ${open}`}>
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <div className="site-logo">

                            <Link to="/">
                                <img
                                    src={process.env.REACT_APP_SERVER_URL + "/assets/e7904a16-20bf-40b8-bb75-ab52ef09a1f7?height=80"}
                                    alt="Logo"/>
                            </Link>
                        </div>
                        <button onClick={() => setOpen("")} className="ltn__utilize-close">×</button>
                    </div>

                    <div className="ltn__utilize-menu">
                        <ul>
                            <li onClick={() => setOpen("")}><Link to="/">Inicio</Link></li>
                            {/*<li><Link to="/shop-grid">Propiedades</Link></li>*/}
                            <li onClick={() => setOpen("")}><Link
                                to="/shop-grid?propiedad=null&barrio=null&publicacion=alquiler">Alquiler</Link>
                            </li>
                            <li onClick={() => setOpen("")}><Link
                                to="/shop-grid?propiedad=null&barrio=null&publicacion=venta">Venta</Link>
                            </li>
                            <li onClick={() => setOpen("")}>
                                <HashLink smooth to="/#tasaciones">
                                    Tasaciones
                                </HashLink>
                            </li>
                            {/*<li><Link to="/about">About</Link></li>*/}
                            <li onClick={() => setOpen("")}><Link to="/contact">Contacto</Link></li>
                            <li onClick={() => setOpen("")}><a className="ltn__secondary-color" target="_blank"
                                   href="https://admin.consultora-fm.com.ar">Admin</a></li>

                        </ul>
                    </div>
                    <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                        <ul>
                            <li>
                                <a className="ltn__secondary-color" target="_blank"
                                   href="https://admin.consultora-fm.com.ar"
                                >
                                    <span className="utilize-btn-icon"><i className="far fa-user"/></span>
                                    Admin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ltn__social-media-2">
                        <ul>
                            {/*<li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>*/}
                            {/*<li><a href="#" title="Twitter"><i className="fab fa-twitter"/></a></li>*/}
                            {/*<li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>*/}
                            {/*<li><a href="#" title="Instagram"><i className="fab fa-instagram"/></a></li>*/}
                            <SocialMediaWidget/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NavbarV2