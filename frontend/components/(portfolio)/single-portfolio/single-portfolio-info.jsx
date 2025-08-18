import Image from "next/image";
import SinglePortfolioPagination from "./ui/single-portfolio-pagination";
import SidebarContact from "@/components/ui/cards/sidebar-contact";
import SinglePortfolioDetail from "./ui/single-portfolio-detail";

export default async function SinglePortfolioInfo() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div
                        className="optech-pd-thumb"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            priority
                            src="/assets/images/p1/p_details.png"
                            alt="details"
                            className="h-auto w-100"
                        />
                    </div>
                    <div className="optech-pd-wrap">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="optech-pd-content-wrap">
                                    <div className="optech-pd-content-item">
                                        <h3>Project overview</h3>
                                        <p>
                                            A content management system helps
                                            you create, manage, and publish
                                            content on the web. It also keep
                                            content organized and accessible so
                                            it can be used and repurposed
                                            effectively. There are various kinds
                                            of content management systems
                                            available—from cloud-based to a
                                            headless
                                        </p>
                                        <p>
                                            CMS provides user-friendly features
                                            for easy editing and is compatible
                                            with installing plugins and tools
                                            that provide even more features for
                                            advanced functions. API CMS’s are
                                            built to have an excellent
                                            user-friendly interface that is easy
                                            to use.
                                        </p>
                                    </div>
                                    <div className="optech-pd-content-item">
                                        <h3>The challenge of project</h3>
                                        <p>
                                            A content management system (CMS) is
                                            an application that is used to
                                            manage content, allowing multiple
                                            contributors to create, edit and
                                            publish. Content in a CMS is
                                            typically stored in a database and
                                            displayed in a presentation layer
                                            based on a set of templates like a
                                            website.
                                        </p>
                                    </div>
                                    <div className="optech-pd-content-item">
                                        <div className="row">
                                            <div
                                                className="col-md-6"
                                                data-aos="fade-up"
                                                data-aos-duration={600}
                                            >
                                                <Image
                                                    height="0"
                                                    width="0"
                                                    sizes="100vw"
                                                    priority
                                                    src="/assets/images/p1/p1.png"
                                                    alt="images"
                                                    className="h-auto w-100"
                                                />
                                            </div>
                                            <div
                                                className="col-md-6"
                                                data-aos="fade-up"
                                                data-aos-duration={800}
                                            >
                                                <Image
                                                    height="0"
                                                    width="0"
                                                    sizes="100vw"
                                                    priority
                                                    src="/assets/images/p1/p2.png"
                                                    alt="images"
                                                    className="h-auto w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="optech-pd-content-item">
                                        <p>
                                            CMS provides user-friendly features
                                            for easy editing and is compatible
                                            with installing plugins and tools
                                            that provide even more features for
                                            advanced functions. API CMS’s are
                                            built to have an excellent
                                            user-friendly interface that is easy
                                            to use.
                                        </p>
                                    </div>
                                    <div className="optech-icon-list">
                                        <ul>
                                            <li>
                                                <i className="ri-check-line" />
                                                Creating and editing content
                                            </li>
                                            <li>
                                                <i className="ri-check-line" />
                                                Workflows, reporting, and
                                                content organization
                                            </li>
                                            <li>
                                                <i className="ri-check-line" />
                                                User &amp; role-based
                                                administration and security
                                            </li>
                                            <li>
                                                <i className="ri-check-line" />
                                                Flexibility, scalability, and
                                                performance and analysis
                                            </li>
                                            <li>
                                                <i className="ri-check-line" />
                                                Multilingual content
                                                capabilities
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="optech-pd-content-item">
                                        <h3>Final results</h3>
                                        <p>
                                            Having a content management system
                                            for your website allows you to have
                                            control of your content. It means
                                            having the ability to update, change
                                            or delete any images, text, video,
                                            or audio. It allows you to keep your
                                            site organized, up to date and
                                            looking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="optech-pd-sidebar-wrap">
                                    {/* sidebar details sart */}
                                    <SinglePortfolioDetail />
                                    {/* sidebar details end */}

                                    {/* sidebar contact start */}
                                    <SidebarContact />
                                    {/* sidebar contact end */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* pagination start */}
                    <SinglePortfolioPagination />
                    {/* pagination end */}
                </div>
            </div>
        </>
    );
}
