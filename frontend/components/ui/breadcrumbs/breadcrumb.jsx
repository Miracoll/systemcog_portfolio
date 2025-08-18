import Link from "next/link";

export default function Breadcrumb({ title, path = [] }) {
    return (
        <>
            <div
                className="optech-breadcrumb"
                style={{
                    backgroundImage:
                        "url(/assets/images/breadcrumb/breadcrumb.png)",
                }}
            >
                <div className="container">
                    <h1 className="post__title">{title}</h1>
                    <nav className="breadcrumbs">
                        <ul>
                            {path?.map((item, i) => (
                                <li key={i}>
                                    {item.link ? (
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    ) : (
                                        item.title
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
