"use client";

import navigation from "@/data/navigation";
import Link from "next/link";

export default function Nav1() {
    return (
        <>
            <ul className="site-menu-main">
                {navigation?.map((item, i) =>
                    item?.children ? (
                        <li key={i} className="nav-item nav-item-has-children">
                            <Link
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="nav-link-item drop-trigger"
                            >
                                {item.label}
                                <i className="ri-arrow-down-s-fill" />
                            </Link>
                            <ul className="sub-menu">
                                {item.children?.map((item2, i2) =>
                                    item2.children ? (
                                        <li
                                            key={i2}
                                            className="sub-menu--item nav-item-has-children"
                                        >
                                            <Link
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                data-menu-get="h3"
                                                className="drop-trigger"
                                            >
                                                {item2.label}
                                                <i className="ri-arrow-down-s-fill" />
                                            </Link>
                                            <ul className="sub-menu shape-none">
                                                {item2.children?.map(
                                                    (item3, i3) => (
                                                        <li
                                                            key={i3}
                                                            className="sub-menu--item"
                                                        >
                                                            <Link
                                                                href={
                                                                    item3.href
                                                                }
                                                            >
                                                                <span className="menu-item-text">
                                                                    {
                                                                        item3.label
                                                                    }
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </li>
                                    ) : (
                                        <li key={i2} className="sub-menu--item">
                                            <Link href={item2.href}>
                                                <span className="menu-item-text">
                                                    {item2.label}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>
                    ) : (
                        <li key={i} className="nav-item">
                            <Link href={item.href} className="nav-link-item">
                                {item.label}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </>
    );
}
