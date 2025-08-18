"use client";
import Link from "next/link";
import TopBar8 from "./ui/top-bar-8";
import Image from "next/image";
import Nav2 from "./ui/nav-2";
import useSticky from "@/hooks/useSticky";
import MobileSidebarNav from "./mobile-sidebar-nav";

export default function Header8() {
    const isSticky = useSticky();

    return (
        <>
            <header
                className={`site-header optech-header-section site-header--menu-right optech-header-two ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                {/* top bar start */}
                <TopBar8 />
                {/* top bar end */}
                <div className="optech-header-bottom">
                    <div className="container">
                        <nav className="navbar site-navbar">
                            {/* Brand Logo*/}
                            <div className="brand-logo">
                                <Link href="/home-8">
                                    <Image
                                        height={31}
                                        width={128}
                                        priority
                                        src="/assets/images/logo/logo-white.svg"
                                        alt="logo"
                                        className="light-version-logo"
                                    />
                                </Link>
                            </div>
                            <div className="menu-block-wrapper">
                                <div className="menu-overlay" />
                                <nav className="menu-block">
                                    <div className="mobile-menu-head">
                                        <div className="go-back">
                                            <i className="fa fa-angle-left" />
                                        </div>
                                        <div className="current-menu-title" />
                                        <div className="mobile-menu-close">
                                            ×
                                        </div>
                                    </div>
                                    {/* navigation start */}
                                    <Nav2 />
                                    {/* navigation end */}
                                </nav>
                            </div>
                            <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                                <Link
                                    className="optech-default-btn optech-header-btn"
                                    data-text="Get in Touch"
                                    href="/contact"
                                >
                                    <span className="btn-wraper">
                                        Get in Touch
                                    </span>
                                </Link>
                            </div>
                            {/* mobile menu trigger */}
                            <div
                                className="mobile-menu-trigger light-color"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                            >
                                <span />
                            </div>
                            {/*/.Mobile Menu Hamburger Ends*/}
                        </nav>
                    </div>
                </div>
            </header>

            {/* mobile nav start */}
            <MobileSidebarNav />
            {/* mobile nav end */}
        </>
    );
}
