import Image from "next/image";
import Link from "next/link";

export default function FooterInfo2() {
    return (
        <>
            <div className="optech-footer-textarea light-color">
                <Link href="/home-3">
                    <Image
                        height={36}
                        width={150}
                        priority
                        src="/assets/images/logo/logo-white.svg"
                        alt="logo"
                    />
                </Link>
                <p>
                    Each demo built with Teba will look different. You can
                    customize almost anything in the appearance of your website
                    with only a few
                </p>
                <div className="optech-footer-info">
                    <ul>
                        <li>
                            <Link href="tel:123">
                                <i className="ri-phone-fill" />
                                518-564-3200
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:name@email.com">
                                <i className="ri-mail-fill" />
                                qubohub@example.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
