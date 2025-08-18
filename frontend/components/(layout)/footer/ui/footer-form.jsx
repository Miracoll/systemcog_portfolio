"use client";
import { validateEmail, validatePhoneNumber } from "@/lib/fn";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const center = {
    lat: 22.3419,
    lng: 91.815536,
};

export default memo(function FooterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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

    // form handling
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="optech-footer-form-section">
                <div className="container">
                    <div className="optech-footer-form-wrap">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="optech-footer-form">
                                    <h4>Fill The Contact Form</h4>
                                    <p>
                                        Get Free Consultation For IT Solutions
                                    </p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="optech-main-field">
                                                    <input
                                                        {...register("name", {
                                                            required: true,
                                                        })}
                                                        type="text"
                                                        placeholder="Your name"
                                                    />
                                                    {errors.name && (
                                                        <span>
                                                            This field is
                                                            required
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="optech-main-field">
                                                    <input
                                                        {...register("phone", {
                                                            required: true,
                                                            validate:
                                                                validatePhoneNumber,
                                                        })}
                                                        type="number"
                                                        placeholder="Phone number"
                                                    />
                                                    {errors.phone?.type ===
                                                        "required" && (
                                                        <span>
                                                            This field is
                                                            required
                                                        </span>
                                                    )}

                                                    {errors.phone?.type ===
                                                        "validate" && (
                                                        <span>
                                                            Invalid phone number
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="optech-main-field">
                                            <input
                                                {...register("email", {
                                                    required: true,
                                                    validate: validateEmail,
                                                })}
                                                type="email"
                                                placeholder="Email address"
                                            />
                                            {errors.email?.type ===
                                                "required" && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                            {errors.email?.type ===
                                                "validate" && (
                                                <span>
                                                    Invalid email address
                                                </span>
                                            )}
                                        </div>
                                        <div className="optech-main-field">
                                            <textarea
                                                {...register("message", {
                                                    required: true,
                                                })}
                                                placeholder="Write your message"
                                            />
                                            {errors.message && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            id="optech-main-form-btn"
                                            type="submit"
                                            data-text="Send Message"
                                        >
                                            <span className="btn-wraper">
                                                Send Message
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5">
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
                                        <Marker
                                            position={center}
                                            title="Optech"
                                        />
                                    </GoogleMap>
                                ) : (
                                    <></>
                                )}
                                {/* google map end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
