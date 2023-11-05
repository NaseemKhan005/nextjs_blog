"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import MenuTitle from "@/components/MenuTitle";
import { cn } from "@/lib/utils";

interface CategoryProps {
	link: String;
	name: String;
	imgSrc: String;
}

const Category = ({ link, name, imgSrc }: CategoryProps) => {
	const [hoverImg, setHoverImg] = useState(false);

	return (
		<Link
			href={`${link}`}
			onMouseEnter={() => setHoverImg(true)}
			onMouseLeave={() => setHoverImg(false)}
			className="font-semibold text-lg text-white capitalize w-full p-8 flex items-center h-20 rounded-lg mb-1 relative bg-black/30 overflow-hidden"
		>
			<Image
				src={`${imgSrc}`}
				alt="category image"
				width={500}
				height={500}
				className={cn(
					"w-full h-full object-cover object-center absolute left-0 top-0 -z-[1] rounded-lg transition-all duration-500",
					hoverImg ? "scale-125" : "scale-100"
				)}
			/>
			{name}
		</Link>
	);
};

const AllCategories = () => {
	return (
		<div>
			<MenuTitle
				title="Categories"
				desc="Discover by topics"
				additionalClasses="text-xl"
			/>

			<div className="flex items-center flex-col gap-0.5">
				<Category
					imgSrc="/category/1.webp"
					link="/category"
					name="technology"
				/>
				<Category imgSrc="/category/2.webp" link="/category" name="fashion" />
				<Category imgSrc="/category/3.webp" link="/category" name="style" />
				<Category imgSrc="/category/4.webp" link="/category" name="tarvel" />
				<Category imgSrc="/category/5.webp" link="/category" name="coding" />
				<Category imgSrc="/category/6.webp" link="/category" name="journey" />
			</div>
		</div>
	);
};

export default AllCategories;
