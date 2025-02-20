"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuthStore } from "./store/authStore";
import { useTranslation } from "next-i18next";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { name, setName } = useAuthStore();
    const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation("common");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() !== "") {
            setSubmitted(true);
        }
    };

    if (!submitted || !name) {
        return (
            <div className="relative h-screen w-screen flex flex-col items-center justify-center primary-yelow">
                <div className="absolute bg-primary-yellow h-screen w-screen"/>
                <div className="absolute inset-0 w-[90%] h-[95%] mx-auto my-auto">
                    <img
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpnZGJ6a2Y4MTVzeDEyeWtwc3R1bzBwOHMweHdweTZocDFraGEyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjagU0ONoQwCc/giphy.gif"
                        alt="Header Image"
                        className="object-cover w-full h-full"
                    />
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="relative flex flex-col gap-4 p-4 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg z-10"
                >
                <p className="text-xl font-semibold text-center">{t("welcomeMessage")}</p>
                    <label className="text-md font-semibold text-gray-500">
                        {t("enterNameLabel")}
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded-md"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary-yellow text-black font-bold px-4 py-2 rounded-md border-2 border-black shadow-black shadow-[5px_5px_0px_black]"
                    >
                        {t("continueButton")}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="relative">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
