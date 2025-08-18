import Copyright3 from "./ui/copyright-3";
import FooterForm from "./ui/footer-form";
import FooterInfo4 from "./ui/footer-info-4";
import FooterMenu5 from "./ui/footer-menu-5";

export default function Footer5() {
    return (
        <>
            <footer className="optech-footer-section footer-v5">
                {/* footer map start */}
                <FooterForm />
                {/* footer map end */}
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
