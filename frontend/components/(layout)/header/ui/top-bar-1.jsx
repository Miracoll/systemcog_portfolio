import Link from "next/link";

export default function TopBar1() {
    return (
        <>
            <div className="optech-header-top">
                <div className="container">
                    <div className="optech-header-info-wrap">
                        <div className="optech-header-info ">
                            <ul>
                                <li>
                                    <i className="ri-map-pin-2-fill" />
                                    2774 Oak Drive, Plattsburgh, New York
                                </li>
                            </ul>
                        </div>
                        <div className="optech-header-info ">
                            <ul>
                                <li>
                                    <Link href="tel:123">
                                        <i className="ri-phone-fill" />
                                        518-564-3200
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:name@email.com">
                                        <i className="ri-mail-fill" />
                                        tecbolt@example.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
