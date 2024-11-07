import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
    <div
        style={{
            width: "30px",
            height: "30px",
            background: `url('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png') no-repeat center center`,
            backgroundSize: "contain",
            position: "absolute",
            transform: "translate(-50%, -50%)",
        }}
    >
        {text}
    </div>
);

const Map = ({ lat, long }) => {
    const center = {
        lat: 0,
        lng: 0,
    };

    return (
        <div style={{ width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAeJQp8EupFS2eBrQLlRJ9_YkjDjub2PYM",
                }}
                defaultCenter={center}
                defaultZoom={0}
            >
                <Marker lat={lat} lng={long} />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
