"use client";
import useToggle from "@/hooks/zustand/useToggle";

export default function SearchModal() {
    const { isSearchBarOpen, setSearchBarOpen } = useToggle();

    return (
        <>
            <div
                className={`optech-header-search-section ${
                    isSearchBarOpen ? "open" : ""
                }`}
            >
                <div className="container">
                    <div className="optech-header-search-box">
                        <form action="/">
                            <input type="search" placeholder="Search here..." />
                            <button
                                typeof="submit"
                                id="header-search"
                                type="button"
                            >
                                <i className="ri-search-line" />
                            </button>
                        </form>
                        <p>
                            Type above and press Enter to search. Press Close to
                            cancel.
                        </p>
                    </div>
                </div>
                <div
                    className="optech-header-search-close"
                    onClick={() => setSearchBarOpen(false)}
                >
                    <i className="ri-close-line" />
                </div>
            </div>
        </>
    );
}
