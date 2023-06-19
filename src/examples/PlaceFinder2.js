import React, { useState, useRef, useEffect } from 'react'
import { GoogleMap, InfoBox, useJsApiLoader } from '@react-google-maps/api';
// import Autocomplete from "react-google-autocomplete";

const containerStyle = {
    width: '100%',
    height: '50vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export default function PlaceFinder2() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCt35qjRPYNSxh-FdfP_XhrRMfLqxFm2d4"
    })

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        // componentRestrictions: { country: "ng" },
        fields: ["place_id", "name", "geometry", "formatted_address", "address_components", "icon"],
        types: ["establishment"]
    };
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
    }, []);

    return isLoaded ? (
        <>
            <div>
                <label>enter address :</label>
                <input ref={inputRef} />
            </div>


            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={3}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <>
                    <InfoBox
                        /* onLoad={onLoad}
                        options={options}
                        position={center} */
                    >
                        <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
                            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                                Hello, World!
                            </div>
                        </div>
                    </InfoBox>
                </>
            </GoogleMap>
        </>

    ) : <></>
}
