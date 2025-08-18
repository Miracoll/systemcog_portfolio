import Image from "next/image";
import Link from "next/link";

export default function RecentProjectCard2({ data }) {
    return (
        <>
            <div className="optech-portfolio-wrap2">
                <div className="optech-portfolio-thumb2">
                    <Image
                        height="0"
                        width="0"
                        sizes="100vw"
                        src={data.imgUrl}
                        alt="thumb"
                        className="h-auto w-100"
                    />
                </div>
                <div className="optech-portfolio-data2-wrap">
                    <div className="optech-portfolio-data2">
                        <Link href="/single-portfolio">
                            <h4>{data.title}</h4>
                        </Link>
                        <p>{data.category}</p>
                    </div>
                    <Link
                        className="optech-portfolio-btn2"
                        href="/single-portfolio"
                    >
                        <span className="p-btn-wraper">
                            <i className="ri-arrow-right-up-line" />
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
