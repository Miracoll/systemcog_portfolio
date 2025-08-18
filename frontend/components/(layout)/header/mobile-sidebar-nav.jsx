"use client";
import navigation from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function MobileSidebarNav() {
    return (
        <>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <div
                            className="brand-logo"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            <Link href="/">
                                <Image
                                    height={31}
                                    width={128}
                                    priority
                                    src="/assets/images/logo/logo-dark.svg"
                                    alt="logo"
                                    className="light-version-logo"
                                />
                            </Link>
                        </div>
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <Sidebar>
                        <Menu>
                            {navigation?.map((item, i) =>
                                item.children ? (
                                    <SubMenu key={i} label={item.label}>
                                        {item.children.map((item2, i2) =>
                                            item2.children ? (
                                                <SubMenu
                                                    key={i2}
                                                    label={item2.label}
                                                >
                                                    {item2.children.map(
                                                        (item3, i3) => (
                                                            <MenuItem
                                                                component={
                                                                    <Link
                                                                        href={
                                                                            item3.href
                                                                        }
                                                                    />
                                                                }
                                                                key={i3}
                                                            >
                                                                <div
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#offcanvasExample"
                                                                    aria-controls="offcanvasExample"
                                                                >
                                                                    {
                                                                        item3.label
                                                                    }
                                                                </div>
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </SubMenu>
                                            ) : (
                                                <MenuItem
                                                    component={
                                                        <Link
                                                            href={item2.href}
                                                        />
                                                    }
                                                    key={i2}
                                                >
                                                    <div
                                                        data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasExample"
                                                        aria-controls="offcanvasExample"
                                                    >
                                                        {item2.label}
                                                    </div>
                                                </MenuItem>
                                            )
                                        )}
                                    </SubMenu>
                                ) : (
                                    <MenuItem
                                        component={<Link href={item.href} />}
                                        key={i}
                                    >
                                        <div
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasExample"
                                            aria-controls="offcanvasExample"
                                        >
                                            {item.label}
                                        </div>
                                    </MenuItem>
                                )
                            )}
                        </Menu>
                    </Sidebar>
                </div>
            </div>
        </>
    );
}
