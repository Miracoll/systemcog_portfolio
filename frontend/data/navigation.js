const childenNotInUse = [
    {
        label: "Main Demo",
        href: '/'
    },
    {
        label: "IT Solutions",
        href: "/home-2",
    },
    {
        label: "Tech Agency",
        href: "/home-3",
    },
    {
        label: "Startup Home",
        href: "/home-4",
    },
    {
        label: "IT Consulting",
        href: "/home-5",
    },
    {
        label: "Software Company",
        href: "/home-6",
    },
    {
        label: "Digital Agency",
        href: "/home-7",
    },
    {
        label: "Tech Company",
        href: "/home-8",
    },
]

const blogchildrennotinuse = [
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Blog Grid",
        href: "/blog-grid"
    },
    {
        label: "Blog Details",
        href: "/blog-details",
    },
]

const navigation = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Pages",
        children: [
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "Pricing",
                href: "/pricing",
            },
            {
                label: "Service",
                children: [
                    {
                        label: "Service",
                        href: "/service",
                    },
                    {
                        label: "Service Details",
                        href: "/service-details",
                    },
                ],
            },
            {
                label: "Team",
                children: [
                    {
                        label: "Team",
                        href: "/team",
                    },
                    {
                        label: "Team Details",
                        href: "/team-details",
                    },
                ],
            },
            {
                label: "Utility",
                children: [
                    {
                        label: "Faq",
                        href: "/faq",
                    },
                    {
                        label: "404",
                        href: "/not-found",
                    },
                    {
                        label: "Testimonial",
                        href: "/testimonial",
                    },
                ],
            },
            {
                label: "Shop",
                children: [
                    {
                        label: "Shop",
                        href: "/shop",
                    },
                    {
                        label: "Shop Details",
                        href: "/shop-details/1",
                    },
                    {
                        label: "My Cart",
                        href: "/my-cart",
                    },
                    {
                        label: "Checkout",
                        href: "/checkout",
                    },
                ],
            },
        ],
    },
    {
        label: "Portfolio",
        children: [
            {
                label: "Portfolio Grid",
                href: "/portfolio-grid",
            },
            {
                label: "Portfolio Masonry",
                href: "/portfolio-masonry",
            },
            {
                label: "Single Portfolio",
                href: "/single-portfolio",
            },
        ],
    },
    {
        label: "Blog",
        href: "/blog-grid",
    },
    { label: "Contact", href: "/contact" },
];

export default navigation;
