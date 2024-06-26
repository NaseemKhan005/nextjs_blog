import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
	link: String;
	imgSrc: String;
	name: String;
	bgColor?: String;
}

const Category = ({ link, imgSrc, name, bgColor }: CategoryProps) => {
	return (
		<Link
			href={`${link}`}
			className={cn(
				"lg:w-full flex items-center justify-center gap-3 capitalize bg-indigo-500/10 dark:bg-indigo-500/40 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 rounded-md py-3 lg:py-4 px-8 lg:px-5",
				bgColor
			)}
		>
			<Image
				src={`${imgSrc}`}
				alt="category image"
				width={32}
				height={32}
				className="rounded-full w-9 h-9 object-cover object-center"
			/>
			<span>{name}</span>
		</Link>
	);
};

const CategoryList = () => {
	return (
		<div className="flex flex-col gap-8">
			<h2 className="text-2xl font-semibold font-serif">Popular Categories👑</h2>

			<div className="overflow-x-auto w-full pb-1 category">
				<div className="flex items-center justify-between gap-3 md:gap-5 text-sm">
					<Category link={"/"} imgSrc="/category/1.webp" name="technology" />
					<Category
						link={"/"}
						imgSrc="/category/2.webp"
						name="coding"
						bgColor="bg-orange-500/10 dark:bg-orange-500/40"
					/>
					<Category
						link={"/"}
						imgSrc="/category/3.webp"
						name="style"
						bgColor="bg-green-500/10 dark:bg-green-500/40"
					/>
					<Category
						link={"/"}
						imgSrc="/category/4.webp"
						name="fashion"
						bgColor="bg-sky-500/10 dark:bg-sky-500/40"
					/>
					<Category
						link={"/"}
						imgSrc="/category/5.webp"
						name="food"
						bgColor="bg-fuchsia-500/10 dark:bg-fuchsia-500/40"
					/>
					<Category
						link={"/"}
						imgSrc="/category/6.webp"
						name="travel"
						bgColor="bg-zinc-500/10 dark:bg-zinc-500/40"
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
