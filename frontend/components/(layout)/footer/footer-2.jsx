import Copyright2 from "./ui/copyright-2";
import FooterContact1 from "./ui/footer-contact-1";
import FooterMenu2 from "./ui/footer-menu-2";

export default function Footer2() {
    return (
        <>
            <footer className="optech-footer-section dark-bg optech-section-padding-top">
                <div className="container">
                    {/* footer contact start */}
                    <FooterContact1 />
                    {/* footer contact end */}

                    {/* footer menu start */}
                    <FooterMenu2 />
                    {/* footer menu end */}

                    {/* copyright start */}
                    <Copyright2 />
                    {/* copyright end */}
                </div>
            </footer>
        </>
    );
}
