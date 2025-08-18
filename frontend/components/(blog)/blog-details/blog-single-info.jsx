import BlogSidebar from "@/components/ui/sidebar/blog-sidebar";
import Image from "next/image";
import Link from "next/link";
import BlogComment from "./ui/blog-comments";
import BlogComments from "./ui/blog-comments";
import BlogCommentForm from "./ui/blog-comment-form";

export default function BlogSingleInfo() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div
                                className="optech-blog-thumb single-blog"
                                data-aos="fade-up"
                                data-aos-duration={800}
                            >
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    src="/assets/images/blog/blog-single.png"
                                    alt="blog"
                                />
                            </div>
                            <div className="optech-single-post-content-wrap">
                                <div className="optech-single-post-meta">
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <i className="ri-calendar-fill" />
                                                26 June 2023
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="ri-bookmark-fill" />
                                                Technology
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <i className="ri-chat-2-fill" />
                                                2 Comments
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="entry-content">
                                    <p>
                                        Vast numbers of employees now work
                                        remotely, and it’s too late to develop a
                                        set of remote-work policies if you
                                        didn’t already have one. But there are
                                        ways to make the remote-work experience
                                        productive and engaging for employees
                                    </p>
                                    <p>
                                        Use both direct conversations and
                                        indirect observations to get visibility
                                        into employees’ challenges and concerns.
                                        Use every opportunity to make clear to
                                        employees that you support and care
                                        them. To facilitate regular
                                        conversations between managers and
                                        employees, provide managers with
                                        guidance on how best to broach sensitive
                                        subjects arising from the COVID-19
                                        pandemic, including alternative work
                                        models, job security and prospects,
                                        impact on staffing
                                    </p>
                                    <div className="optech-single-thumb">
                                        <div className="row">
                                            <div
                                                className="col-lg-6"
                                                data-aos="fade-up"
                                                data-aos-duration={600}
                                            >
                                                <Image
                                                    height="0"
                                                    width="0"
                                                    sizes="100vw"
                                                    priority
                                                    src="/assets/images/blog/b-d-thumb1.png"
                                                    alt="thumb"
                                                    className="h-auto w-100"
                                                />
                                            </div>
                                            <div
                                                className="col-lg-6"
                                                data-aos="fade-up"
                                                data-aos-duration={800}
                                            >
                                                <Image
                                                    height="0"
                                                    width="0"
                                                    sizes="100vw"
                                                    priority
                                                    src="/assets/images/blog/b-d-thumb2.png"
                                                    alt="thumb"
                                                    className="h-auto w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        The third Monday of January is supposed
                                        to be the most depressing day of the
                                        year. Whether you believe that or not,
                                        the long nights, cold weather, and
                                        trying to keep to new year resolutions
                                        are all probably getting to you a little
                                        by now. To make matters worse many will
                                        still be recovering from their Christmas
                                        spending. So how can you make today
                                    </p>
                                    <blockquote>
                                        <Image
                                            height={44}
                                            width={62}
                                            priority
                                            src="/assets/images/blog/quote.svg"
                                            alt="quote"
                                        />
                                        We appreciate the consistent
                                        high-quality service provided by their
                                        team goes above and beyond concerns
                                        promptly ”
                                    </blockquote>
                                    <p>
                                        Vast numbers of employees now work
                                        remotely, and it’s too late to develop a
                                        set of remote-work policies if you
                                        didn’t already have one. But there are
                                        ways to make the remote-work experience
                                        productive and engaging for employees
                                    </p>
                                    <p>
                                        Use both direct conversations and
                                        indirect observations to get visibility
                                        into employees’ challenges and concerns.
                                        Use every opportunity to make clear to
                                        employees that you support and care
                                        them. To facilitate regular
                                        conversations between managers and
                                        employees, provide managers with
                                        guidance on how best to broach sensitive
                                        subjects arising from the COVID-19
                                        pandemic
                                    </p>
                                    <div className="optech-single-post-tag-wrap">
                                        <div className="optech-blog-tags">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        IT Solution
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Technology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Cyber Security
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Software
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="optech-post-navigation">
                                        <Link
                                            className="nav-previous"
                                            href="/blog-details"
                                        >
                                            <i className="ri-arrow-left-line" />
                                            Perv Post
                                        </Link>
                                        <Link
                                            className="nav-next"
                                            href="/blog-details"
                                        >
                                            Next Post
                                            <i className="ri-arrow-right-line" />
                                        </Link>
                                    </div>
                                    {/* blog comments start */}
                                    <BlogComments />
                                    {/* blog comments end */}

                                    {/* blog comment form start */}
                                    <BlogCommentForm />
                                    {/* blog comment form end */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* blog sidebar start */}
                            <BlogSidebar />
                            {/* blog sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
