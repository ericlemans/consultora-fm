import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a target="_blank" href="https://www.facebook.com/profile.php?id=61556767911463" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
				<li><a target="_blank" href="https://www.instagram.com/fm.inmobiliaria/" title="Instagram"><i className="fab fa-instagram" /></a></li>
				<li><a target="_blank" href="https://www.linkedin.com/company/consultora-fm" title="LinkedIn"><i className="fab fa-linkedin" /></a></li>
			</ul>
		</div>
        }
}

export default Social