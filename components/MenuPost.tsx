import Link from "next/link";
import Image from "next/image";

import MenuTitle from "@/components/MenuTitle";
import PublishDate from "./PublishDate";
import { cn } from "@/lib/utils";

interface MenuPostProps {
	title: String;
	desc: String;
	link: String;
	imgSrc: String;
	postTitle: String;
	category: String;
	author: String;
	date: String;
}

const MenuPost = ({
	title,
	desc,
	link,
	imgSrc,
	postTitle,
	category,
	author,
	date,
}: MenuPostProps) => {
	return (
		<div>
			<MenuTitle title={title} desc={desc} additionalClasses="text-xl" />

			<div className="flex flex-col gap-5">
				<Link
					href={`${link}`}
					className="flex items-start gap-3 overflow-hidden"
				>
					<Image
						src={`${imgSrc}`}
						alt="category image"
						width={500}
						height={500}
						className="rounded-lg w-20 lg:w-24 aspect-square object-cover object-top"
					/>
					<div className="flex items-start gap-1 lg:gap-2 flex-col">
						<h2 className="font-semibold text-sm leading-tight hover:text-indigo-600 dark:hover:text-indigo-500">
							{postTitle}
						</h2>
						<p className="text-sm mt-4 capitalize text-neutral-700 dark:text-white/90">{date}</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MenuPost;
