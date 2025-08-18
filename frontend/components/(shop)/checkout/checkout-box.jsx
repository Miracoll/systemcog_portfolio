import Image from "next/image";
import CheckoutForm from "./ui/checkout-form";
import CheckoutInfo from "./ui/checkout-info";
import Link from "next/link";

export default function CheckoutBox() {
    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-checkout-header">
                        <Image
                            height={20}
                            width={20}
                            priority
                            src="/assets/images/breadcrumb/mark!.svg"
                            alt="mark"
                        />
                        Have a coupon?
                        <Link href="/shop">Click here to enter your code</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/* checkout form start */}
                            <CheckoutForm />
                            {/* checkout form end */}
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            {/* checkout info start */}
                            <CheckoutInfo />
                            {/* checkout info end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
