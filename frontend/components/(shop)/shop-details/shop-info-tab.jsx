"use client";

export default function ShopInfoTab() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-product-tab">
                        <ul
                            className="nav nav-pills"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-home-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-home"
                                    aria-selected="true"
                                >
                                    Description
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                >
                                    Specification
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-contact-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-contact"
                                    aria-selected="false"
                                >
                                    Reviews (0)
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="pills-home"
                                role="tabpanel"
                                aria-labelledby="pills-home-tab"
                                tabIndex={0}
                            >
                                Use both direct conversations and indirect
                                observations to get visibility into employees’
                                challenges and concerns. Use every opportunity
                                to make to employees that you support and care
                                them. To facilitate regular conversations
                                between managers and employees, provide managers
                                with guidance on how best to broach sensitive
                                subjects arising from the COVID-19 pandemic
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-profile"
                                role="tabpanel"
                                aria-labelledby="pills-profile-tab"
                                tabIndex={0}
                            >
                                Use both direct conversations and indirect
                                observations to get visibility into employees’
                                challenges and concerns. Use every opportunity
                                to make to employees that you support and care
                                them. To facilitate regular conversations
                                between managers and employees, provide managers
                                with guidance on how best to broach sensitive
                                subjects arising from the COVID-19 pandemic
                            </div>
                            <div
                                className="tab-pane fade"
                                id="pills-contact"
                                role="tabpanel"
                                aria-labelledby="pills-contact-tab"
                                tabIndex={0}
                            >
                                Use both direct conversations and indirect
                                observations to get visibility into employees’
                                challenges and concerns. Use every opportunity
                                to make to employees that you support and care
                                them. To facilitate regular conversations
                                between managers and employees, provide managers
                                with guidance on how best to broach sensitive
                                subjects arising from the COVID-19 pandemic
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
