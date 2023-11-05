import Menu from "@/components/Menu";
import PublishDate from "@/components/PublishDate";
import SinglePostCard from "@/components/PostCard";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMessage } from "react-icons/ai";

const SinglePage = () => {
	return (
		<div>
			<div className="flex items-start flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 mt-10">
				<div className="flex-[2] w-full flex flex-col gap-6">
					<div className="text-dark-color/60 text-xs md:text-[.65rem] lg:text-xs font-[500] dark:text-white/70 flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2 break-words leading-5">
						<p>
							Naseem Khan <span>/</span>{" "}
							<Link href={"/category"}>Technology</Link> <span>/</span> Take a
							3D tour through a Microsoft datacenter?
						</p>
					</div>

					<h1 className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] text-dark-color dark:text-white first-letter:capitalize font-extrabold">
						Take a 3D tour through a Microsoft datacenter?
					</h1>
					<div className="flex items-center justify-between w-full">
						<div className="flex items-center gap-1 sm:gap-[.6rem] lg:gap-5 capitalize text-zinc-500/80 dark:text-white/70 text-xs sm:text-[.8rem] font-[500]">
							<Image
								src={`/category/3.webp`}
								alt="author"
								width={500}
								height={500}
								className={cn(
									"object-cover w-9 sm:w-10 aspect-square rounded-full transition-all duration-500"
								)}
							/>
							<h3 className="">Naseem khan</h3>
							<span className="block bg-indigo-600 w-1 aspect-square rounded-full" />
							<Link href={"/category"} className="hover:text-indigo-600">
								trending
							</Link>
							<span className="block bg-indigo-600 w-1 aspect-square rounded-full" />
							<p className="">june 24, 2023</p>
							<span className="block bg-indigo-600 w-1 aspect-square rounded-full" />
							<Link
								href="#comment"
								className="flex items-center gap-1 hover:text-indigo-600"
							>
								<AiOutlineMessage className="text-lg" />
								<span className="text-[.7rem]">(1)</span>
							</Link>
						</div>
					</div>

					<Image
						src={`/category/2.webp`}
						alt="author"
						width={500}
						height={500}
						className={cn(
							"object-cover w-full h-full rounded-xl transition-all duration-500"
						)}
					/>

					<p className="text-sm mt-5">
						The European languages are members of the same family. Their
						separate existence is a myth. For science, music, sport, etc, Europe
						uses the same vocabulary. The languages only differ in their
						grammar, their pronunciation and their most common words. Everyone
						realizes why a new common language would be desirable: one could
						refuse to pay expensive translators. To achieve this, it would be
						necessary to have uniform grammar, pronunciation and more common
						words.
					</p>
					<p className="text-sm mt-5">
						The European languages are members of the same family. Their
						separate existence is a myth. For science, music, sport, etc, Europe
						uses the same vocabulary. The languages only differ in their
						grammar, their pronunciation and their most common words. Everyone
						realizes why a new common language would be desirable: one could
						refuse to pay expensive translators. To achieve this, it would be
						necessary to have uniform grammar, pronunciation and more common
						words.
					</p>

					<div className="border-t dark:border-light-gray/20 mt-10 py-10 flex flex-col gap-16">
						<div>
							<p className="text-zinc-500 dark:text-light-gray/60 text-xs mb-4">
								Share this:
							</p>
							<SocialLinks />
						</div>
						<div className="flex sm:items-center flex-col sm:flex-row gap-5 lg:gap-8 bg-blue-100/20 dark:bg-[#191e2947] relative py-5 sm:py-10 px-5 lg:p-10 rounded-2xl">
							<Image
								src={`/category/3.webp`}
								alt="author"
								width={500}
								height={500}
								className={cn(
									"object-cover w-32 aspect-square rounded-full transition-all duration-500"
								)}
							/>
							<div className="flex flex-col gap-2">
								<span className="text-zinc-400 text-[.6rem] -mb-2 uppercase tracking-wide absolute top-12 left-40 sm:relative sm:top-0 sm:left-0">
									written by
								</span>
								<h2 className="font-extrabold text-lg text-dark-color dark:text-white capitalize absolute top-16 left-40 sm:relative sm:top-0 sm:left-0">
									naseem khan
								</h2>
								<p className="text-sm md:text-xs lg:text-sm text-muted-foreground/80 dark:text-light-gray/90">
									Hello, I&apos;m a content writer who is fascinated by content
									fashion, celebrity and lifestyle. She helps clients bring the
									right content to the right people.
								</p>
								<div className="absolute top-24 left-40 sm:relative sm:top-0 sm:left-0">
									<SocialLinks additionalClasses="mt-2" />
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-extrabold">Leave a Reply</h2>
						<Textarea
							placeholder="Write a comment"
							className="focus-visible:ring-[.5px] focus-visible:ring-indigo-600 text-[.8rem]"
						/>
						<div className="flex items-center gap-5">
							<Button size="lg" className="px-7 py-6 dark:text-white">
								Comment
							</Button>
							<Button size="lg" variant="ghost" className="px-9 py-6">
								Cancel
							</Button>
						</div>
					</div>
				</div>
				<Menu />
			</div>

			<div className="mt-20">
				<h2 className="text-xl font-extrabold my-8">Related Posts</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					<SinglePostCard
						link="/"
						imgSrc="/category/5.webp"
						category="technology"
						title="Take a 3D tour through a Microsoft datacenter?"
						desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
						author="naseem Khan"
						date="Dec 23, 2023"
						like={20}
						comment={20}
					/>
					<SinglePostCard
						link="/"
						imgSrc="/category/5.webp"
						category="technology"
						title="Take a 3D tour through a Microsoft datacenter?"
						desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
						author="naseem Khan"
						date="Dec 23, 2023"
						like={20}
						comment={20}
					/>
					<SinglePostCard
						link="/"
						imgSrc="/category/5.webp"
						category="technology"
						title="Take a 3D tour through a Microsoft datacenter?"
						desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
						author="naseem Khan"
						date="Dec 23, 2023"
						like={20}
						comment={20}
					/>
				</div>
			</div>
		</div>
	);
};

export default SinglePage;
