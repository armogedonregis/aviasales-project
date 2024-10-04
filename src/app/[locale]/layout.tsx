import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/style/globals.css";
import { Footer, Header } from "@/modules/shared/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { TrySkyProvider } from "@/modules/shared/components/trySky/trySkyContext";
import TrySkyIntro from "@/modules/shared/components/trySky/trySkyIntro";

const inter = Inter({
    subsets: ['latin'],
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
        <html className={inter.className}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <TrySkyProvider>
                        <div className="flex flex-col min-h-screen">
                            <Header />
                            <TrySkyIntro />
                            <main className="mb-5 flex-1 flex flex-col">{children}</main>
                            <Footer />
                        </div>
                    </TrySkyProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}