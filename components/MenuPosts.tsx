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
		<Link href={"/"} className="flex items-start gap-5 overflow-hidden">
			<Image
				src={`/featured.webp`}
				alt="category image"
				width={32}
				height={32}
				className="rounded-lg w-32 aspect-square object-cover object-top hover:scale-110 transition-all"
			/>
			<div className="flex items-start gap-1 flex-col">
				<h2 className="font-semibold">
					Take a 3D tour through a Microsoft datacenter?
				</h2>
				<Link
					href={"/category"}
					className="bg-zinc-500/10 hover:bg-zinc-500/20 dark:bg-white dark:text-black hover:dark:bg-white/90 rounded-full text-[.6rem] w-fit py-[.3rem] px-2 uppercase tracking-widest font-[500]"
				>
					coding
				</Link>
				{/* <PublishDate author={author} date={date} /> */}
				<PublishDate
					author="by Naseem khan"
					date="December 16, 2023"
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
