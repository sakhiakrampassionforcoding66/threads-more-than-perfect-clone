import { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import '../globals.css';
import { ClerkProvider } from "@clerk/nextjs";

export const metadata : Metadata = {
    title: "Threads | Auth",
    description: "A quick test into fullstack development with Next.js and MongoDB",
};

const inter = Inter({ subsets: ["latin"] });

export default function Rootlayout({
     children
} : {
    children : React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}
