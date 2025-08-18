import Image from "next/image";
import Link from "next/link";

export default function FooterInfo3() {
    return (
        <>
            <div className="optech-footer-textarea dark-color">
                <Link href="/">
                    <Image
                        height={36}
                        width={150}
                        priority
                        src="/assets/images/logo/logo-dark.svg"
                        alt="logo"
                    />
                </Link>
                <p>
                    Each demo built with Teba will look different. You can
                    customize almost anything in the appearance of your website
                    with only a few
                </p>
                <div className="optech-footer-info dark-color">
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
