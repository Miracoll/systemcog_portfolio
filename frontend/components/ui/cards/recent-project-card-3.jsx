import Image from "next/image";
import Link from "next/link";

export default function RecentProjectCard3({ data }) {
    return (
        <>
            <div className="optech-portfolio-wrap mb-0">
                <div className="optech-portfolio-thumb">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src={data.imgUrl}
                        alt="thumb"
                        className="h-auto w-100"
                    />
                    <Link
                        className="optech-portfolio-btn p-0"
                        href="/single-portfolio"
                    >
                        <span className="p-btn-wraper">
                            <i className="ri-arrow-right-up-line" />
                        </span>
                    </Link>
                    <div className="optech-portfolio-data">
                        <Link href="/single-portfolio">
                            <h4>{data.title}</h4>
                        </Link>
                        <p>{data.category}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
