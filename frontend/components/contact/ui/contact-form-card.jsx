"use client";
import { useForm } from "react-hook-form";

export default function ContactFormCard() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // form handler
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="optech-main-form bg-light1 ml60 aos-init aos-animate">
                <h3>Fill The Contact Form</h3>
                <p>
                    Feel free to contact with us, we don&apos;t spam your email
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-main-field">
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: true,
                                        minLength: 3,
                                    })}
                                    placeholder="Your name"
                                />
                                {errors.name?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                                {errors.name?.type === "minLength" && (
                                    <span>Min length is 4</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="optech-main-field">
                                <input
                                    type="number"
                                    {...register("number", {
                                        required: true,
                                        minLength: 11,
                                    })}
                                    placeholder="Phone number"
                                />
                                {errors.number?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                                {errors.number?.type === "minLength" && (
                                    <span>Number must be 11 digit</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="optech-main-field">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
                                    placeholder="Email address"
                                />
                                {errors.email?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span>
                                        Please enter a valid email address
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="optech-main-field">
                                <textarea
                                    name="textarea"
                                    {...register("msg", { required: true })}
                                    placeholder="Write your message"
                                />
                                {errors.msg?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button
                                id="optech-main-form-btn"
                                type="submit"
                                data-text="Send Message"
                            >
                                <span className="btn-wraper">Send Message</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
