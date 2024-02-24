import React from 'react';

const TitlesHeader = ({text}) => {
    return (
        <div className="col-lg-12">
            <div className="container mt-80">
                <h1 className="page-title">{text}</h1>
                <hr className="dropdown-divider"/>
            </div>
        </div>
    );
};

export default TitlesHeader;
