import Copyright2 from "./ui/copyright-2";
import FooterInfo2 from "./ui/footer-info-2";
import FooterMenu3 from "./ui/footer-menu-3";
import WorkTogether from "./ui/work-together";

export default function Footer3() {
    return (
        <>
            <footer className="optech-footer-section dark-bg optech-section-padding-top">
                {/* work together start */}
                <WorkTogether />
                {/* work together end */}
                <div className="container">
                    <div className="optech-footer-top optech-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                {/* footer info start */}
                                <FooterInfo2 />
                                {/* footer info end */}
                            </div>
                            {/* footer menu start */}
                            <FooterMenu3 />
                            {/* footer menu end */}
                        </div>
                    </div>

                    {/* copyright start */}
                    <Copyright2 />
                    {/* copyright end */}
                </div>
            </footer>
        </>
    );
}
