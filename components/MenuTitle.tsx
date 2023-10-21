interface MenuTitleProps {
	title: String;
	desc?: String;
}

const MenuTitle = ({ title, desc }: MenuTitleProps) => {
	return (
		<div className="mb-5">
			<h2 className="text-2xl font-semibold capitalize">{title}</h2>
			<span className="text-sm text-zinc-500/80 dark:text-white/50 -mt-2">
				{desc}
			</span>
		</div>
	);
};

export default MenuTitle;
