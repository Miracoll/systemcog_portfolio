import Copyright1 from "./ui/copyright-1";
import FooterInfo3 from "./ui/footer-info-3";
import FooterMenu4 from "./ui/footer-menu-4";

export default function Footer4() {
    return (
        <>
            <footer className="optech-footer-section bg-light1">
                <div className="container">
                    <div className="optech-footer-top optech-section-padding">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12">
                                {/* footer info start */}
                                <FooterInfo3 />
                                {/* footer info end */}
                            </div>
                            {/* footer menu start */}
                            <FooterMenu4 />
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
