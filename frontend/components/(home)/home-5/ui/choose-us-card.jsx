import Image from "next/image";
import Link from "next/link";

export default function ChooseUsCard({ data }) {
    return (
        <>
            <div className="optech-iconbox-wrap4">
                <div className="optech-iconbox-icon4">
                    <Image
                        height={49}
                        width={49}
                        priority
                        src={data.iconUrl}
                        alt="icon"
                    />
                </div>
                <div className="optech-iconbox-data4">
                    <h4>{data.title}</h4>
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
