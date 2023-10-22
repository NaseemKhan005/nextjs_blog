import { cn } from "@/lib/utils";

interface MenuTitleProps {
	title: String;
	desc?: String;
	additionalClasses?: String;
}

const MenuTitle = ({ title, desc, additionalClasses }: MenuTitleProps) => {
	return (
		<div className="mb-5">
			<h2
				className={cn("text-2xl font-semibold capitalize", additionalClasses)}
			>
				{title}
			</h2>
			<span className="text-sm text-zinc-500/80 dark:text-white/50 -mt-2">
				{desc}
			</span>
		</div>
	);
};

export default MenuTitle;
