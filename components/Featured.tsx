import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface FeaturedImageProps {
	link: String;
	imgSrc: String;
	title: String;
	category: String;
	author: String;
	date: String;
	additionalClasses?: String;
	titleClasses?: String;
}

const FeaturedImage = ({
	link,
	imgSrc,
	title,
	category,
	author,
	date,
	additionalClasses,
	titleClasses,
}: FeaturedImageProps) => {
	return (
		<Link href={`${link}`} className="relative">
			<Image
				src={`${imgSrc}`}
				alt="featured image"
				width={500}
				height={500}
				className="object-cover w-full rounded-lg sm:rounded-xl md:rounded-2xl featured-img transition-all duration-500"
			/>
			<div
				className={cn(
					"bg-black/20 hover:bg-black/30 w-full h-full absolute top-0 left-0 text-white rounded-lg sm:rounded-xl md:rounded-2xl px-3 sm:px-5 py-5 sm:py-7 lg:p-10 flex flex-col justify-end gap-3 transition-all duration-500 featured-overlay",
					additionalClasses
				)}
			>
				<Link
					href={"/category"}
					className="bg-indigo-600 hover:bg-indigo-700 rounded-full text-[.6rem] w-fit py-[.3rem] px-2 uppercase tracking-widest font-[500]"
				>
					{category}
				</Link>
				<h1
					className={cn(
						"hover:underline underline-offset-4 text-base sm:text-[1.7rem] leading-snug font-semibold text-white hover:text-white/90",
						titleClasses
					)}
				>
					{title}
				</h1>
				<div className="capitalize flex items-center gap-2 text-xs relative h-fit">
					<p>{author}</p>
					<span className="block bg-white w-[.4rem] aspect-square rounded-full" />
					<p>{date}</p>
				</div>
			</div>
		</Link>
	);
};

const Featured = () => {
	return (
		<div className="flex justify-center items-start flex-col lg:flex-row gap-2">
			<div className="w-full lg:flex-[2.035]">
				<FeaturedImage
					link="/"
					imgSrc="/featured.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					author="by Naseem Khan"
					date="November 18, 2023"
				/>
			</div>
			<div className="flex justify-between w-full flex-col sm:flex-row lg:flex-col flex-1 gap-2">
				<div className="w-full">
					<FeaturedImage
						link="/"
						imgSrc="/category/1.webp"
						category="coding"
						title="Take a 3D tour through a Microsoft datacenter?"
						author="by Naseem Khan"
						date="November 18, 2023"
						titleClasses="text-base xs:text-xl sm:text-base md:text-lg lg:text-base xl:text-lg"
						additionalClasses="px-3 sm:px-5 lg:px-5 py-5 sm:py-7 gap-2"
					/>
				</div>
				<div className="w-full">
					<FeaturedImage
						link="/"
						imgSrc="/category/5.webp"
						category="travel"
						title="Take a 3D tour through a Microsoft datacenter?"
						author="by Naseem Khan"
						date="November 18, 2023"
						titleClasses="text-base xs:text-xl sm:text-base md:text-lg lg:text-base xl:text-lg"
						additionalClasses="px-3 sm:px-5 lg:px-5 py-5 sm:py-7 gap-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default Featured;
