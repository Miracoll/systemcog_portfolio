import Copyright3 from "./ui/copyright-3";
import FooterInfo4 from "./ui/footer-info-4";
import FooterMenu5 from "./ui/footer-menu-5";

export default function Footer8() {
    return (
        <>
            <footer className="optech-footer-section dark-bg">
                <div className="container">
                    <div className="optech-footer-top optech-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                {/* footer info start */}
                                <FooterInfo4 />
                                {/* footer info end */}
                            </div>
                            {/* footer menu start */}
                            <FooterMenu5 />
                            {/* footer menu end */}
                        </div>
                    </div>
                    {/* copyright start */}
                    <Copyright3 />
                    {/* copyright end */}
                </div>
            </footer>
        </>
    );
}
