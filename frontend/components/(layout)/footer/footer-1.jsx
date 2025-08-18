import Copyright1 from "./ui/copyright-1";
import FooterInfo1 from "./ui/footer-info-1";
import FooterMenu1 from "./ui/footer-menu-1";

export default function Footer1() {
    return (
        <>
            <footer className="optech-footer-section">
                <div className="container">
                    <div className="optech-footer-top optech-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                {/* footer info start */}
                                <FooterInfo1 />
                                {/* footer info end */}
                            </div>
                            {/* footer menu start */}
                            <FooterMenu1 />
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
