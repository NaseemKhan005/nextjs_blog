import { Button } from "./ui/button";

const Pagination = () => {
	return (
		<div className="flex items-center justify-between gap-2">
			<Button disabled size="lg" className="px-7 py-6 dark:text-white">
				Prev
			</Button>
			<Button size="lg" className="px-7 py-6 dark:text-white">
				Next
			</Button>
		</div>
	);
};

export default Pagination;
