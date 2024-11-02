import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/style/globals.css";
import localFont from 'next/font/local'
import { Footer, Header } from "@/modules/shared/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { TrySkyProvider } from "@/modules/shared/components/trySky/trySkyContext";
import TrySkyIntro from "@/modules/shared/components/trySky/trySkyIntro";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const gaultier = localFont({
    src: [
        {
            path: '../../style/font/Gaultier-Light.otf',
            weight: '450',
            style: 'normal',
        },
        {
            path: '../../style/font/Gaultier-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../style/font/Gaultier-SemiBold.otf',
            weight: '550',
            style: 'normal',
        },
        {
            path: '../../style/font/Gaultier-Heavy.otf',
            weight: '650',
            style: 'normal',
        }
    ],
    variable: '--font-gaultier',
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Skypass",
    description: "Book flights and hotels",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const messages = await getMessages();

    return (
        <html className={gaultier.className}>
            <body className="transition-colors duration-300 bg-gradient-main">
                <NextIntlClientProvider messages={messages}>
                    <TrySkyProvider>
                        <div className="flex flex-col min-h-screen">
                            <div className={`transition-colors duration-300`}>
                                <Header />
                                <TrySkyIntro />
                            </div>
                            <main className="mb-5 flex-1 flex flex-col">{children}</main>
                            <Footer />
                        </div>
                    </TrySkyProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}