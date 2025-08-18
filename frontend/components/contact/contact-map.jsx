"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";

const center = {
    lat: 22.3419,
    lng: 91.815536,
};

export default memo(function ContactMap() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDPAmgDwH2BpGQkkqps8lOGST9cnYLt9oo",
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        setMap(map);

        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        window.google.maps.event.addListenerOnce(map, "bounds_changed", () => {
            map.setZoom(15);
        });
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <>
            <div className="optech-map-page">
                {/* google map start */}
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{
                            height: "100%",
                            width: "100%",
                        }}
                        center={center}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={{
                            zoomControl: false,
                        }}
                    >
                        <Marker position={center} title="Optech" />
                    </GoogleMap>
                ) : (
                    <></>
                )}
                {/* google map end */}
            </div>
        </>
    );
});
