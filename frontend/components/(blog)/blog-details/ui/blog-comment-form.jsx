"use client";
import { validateEmail } from "@/lib/fn";
import { useId } from "react";
import { useForm } from "react-hook-form";

export default function BlogCommentForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const check = useId();

    // submit handler
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="optech-comment-box">
                <h3>Leave a comments:</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="optech-comment-box-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="optech-comment-form">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.name?.type === "required" && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="optech-comment-form">
                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        {...register("email", {
                                            required: true,
                                            validate: validateEmail,
                                        })}
                                    />
                                    {errors.email?.type === "required" && (
                                        <span>This field is required</span>
                                    )}
                                    {errors.email?.type === "validate" && (
                                        <span>Invalid email address</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="optech-comment-form">
                            <textarea
                                {...register("msg", {
                                    required: true,
                                })}
                                placeholder="Write us your comment"
                            />
                            {errors.msg?.type === "required" && (
                                <span>This field is required</span>
                            )}
                        </div>
                        <div className="optech-check">
                            <input type="checkbox" id={check} />
                            <label htmlFor={check}>
                                Save my name, email, and website in this browser
                                for the next time I comment.
                            </label>
                        </div>
                        <button
                            id="optech-default-btn"
                            type="submit"
                            data-text="Send Message"
                        >
                            <span className="btn-wraper">Send Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
