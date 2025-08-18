"use client";
import { validateEmail, validatePhoneNumber } from "@/lib/fn";
import { useForm } from "react-hook-form";

export default function TeamForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    // submit form data
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="optech-main-form p-0">
                <h3>Fill The Contact Form</h3>
                <p>Feel free to contact with us, we don’t spam your email</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-main-field">
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: true,
                                    })}
                                    placeholder="Your name"
                                />
                                {errors.name?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="optech-main-field">
                                <input
                                    {...register("phone", {
                                        required: true,
                                        validate: validatePhoneNumber,
                                    })}
                                    type="number"
                                    placeholder="Phone number"
                                />
                                {errors.phone?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                                {errors.phone?.type === "validate" && (
                                    <span>Invalid phone number</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="optech-main-field">
                                <input
                                    {...register("email", {
                                        required: true,
                                        validate: validateEmail,
                                    })}
                                    type="email"
                                    placeholder="Email address"
                                />
                                {errors.email?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                                {errors.email?.type === "validate" && (
                                    <span>Invalid email address</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="optech-main-field">
                                <textarea
                                    {...register("message", {
                                        required: true,
                                    })}
                                    placeholder="Write your message"
                                />
                                {errors.message?.type === "required" && (
                                    <span>This field is required</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button
                                id="optech-team-form-btn"
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
