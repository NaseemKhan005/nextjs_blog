import MenuPost from "./MenuPost";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import AllCategories from "./AllCategories";

const Menu = () => {
	return (
		<div className="flex flex-col gap-10 md:flex-[1.3] lg:flex-[.9] w-full ">
			<MenuPost
				title="Popular posts"
				desc="what's hot"
				link={"/"}
				imgSrc={"/category/3.webp"}
				postTitle={"Take a 3D tour through a Microsoft datacenter?"}
				category={"technology"}
				author={"naseem khan"}
				date={"oct 24, 2023"}
			/>
			<Newsletter />
			<MenuPost
				title="featured posts"
				desc="what's hot"
				link={"/"}
				imgSrc={"/category/4.webp"}
				postTitle={"Take a 3D tour through a Microsoft datacenter?"}
				category={"technology"}
				author={"naseem khan"}
				date={"oct 24, 2023"}
			/>
			<AllCategories />
			<div className="flex items-center flex-col gap-5 border dark:border-muted-foreground/20 py-12 rounded-2xl">
				<h3 className="capitalize text-center">follow us</h3>
				<SocialLinks additionalClasses="border rounded-full text-3xl p-1 hover:text-white hover:bg-indigo-600 dark:text-white dark:border-white/20" />
			</div>
		</div>
	);
};

export default Menu;
