import MenuTitle from "@/components/MenuTitle";
import LatestPostCard from "./LatestPostCard";
import CommonButton from "./CommonButton";

const LatestPosts = () => {
	return (
		<div className="flex-[2] w-full">
			<MenuTitle
				title="Latest Posts"
				desc="Discover by topics"
				additionalClasses="text-3xl underline underline-offset-4 font-serif"
			/>

			<div className="grid lg:grid-cols-2 gap-x-5 gap-y-10">
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
				<LatestPostCard
					link="/"
					imgSrc="/category/2.webp"
					category="technology"
					title="Take a 3D tour through a Microsoft datacenter?"
					desc="Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and"
					author="naseem Khan"
					date="nov 19, 2023"
					like={20}
					comment={20}
				/>
			</div>
			<CommonButton />
		</div>
	);
};

export default LatestPosts;
