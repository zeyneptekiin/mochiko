"use client";

import { useAuthStore } from "../store/authStore";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
    const { name } = useAuthStore();
    const { t } = useTranslation("common");

    return (
        <nav className="bg-primary-yellow text-white fixed w-full h-12 px-3 flex items-center z-20 shadow-black shadow-[1px_1px_10px_black]">
            <div className="max-w-7xl mx-auto flex justify-between w-full">
                <span className="font-bold text-black my-auto">
                    {name ? `${t("welcomeMessage")}` : ""}
                </span>
                <Button variant="ghost" className="text-black font-bold">
                    <Image
                        src="/icons/OrderPurchaseIcon.png"
                        alt="Menu Icon"
                        width={24}
                        height={24}
                    />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-black font-bold">
                            <Image
                                src="/icons/MenuIcon.png"
                                alt="Menu Icon"
                                width={20}
                                height={20}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="!w-full">
                        <DropdownMenuItem>
                            <Link href="/aboutus" className="flex items-center gap-2">
                                <p> {t("About Us")} </p>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/orders" className="flex items-center gap-2">
                                {t("orders")}
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
