"use client";
import Link from "next/link";
import TopBar7 from "./ui/top-bar-7";
import Image from "next/image";
import Nav1 from "./ui/nav-1";
import SearchModal from "@/components/ui/modals/search-modal";
import useToggle from "@/hooks/zustand/useToggle";
import useSticky from "@/hooks/useSticky";
import MobileSidebarNav from "./mobile-sidebar-nav";

export default function Header7() {
    const { isSearchBarOpen, setSearchBarOpen } = useToggle();

    const isSticky = useSticky();

    return (
        <>
            <header
                className={`site-header optech-header-section optech-header-one ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                {/* top bar start */}
                <TopBar7 />
                {/* top bar end */}
                <div className="optech-header-bottom">
                    <div className="container">
                        <div className="optech-header-bottom2">
                            <nav className="navbar site-navbar">
                                {/* Brand Logo*/}
                                <div className="brand-logo">
                                    <Link href="/home-7">
                                        <Image
                                            height={31}
                                            width={128}
                                            priority
                                            src="/assets/images/logo/logo-dark.svg"
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
                                        <Nav1 />
                                        {/* navigation end */}
                                    </nav>
                                </div>
                                <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                                    <div className="optech-header-icon">
                                        <div
                                            onClick={() =>
                                                setSearchBarOpen(true)
                                            }
                                            className="optech-header-search"
                                        >
                                            <i className="ri-search-line" />
                                        </div>
                                        <Link
                                            className="optech-default-btn optech-header-btn"
                                            href="/contact"
                                            data-text="Get in Touch"
                                        >
                                            <span className="btn-wraper">
                                                Get in Touch
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/* mobile menu trigger */}
                                <div
                                    className="mobile-menu-trigger"
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
                </div>
            </header>
            {/* search modal start */}
            <SearchModal />
            {/* search modal end */}
            <div
                onClick={() => setSearchBarOpen(false)}
                className={`search-overlay ${isSearchBarOpen ? "open" : ""}`}
            />
            {/* mobile nav start */}
            <MobileSidebarNav />
            {/* mobile nav end */}
        </>
    );
}
