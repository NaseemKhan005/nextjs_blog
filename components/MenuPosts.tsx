import Link from "next/link";
import Image from "next/image";

import MenuTitle from "@/components/MenuTitle";
import PublishDate from "./PublishDate";

// interface MenuTitleProps {
// 	title: String;
// 	desc: String;
// }

const Post = () => {
	return (
		<Link
			href={"/"}
			className="flex items-start gap-3 lg:gap-5 overflow-hidden"
		>
			<Image
				src={`/featured.webp`}
				alt="category image"
				width={32}
				height={32}
				className="rounded-lg w-32 aspect-square object-cover object-top hover:scale-110 transition-all"
			/>
			<div className="flex items-start gap-1 flex-col">
				<h2 className="font-semibold lg:text-base md:text-sm leading-tight">
					Take a 3D tour through a Microsoft datacenter?
				</h2>
				<Link
					href={"/category"}
					className="rounded-full text-[.5rem] lg:text-[.6rem] w-fit lg:py-[.3rem] px-2 py-1 uppercase tracking-widest font-[500] bg-indigo-500/60 hover:bg-indigo-600 border border-indigo-600 text-white"
				>
					coding
				</Link>
				{/* <PublishDate author={author} date={date} /> */}
				<PublishDate
					author="Naseem khan"
					date="Dece 16, 2023"
					additionalClasses="bg-dark-color dark:bg-white"
				/>
			</div>
		</Link>
	);
};

const MenuPosts = () => {
	return (
		<div>
			<MenuTitle title="Popular posts" desc="what's hot🔥" />

			<div className="flex flex-col gap-5">
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default MenuPosts;
