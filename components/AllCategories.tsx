import Link from "next/link";

import MenuTitle from "@/components/MenuTitle";

interface CategoryProps {
	link: String;
	name: String;
}

const Category = ({ link, name }: CategoryProps) => {
	return (
		<Link
			href={`${link}`}
			className="font-semibold text-sm border-b dark:border-muted-foreground/20 capitalize block w-full pb-2 pt-4 hover:text-indigo-600 dark:hover:text-white relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-indigo-600 dark:before:bg-white before:w-0 hover:before:w-full before:h-[1px] before:transition-all before:duration-500"
		>
			{name}
		</Link>
	);
};

const AllCategories = () => {
	return (
		<div>
			<MenuTitle
				title="Categories"
				desc="Discover by topics"
				additionalClasses="font-serif underline underline-offset-4"
			/>

			<div className="flex items-center flex-col">
				<Category link="/" name="technology" />
				<Category link="/" name="fashion" />
				<Category link="/" name="style" />
				<Category link="/" name="tarvel" />
				<Category link="/" name="coding" />
				<Category link="/" name="journey" />
			</div>
		</div>
	);
};

export default AllCategories;
