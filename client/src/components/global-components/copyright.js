import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CopyRight extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
			<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
				<div className="col-md-6 col-12">
					<div className="ltn__copyright-design clearfix">
					<p>Todos los derechos reservados @ FM Consultora <span className="current-year" /></p>
					</div>
				</div>
				<div className="col-md-6 col-12 align-self-center">
					<div className="ltn__copyright-menu text-end">
					<ul className="go-top">
						<li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
        )
    }
}


export default CopyRight