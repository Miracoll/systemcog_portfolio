import Image from "next/image";
import Link from "next/link";

export default function AwesomeServiceCard2({ data }) {
    return (
        <>
            <div className="optech-iconbox-wrap">
                <div className="optech-iconbox-icon">
                    <Image
                        height={36}
                        width={36}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-iconbox-data">
                    <h5 dangerouslySetInnerHTML={{ __html: data.title }}></h5>
                    <p>{data.description}</p>
                    <Link className="optech-icon-btn" href="/service-details">
                        <i className="icon-show ri-arrow-right-line" />
                        <span>Learn More</span>
                        <i className="icon-hide ri-arrow-right-line" />
                    </Link>
                </div>
            </div>
        </>
    );
}
