import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // ShadCN button
import { Plus } from "lucide-react"; // Plus ikonu
import { useState } from "react";

const Home: NextPage = () => {
    const { t } = useTranslation("common");

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = [
        { key: "desserts", title: t("DESSERTS") },
        { key: "drinks", title: t("DRINKS") },
        { key: "snacks", title: t("SNACKS") },
    ];

    const content: Record<string, { title: string; cost: string; image: string }[]> = {
        desserts: [
            { title: t("ChocolateCake"), cost: t("20"), image: "/images/chocolate_cake.jpg" },
            { title: t("Cheesecake"), cost: t("204"), image: "/images/cheesecake.jpg" },
        ],
        drinks: [
            { title: t("Coffee"), cost: t("202"), image: "/images/coffee.jpg" },
            { title: t("Smoothie"), cost: t("202"), image: "/images/smoothie.jpg" },
        ],
        snacks: [
            { title: t("Chips"), cost: t("240"), image: "/images/chips.jpg" },
            { title: t("Popcorn"), cost: t("203"), image: "/images/popcorn.jpg" },
        ],
    };

    return (
        <main className="pt-12 bg-primary-pink">
            <div className="relative h-80 w-full">
                <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3kyNDgxYXlwZ2cyOGxiMG9pdmtnMGdyNzluZG9qMDZlaHVjNWFhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UAzaYopok9PsQ/giphy.gif"
                    alt="Header Image"
                    className="object-cover w-full h-full"
                />
                <div
                    className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] bg-yellow-400 py-4 flex items-center justify-center rounded-lg border-2 border-black shadow-black">
                    <h1 className="text-4xl font-bold text-black">{t("menuHeader")}</h1>
                </div>
            </div>

            <div className="px-5 z-30">

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {categories.map((category) => (
                        <Button
                            key={category.key}
                            variant={activeCategory === category.key ? "default" : "outline"}
                            className="bg-pink-200 text-black text-lg font-bold px-10 py-6 rounded-full border-2 border-black shadow-black shadow-[5px_5px_0px_black] hover:bg-primary-yellow"
                            onClick={() => setActiveCategory(category.key)}
                        >
                            {category.title}
                        </Button>
                    ))}
                </div>

                {activeCategory && content[activeCategory] && (
                    <div className="mt-6 space-y-4 pb-7">
                        {content[activeCategory].map((item, index) => (
                            <div key={index} className="items-center gap-4 bg-white p-4 rounded-lg shadow-md">
                                <div className="relative w-full aspect-square rounded-md overflow-hidden">
                                    <Image
                                        src="https://picsum.photos/seed/picsum/200/300"
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="justify-between items-center flex mt-1">
                                    <div className="flex">
                                        <span className="flex-grow text-lg font-semibold">{item.title}</span>
                                        <div className="flex-grow">
                                            <span className="pl-4 flex-grow text-lg font-semibold">{item.cost}</span>
                                            <span className="flex-grow text-lg font-semibold">$</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="rounded-full">
                                        <Plus size={20}/>
                                    </Button>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", ["common"])),
        },
    };
};

export default Home;
