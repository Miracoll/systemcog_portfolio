import Image from "next/image";
import Link from "next/link";

export default function AwesomeServiceCard({ data }) {
    // Replace <br> with space
    data.title = data.title.replace(/<br\s*\/?>/gi, " ");

    return (
        <>
            <div className="optech-iconbox-wrap style-two border_all">
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
