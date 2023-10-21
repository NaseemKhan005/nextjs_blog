import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Pagination from "@/components/Pagination";

export default function Home() {
	return (
		<div>
			<Featured />
			<CategoryList />
			<CardList />
			<Pagination />
			<Menu />
		</div>
	);
}
