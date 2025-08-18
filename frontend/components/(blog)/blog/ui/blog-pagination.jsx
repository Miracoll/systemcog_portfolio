import Link from "next/link";

export default function BlogPagination() {
    return (
        <>
            <div className="optech-navigation">
                <nav className="navigation pagination" aria-label="Posts">
                    <div className="nav-links">
                        <Link className="next page-numbers" href="/blog">
                            <i className="ri-arrow-left-s-line" />
                        </Link>
                        <span
                            aria-current="page"
                            className="page-numbers current"
                        >
                            1
                        </span>
                        <Link className="page-numbers" href="/blog">
                            2
                        </Link>
                        <Link className="page-numbers" href="/blog">
                            3
                        </Link>
                        <Link className="next page-numbers" href="/blog">
                            <i className="ri-arrow-right-s-line" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
