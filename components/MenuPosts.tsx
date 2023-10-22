import Link from "next/link";
import Image from "next/image";

import MenuTitle from "@/components/MenuTitle";
import PublishDate from "./PublishDate";

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

const MenuPosts = ({
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
			<MenuTitle
				title={title}
				desc={desc}
				additionalClasses="font-serif underline underline-offset-4"
			/>

			<div className="flex flex-col gap-5">
				<Link
					href={`${link}`}
					className="flex items-start gap-3 lg:gap-5 overflow-hidden"
				>
					<Image
						src={`${imgSrc}`}
						alt="category image"
						width={500}
						height={500}
						className="rounded-lg w-24 lg:w-28 aspect-square object-cover object-top"
					/>
					<div className="flex items-start gap-1 flex-col">
						<h2 className="font-semibold lg:text-base md:text-sm leading-tight font-serif hover:text-indigo-600 dark:hover:text-indigo-500">
							{postTitle}
						</h2>
						<Link
							href={"/category"}
							className="rounded-full text-[.5rem] lg:text-[.6rem] w-fit lg:py-[.3rem] px-2 py-1 uppercase tracking-widest font-[500] bg-indigo-500/80 hover:bg-indigo-600 border border-indigo-600 text-white"
						>
							{category}
						</Link>
						<PublishDate
							author={author}
							date={date}
							additionalClasses="bg-dark-color dark:bg-white"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MenuPosts;
