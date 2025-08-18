import ShopDetail from "./ui/shop-detail";
import ShopProductGallery from "./ui/shop-product-gallery";

export default function ShopInfo({ paramId }) {
    return (
        <>
            <div className="section optech-section-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* product gallery start */}
                            <ShopProductGallery paramId={paramId} />
                            {/* product gallery end */}
                        </div>
                        <div className="col-lg-6">
                            {/* shop detail start */}
                            <ShopDetail paramId={paramId} />
                            {/* shop detail end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
