import Image from "next/image";
import Link from "next/link";
import React from "react";

import Menu from "@/components/Menu";
import Pagination from "@/components/Pagination";
import PostReactions from "@/components/PostReactions";

const page = () => {
	return (
		<div className="flex flex-col gap-10 md:gap-16">
			<div className="relative w-full h-40 md:h-52">
				<div className="flex flex-col gap-4 rounded-lg bg-black/50 items-center justify-center w-full h-full text-white">
					<h2 className="text-4xl md:text-5xl capitalize font-semibold">
						style
					</h2>
					<p className="capitalize text-center text-sm">
						<Link href={"/"} className="hover:text-rose-200">
							home
						</Link>{" "}
						/ style
					</p>
				</div>
				<Image
					src={"/category/1.webp"}
					alt="category image"
					width={500}
					height={500}
					className="w-full rounded-lg h-full -z-[1] absolute top-0 left-0 object-cover object-center"
				/>
			</div>

			<div className="flex items-start flex-col lg:flex-row gap-10 md:gap-5 xl:gap-10">
				<div className="flex lg:flex-[2] flex-col gap-5 xl:gap-8">
					<Link
						href={"/single-post"}
						className="flex flex-col md:flex-row items-start gap-5 md:gap-4 lg:gap-8"
					>
						<Image
							src={"/category/1.webp"}
							alt="category image"
							width={500}
							height={500}
							className="w-full md:w-1/3 lg:w-[40%] h-full rounded-lg object-cover object-center"
						/>
						<div className="flex flex-col gap-2">
							<div className="capitalize flex items-center gap-1 text-sm mb-1">
								<p className="text-black dark:text-white">nov 19, 2023</p>
								{"-"}
								<p className="text-indigo-600 font-[500]">technology</p>
							</div>
							<h2 className="text-lg xl:text-xl hover:text-indigo-600 font-semibold">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h2>
							<p className="text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
								quisquam, eum debitis blanditiis porro dignissimos vero, modi
								earum corrupti quis et sint dolor reprehenderit aspernatur
								impedit? Ab atque iure perferendis!
							</p>
							<PostReactions like={10} comment={20} />
						</div>
					</Link>
					<Pagination />
				</div>

				<div className="w-full lg:flex-[.9]">
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default page;
