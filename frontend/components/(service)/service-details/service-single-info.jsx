import Image from "next/image";
import ServiceSidebar from "./service-sidebar";

export default function ServiceSingleInfo() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="optech-service-details-wrap">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                    src="/assets/images/service/service-deatils.png"
                                    alt="deatils"
                                    className="h-auto w-100"
                                />
                                <div className="optech-service-details-item">
                                    <h3>Overview</h3>
                                    <p>
                                        A content management system helps you
                                        create, manage, and publish content on
                                        the web. It also keep content organized
                                        and accessible so it can be used and
                                        repurposed effectively. There are
                                        various kinds of content management
                                        systems available—from cloud-based to a
                                        headless
                                    </p>
                                    <p>
                                        CMS provides user-friendly features for
                                        easy editing and is compatible with
                                        installing plugins and tools that
                                        provide even more features for advanced
                                        functions. API CMS’s are built to have
                                        an excellent user-friendly interface
                                        that is easy to use.
                                    </p>
                                </div>
                                <div className="optech-service-details-item">
                                    <h3>Features</h3>
                                    <p>
                                        A content management system (CMS) is an
                                        application that is used to manage
                                        content, allowing multiple contributors
                                        to create, edit and publish. Content in
                                        a CMS is typically stored in a database
                                        and displayed in a presentation layer
                                        based on a set of templates like a
                                        website.
                                    </p>
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
                                </div>
                                <div className="optech-service-details-item">
                                    <h3>Goal</h3>
                                    <p>
                                        A content management system (CMS) is an
                                        application that is used to manage
                                        content, allowing multiple contributors
                                        to create, edit and publish. Content in
                                        a CMS is typically stored in a database
                                        and displayed in a presentation layer
                                        based on a set of templates like a
                                        website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* service sidebar start */}
                            <ServiceSidebar />
                            {/* service sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
