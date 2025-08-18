"use client";

import { useForm } from "react-hook-form";

export default function HeroForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="optech-hero-form">
                <h4>Fill The Contact Form</h4>
                <p>Get Free Consultation For IT Solutions</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="optech-main-field">
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Your name"
                        />
                        {errors.name?.type === "required" && (
                            <span>First name is required</span>
                        )}
                    </div>
                    <div className="optech-main-field">
                        <input
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            type="email"
                            placeholder="Email address"
                        />
                        {errors.email?.type === "required" && (
                            <span>Email is required</span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span>Email is invalid</span>
                        )}
                    </div>
                    <div className="optech-main-field">
                        <textarea
                            {...register("comments", {
                                required: true,
                            })}
                            placeholder="Write your message"
                        />
                        {errors.comments?.type === "required" && (
                            <span>Message is required</span>
                        )}
                    </div>
                    <button
                        id="optech-main-form-btn"
                        type="submit"
                        data-text="Send Message"
                    >
                        <span className="btn-wraper">Send Message</span>
                    </button>
                </form>
            </div>
        </>
    );
}
