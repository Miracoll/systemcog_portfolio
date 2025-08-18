import Copyright1 from "./ui/copyright-1";
import FooterInfo3 from "./ui/footer-info-3";
import FooterMenu7 from "./ui/footer-menu-7";
import WorkTogether from "./ui/work-together";

export default function Footer7() {
    return (
        <>
            <footer className="optech-footer-section optech-section-padding-top">
                {/* work together start */}
                <WorkTogether />
                {/* work together end */}
                <div className="container">
                    <div className="optech-footer-top optech-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                {/* footer info start */}
                                <FooterInfo3 />
                                {/* footer info end */}
                            </div>
                            {/* footer menu start */}
                            <FooterMenu7 />
                            {/* footer menu end */}
                        </div>
                    </div>
                    {/* copyright start */}
                    <Copyright1 />
                    {/* copyright end */}
                </div>
            </footer>
        </>
    );
}
