import React, {useEffect, useState} from 'react';
import GoogleMapReact from "google-map-react";
import {fromAddress} from "react-geocode";

const LocationMap = ({details}) => {

    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        if (!coordinates) {
            const address = details.fk_address && `${details.fk_address[0]?.number} ${details.fk_address[0]?.street}, ${details.fk_address[0]?.city}, ${details.fk_address[0]?.country}`;

            fromAddress(address, process.env.REACT_APP_GOOGLE_MAPS_KEY, "en", "ar")
                .then(({results}) => {
                    const {lat, lng} = results[0].geometry.location;
                    setCoordinates({lat, lng})
                })
                .catch(console.error);
        }
    }, []);

    const Marker = () => <div className="map-circle"/>;

    if(coordinates) {
        return (
            <div id="map">
                <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
                    {/*{renderGoogleMAps()}*/}
                    <div className="h-100 w-100">
                        <GoogleMapReact
                            // apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
                            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
                            defaultCenter={coordinates}
                            zoom={14}
                        >
                            <Marker
                                lat={coordinates.lat}
                                lng={coordinates.lng}
                            />
                        </GoogleMapReact>
                    </div>

                </div>
            </div>
        );
    }

};

export default LocationMap;
