"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import PostSocailLinks from "./PostSocailLinks";
import PostReactions from "./PostReactions";
import { cn } from "@/lib/utils";

interface PostCardProps {
	link: String;
	imgSrc: String;
	category: String;
	title: String;
	desc: String;
	author: String;
	date: String;
	like: number;
	comment: number;
}

const PostCard = ({
	link,
	imgSrc,
	category,
	title,
	desc,
	author,
	date,
	like,
	comment,
}: PostCardProps) => {
	const [showIcons, setShowIcons] = useState(false);

	return (
		<div
			onMouseEnter={() => setShowIcons(true)}
			onMouseLeave={() => setShowIcons(false)}
		>
			<Link
				href={`${link}`}
				className={cn("relative", showIcons ? "shadow-xl" : "")}
			>
				<div className="relative overflow-hidden mb-5 rounded-2xl">
					<Image
						src={`${imgSrc}`}
						alt="latest post"
						width={500}
						height={500}
						className={cn(
							"object-cover w-full h-full rounded-2xl transition-all duration-500",
							showIcons ? "scale-110" : "scale-100"
						)}
					/>
					<Link
						href={"/category"}
						className="capitalize absolute lg:top-3 lg:left-3 top-2 left-2 bg-indigo-500/90 hover:bg-indigo-600 border border-indigo-600 text-white rounded-full py-1 px-2 text-[.65rem] lg:text-xs font-semibold"
					>
						{category}
					</Link>

					<PostSocailLinks
						showIcons={showIcons}
						facebookLink={"/"}
						instagramLink={"/"}
						linkedinLink={"/"}
						pinterestLink={"/"}
						twitterLink={"/"}
						hideIconsClass="-bottom-10 opacity-0"
						showIconsClass="bottom-0 opacity-100"
						wrapperClasses={cn(
							"flex items-center justify-center text-[1.4rem] gap-8 absolute bg-white py-4 left-0 text-indigo-600 transition-all duration-500 w-full rounded-bl-2xl rounded-br-2xl",
							showIcons ? "border dark:border-none" : ""
						)}
					/>
				</div>

				<div className="flex flex-col gap-3">
					<h2
						className={cn(
							"text-base xl:text-lg font-semibold leading-tight",
							showIcons ? "text-indigo-600 dark:text-indigo-500" : ""
						)}
					>
						{title}
					</h2>
					<p className="text-sm">{desc}</p>
					<Link
						href={"/profile"}
						className="capitalize flex items-center gap-2 relative hover:text-black/80 dark:hover:text-white/80"
					>
						<Image
							src="/category/1.webp"
							alt="author"
							width={500}
							height={500}
							className={cn(
								"w-10 aspect-square object-cover object-top rounded-full"
							)}
						/>
						<div>
							<p className="font-semibold text-sm">{author}</p>
							<p className="text-xs text-black dark:text-white">{date}</p>
						</div>
					</Link>
				</div>
			</Link>

			<PostReactions like={like} comment={comment} />
		</div>
	);
};

export default PostCard;
