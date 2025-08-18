import Image from "next/image";
import Link from "next/link";

export default function AwesomeServiceCard({ data }) {
    return (
        <>
            <div className="optech-service-box">
                <div className="optech-service-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        priority
                        src={data.imgUrl}
                        alt="thumb"
                        className="h-auto w-100"
                    />
                    <div className="optech-service-data">
                        <div className="optech-service-icon">
                            <Image
                                height={36}
                                width={36}
                                priority
                                src={data.iconUrl}
                                alt="icon"
                            />
                        </div>
                        <Link href="/service-details">
                            <h5>
                                IT Management <br /> Service
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
