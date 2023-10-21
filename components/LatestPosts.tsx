import MenuTitle from "@/components/MenuTitle";
import PostCard from "./PostCard";

const LatestPosts = () => {
	return (
		<div className="flex-[2] w-full">
			<MenuTitle title="Latest Posts" desc="Discover by topics" />

			<div className="grid grid-cols-2 gap-x-5 gap-y-10">
				<PostCard link="/" imgSrc="/category/2.webp" />
				<PostCard link="/" imgSrc="/category/3.webp" />
				<PostCard link="/" imgSrc="/category/5.webp" />
				<PostCard link="/" imgSrc="/category/6.webp" />
			</div>
		</div>
	);
};

export default LatestPosts;
