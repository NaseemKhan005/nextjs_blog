"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import PublishDate from "./PublishDate";
import PostSocailLinks from "./PostSocailLinks";
import PostReactions from "./PostReactions";

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

const SinglePostCard = ({
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
			<Link href={`${link}`} className="relative">
				<div className="relative overflow-hidden mb-5">
					<Image
						src={`${imgSrc}`}
						alt="latest post"
						width={500}
						height={500}
						className="object-cover w-full h-full rounded-2xl"
					/>
					<Link
						href={"/category"}
						className="capitalize absolute lg:top-3 lg:left-3 top-2 left-2 bg-indigo-500/60 hover:bg-indigo-600 border border-indigo-600 text-white rounded-full py-1 px-2 text-[.65rem] lg:text-xs font-semibold"
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
						wrapperClasses="flex items-center justify-center text-[1.4rem] gap-8 absolute bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100/20 py-4 left-0 text-indigo-600 transition-all duration-500 w-full rounded-bl-2xl rounded-br-2xl"
					/>
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="text-lg font-semibold leading-tight">{title}</h2>
					<p className="text-sm">{desc}</p>
					<PublishDate
						author={author}
						date={date}
						additionalClasses="bg-dark-color dark:bg-white w-1"
					/>
				</div>
			</Link>

			<PostReactions like={like} comment={comment} />
		</div>
	);
};

export default SinglePostCard;
