'use client';
import { Link } from '@/lib/i18n/routing';
import { useState } from 'react';

type Category = {
    title: string;
    items: string[];
};

type CategoryProps = {
    categories: Category[];
    isMobile?: boolean;
};

export const CategoryList = ({ categories, isMobile }: CategoryProps) => {
    const [openCategory, setOpenCategory] = useState<number | null>(null);

    const toggleCategory = (index: number) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    if (isMobile) {
        return (
            <>
                {categories.map((category, index) => (
                    <div key={index} className="border-b text-black_primary">
                        <button
                            className="w-full py-3 flex justify-between items-center text-left"
                            onClick={() => toggleCategory(index)}
                        >
                            <span className="font-semibold">{category.title}</span>
                            <span className={`transform transition-transform text-blue_primary ${openCategory === index ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {openCategory === index && (
                            <ul className="py-2">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="py-1">
                                        <Link href="#" className={`text-sm`}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="grid grid-cols-6 gap-8 mb-8 bg-white p-10 rounded-2xl text-blue_primary">
            {categories.map((category, index) => (
                <div key={index}>
                    <h3 className="font-semibold mb-4">{category.title}</h3>
                    <ul>
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-1">
                                <Link href="#" className={`text-sm font-medium`}>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};