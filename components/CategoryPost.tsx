import MenuTitle from "@/components/MenuTitle";
import SinglePostCard from "./SinglePostCard";
import CommonButton from "./CommonButton";

interface CategoryPostProps {
	categoryName: String;
	categoryDesc?: String;
}

const CategoryPost = ({ categoryName, categoryDesc }: CategoryPostProps) => {
	return (
		<div className="flex-[2] w-full">
			<MenuTitle
				title={categoryName}
				desc={categoryDesc}
				additionalClasses="text-3xl underline underline-offset-4 font-serif"
			/>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mx-auto">
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
			<CommonButton />
		</div>
	);
};

export default CategoryPost;
