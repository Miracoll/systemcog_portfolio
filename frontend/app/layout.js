import Providers from "./providers";
import "./globals.css";
import { sora } from "./fonts";

export const metadata = {
    title: {
        template: "Optech %s - IT Solution & Technology Theme",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={``}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
