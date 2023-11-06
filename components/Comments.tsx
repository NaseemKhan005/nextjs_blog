import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Comments = () => {
	const status = "authenticated";

	return (
		<div className="flex flex-col gap-5">
			<h2 className="text-xl font-bold">Leave a Reply</h2>
			{status === "authenticated" ? (
				<>
					<Textarea
						placeholder="Write a comment"
						className="focus-visible:ring-[.5px] focus-visible:ring-indigo-600 text-[.8rem]"
					/>
					<div className="flex items-center gap-2 mb-5 md:mb-10">
						<Button size="lg" className="px-7 py-6 dark:text-white">
							Comment
						</Button>
						<Button
							size="lg"
							variant="ghost"
							className="px-9 py-6 bg-muted-foreground/10 hover:bg-muted-foreground/20"
						>
							Cancel
						</Button>
					</div>
				</>
			) : (
				<Link
					href="/login"
					className="text-base bg-indigo-600 text-white hover:bg-indigo-700 animate-bounce px-5 py-4 rounded-lg my-5 w-fit"
				>
					Login to write a comment
				</Link>
			)}

			<div className="flex flex-col gap-5 md:gap-8 mb-5">
				<div>
					<Link
						href={"/profile"}
						className="capitalize flex items-center gap-2 relative hover:text-black/80 dark:hover:text-white/80"
					>
						<Image
							src="/category/1.webp"
							alt="author"
							width={500}
							height={500}
							className="w-10 aspect-square object-cover object-top rounded-full"
						/>
						<div>
							<p className="font-semibold text-sm">Naseem Khan</p>
							<p className="text-xs text-black dark:text-white">Nov 13, 2023</p>
						</div>
					</Link>
					<p className="text-xs sm:text-sm mt-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						explicabo aliquam labore. Veritatis quidem fugiat consectetur non,
						molestias aliquam corporis repudiandae quos tempora id quod, quis
						adipisci, alias nihil maxime?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comments;
