import { Button } from "./ui/button";

const CommonButton = () => {
	return (
		<Button
			size="lg"
			className="capitalize mx-auto mt-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-6 flex items-center justify-center"
		>
			<span>Load more</span>
		</Button>
	);
};

export default CommonButton;
