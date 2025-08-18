"use client";
import SearchModal from "@/components/ui/modals/search-modal";
import useToggle from "@/hooks/zustand/useToggle";
import Nav2 from "./ui/nav-2";
import useSticky from "@/hooks/useSticky";
import TopBar3 from "./ui/top-bar-3";
import Link from "next/link";
import Image from "next/image";
import SidebarModal from "@/components/ui/modals/sidebar-modal";
import MobileSidebarNav from "./mobile-sidebar-nav";

export default function Header3() {
    const { isSearchBarOpen, setSearchBarOpen, setSidebarOpen } = useToggle();

    const isSticky = useSticky();

    return (
        <>
            <header
                className={`site-header optech-header-section site-header--menu-right ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                {/* top bar start */}
                <TopBar3 />
                {/* top bar end */}

                <div className="optech-header-bottom p-0">
                    <div className="container">
                        <div className="header-bottom-border">
                            <nav className="navbar site-navbar">
                                {/* Brand Logo*/}
                                <div className="brand-logo">
                                    <Link href="/home-3">
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
                                    <div className="optech-header-icon">
                                        <div
                                            className="optech-header-search light-color"
                                            onClick={() =>
                                                setSearchBarOpen(true)
                                            }
                                        >
                                            <i className="ri-search-line" />
                                        </div>
                                        <div
                                            onClick={() => setSidebarOpen(true)}
                                            className="optech-header-barger"
                                        >
                                            <span />
                                        </div>
                                    </div>
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
                </div>
            </header>
            {/* search modal start */}
            <SearchModal />
            {/* search modal end */}
            <div
                onClick={() => setSearchBarOpen(false)}
                className={`search-overlay ${isSearchBarOpen ? "open" : ""}`}
            />
            {/* sidebar modal start */}
            <SidebarModal />
            {/* sidebar modal end */}

            {/* mobile nav start */}
            <MobileSidebarNav />
            {/* mobile nav end */}
        </>
    );
}
