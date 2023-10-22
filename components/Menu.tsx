import MenuPosts from "./MenuPosts";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import AllCategories from "./AllCategories";

const Menu = () => {
	return (
		<div className="flex flex-col gap-10 md:flex-[1.3] lg:flex-1 w-full md:sticky md:top-5">
			<MenuPosts />
			<Newsletter />
			<MenuPosts />
			<AllCategories />
			<div className="flex items-center flex-col gap-5 border dark:border-muted-foreground/20 py-12 rounded-2xl">
				<h3 className="capitalize text-center">follow us</h3>
				<SocialLinks additionalClasses="border rounded-full text-4xl p-1 hover:text-white hover:bg-indigo-600 dark:text-white dark:border-white/20" />
			</div>
		</div>
	);
};

export default Menu;
