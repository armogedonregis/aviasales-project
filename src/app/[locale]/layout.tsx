import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/style/globals.css";
import { Footer, Header } from "@/modules/shared/components";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

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
                    <Header />
                    <main className="mb-5">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}