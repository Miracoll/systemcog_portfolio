import ServiceCategory from "./ui/service-category";
import SidebarContact from "../../ui/cards/sidebar-contact";

export default function ServiceSidebar() {
    return (
        <>
            <div className="optech-service-sidebar">
                {/* service category start */}
                <ServiceCategory />
                {/* service category end */}

                {/* service contact start */}
                <SidebarContact />
                {/* service contact end */}
            </div>
        </>
    );
}
