import LatestPosts from "@/components/LatestPosts";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
	return (
		<div className="flex flex-col gap-12">
			<Featured />
			<CategoryList />
			<div className="flex items-start gap-5">
				<LatestPosts />
				<Menu />
			</div>
		</div>
	);
}
