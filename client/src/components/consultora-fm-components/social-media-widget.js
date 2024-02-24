import React from 'react';

const SocialMediaWidget = () => {
    return (
        <div className="widget ltn__social-media-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border-2">Seguinos en las redes</h4>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=61556767911463" target="_blank" title="Facebook"><i
                        className="fab fa-facebook-f"/></a></li>
                    <li><a href="https://www.linkedin.com/company/consultora-fm" target="_blank" title="Linkedin"><i
                        className="fab fa-linkedin"/></a></li>
                    <li><a href="https://www.instagram.com/fm.inmobiliaria/" target="_blank" title="Instagram"><i
                        className="fab fa-instagram"/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialMediaWidget;
