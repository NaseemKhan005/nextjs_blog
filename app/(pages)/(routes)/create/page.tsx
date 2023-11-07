"use client";
import { TbPhotoPlus } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import ReactQuill from "react-quill";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Page = () => {
	const [category, setCategory] = useState<string>("");
	const [featuredImage, setFeaturedImage] = useState<string>("");
	const [showImgIcons, setShowImgIcons] = useState(false);
	const [value, setValue] = useState<string>("");

	var toolbarOptions = [
		["bold", "italic", "underline"],
		["blockquote", "code-block"],
		[{ header: 1 }, { header: 2 }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ list: "ordered" }, { list: "bullet" }],
		[{ align: [] }],
		["link", "image"],
	];

	const modules = {
		toolbar: toolbarOptions,
	};

	return (
		<form className="mt-8">
			<div className="flex flex-col gap-5">
				<div>
					<p className="font-[500] mb-2">Featured image</p>
					<div
						onMouseEnter={() => setShowImgIcons(true)}
						onMouseLeave={() => setShowImgIcons(false)}
						className="relative w-full p-1 rounded-2xl border-dashed border-2 border-black/30 hover:border-black/50 hover:border-black dark:hover:border-white/50 dark:border-white/30 h-52 flex flex-col items-center justify-center cursor-pointer"
					>
						<Input
							type="file"
							onChange={() => setFeaturedImage("")}
							accept="image/*"
							className="w-full z-[1] h-full border-none absolute top-0 left-0 cursor-pointer opacity-0"
						/>
						{featuredImage ? (
							<>
								<span className="text-6xl text-neutral-300 dark:text-neutral-500">
									<TbPhotoPlus />
								</span>
								<p className="text-indigo-600 dark:text-indigo-500 font-[500] text-sm">
									Upload a file
								</p>
								<p className="text-neutral-400 text-[.8rem]">
									PNG, JPG, GIF, WEBP, SVG ...
								</p>
							</>
						) : (
							<div className="w-full h-full relative">
								<Image
									src={"/category/5.webp"}
									alt="featured image"
									width={500}
									height={500}
									className="w-full h-full object-cover object-center rounded-xl"
								/>
								<div
									className={cn(
										"flex items-center gap-2 absolute top-3 right-3 text-white",
										showImgIcons ? "flex" : "md:hidden"
									)}
								>
									<FiEdit className="text-3xl p-[.4rem] bg-black/90 rounded-md" />
									<BiTrash
										onClick={() => setFeaturedImage("")}
										className="text-3xl p-[.4rem] bg-black/90 rounded-md z-[2]"
									/>
								</div>
							</div>
						)}
					</div>
				</div>

				<div>
					{category.length ? (
						<Dialog>
							<DialogTrigger className="flex items-center gap-2 text-neutral-500 hover:text-neutral-700 dark:text-white/60 dark:hover:text-white/80 cursor-pointer focus-visible:outline-none">
								<span className="text-2xl">
									<AiOutlinePlusCircle />
								</span>
								<p className="text-lg">Add Category</p>
							</DialogTrigger>
							<DialogContent className="w-[90%] sm:w-96 rounded-lg dark:bg-dark-color">
								<DialogHeader>
									<DialogTitle className="text-xl md:text-2xl border-b dark:border-white/30 pb-2 mb-2">
										Categories
									</DialogTitle>
									<DialogDescription className="flex items-center gap-2 flex-wrap">
										<DialogPrimitive.Close>
											<Button
												onClick={(e) => setCategory("")}
												className="capitalize bg-muted-foreground/5 hover:bg-muted-foreground/10 focus-visible:bg-muted-foreground/20 text-black dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
											>
												technology
											</Button>
										</DialogPrimitive.Close>
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					) : (
						<Button className="capitalize bg-muted-foreground/5 hover:bg-muted-foreground/10 focus-visible:bg-muted-foreground/20 text-black dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
							technology
							<IoClose
								onClick={() => setCategory("")}
								className="text-lg ml-[1px]"
							/>
						</Button>
					)}
				</div>

				<div>
					<Input
						type="text"
						placeholder="New post title here..."
						className="border-none outline-none bg-transparent hover:bg-transparent focus-within:bg-transparent focus-visible:bg-transparent dark:focus-visible:bg-transparent dark:hover:bg-transparent font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] dark:placeholder:text-white/40 h-fit p-0"
					/>
				</div>
				<div className="h-80 my-5 text-2xl relative">
					<ReactQuill
						modules={modules}
						theme="snow"
						value={value}
						onChange={setValue}
						className="h-full placeholder:text-2xl rounded-lg border-none"
					/>
					<p
						className={cn(
							"absolute top-[5.8rem] sm:top-[3.6rem] left-4 text-base -z-[1] text-black/60 dark:text-white/50",
							value.length ? "hidden" : "block"
						)}
					>
						Write your post content here...
					</p>
				</div>
				<Button className="sm:w-fit sm:mt-8 mt-16 dark:text-white">
					Publish
				</Button>
			</div>
		</form>
	);
};

export default Page;
