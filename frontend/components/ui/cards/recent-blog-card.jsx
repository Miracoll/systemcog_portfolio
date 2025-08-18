import Image from "next/image";
import Link from "next/link";

export default function RecentBlogCard({ data }) {
    return (
        <>
            <div className="optech-blog-wrap">
                <Link href="/blog-details">
                    <div className="optech-blog-thumb">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            priority
                            src={data.imgUrl}
                            alt="thumb"
                        />
                    </div>
                </Link>
                <div className="optech-blog-content reduced-padding">
                    <div className="optech-blog-meta">
                        <ul>
                            <li>
                                <Link href="/blog-details">
                                    {data.category}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">{data.date}</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/blog-details">
                        <h4>{data.title}</h4>
                    </Link>
                    <Link className="optech-icon-btn" href="/blog-details">
                        <i className="icon-show ri-arrow-right-line" />
                        <span>Learn More</span>
                        <i className="icon-hide ri-arrow-right-line" />
                    </Link>
                </div>
            </div>
        </>
    );
}
