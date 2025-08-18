export default function BlogSearch() {
    return (
        <>
            <div className="optech-blog-widgets">
                <h5>Search</h5>
                <form>
                    <div className="optech-search-box">
                        <input type="search" placeholder="Type to search..." />
                        <button id="optech-search-btn" type="button">
                            <i className="ri-search-line" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
