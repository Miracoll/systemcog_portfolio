import Copyright4 from "./ui/copyright-4";
import FooterContact2 from "./ui/footer-contact-2";
import FooterMenu6 from "./ui/footer-menu-6";

export default function Footer6() {
    return (
        <>
            <footer className="optech-footer-section optech-section-padding-top">
                <div className="container">
                    {/* footer contact start */}
                    <FooterContact2 />
                    {/* footer contact end */}

                    {/* footer menu start */}
                    <FooterMenu6 />
                    {/* footer menu end */}

                    {/* copyright start */}
                    <Copyright4 />
                    {/* copyright end */}
                </div>
            </footer>
        </>
    );
}
