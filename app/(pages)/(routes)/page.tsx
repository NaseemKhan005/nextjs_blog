import LatestPosts from "@/components/LatestPosts";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import CategoryPost from "@/components/CategoryPost";

export default function Home() {
	return (
		<div className="flex flex-col gap-12">
			<Featured />
			<CategoryList />
			<div className="flex items-start flex-col md:flex-row gap-8 md:gap-5 lg:gap-10">
				<LatestPosts />
				<Menu />
			</div>
			<CategoryPost />
		</div>
	);
}
