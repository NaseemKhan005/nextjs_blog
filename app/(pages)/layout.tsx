import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				poppins.className,
				"container px-3 sm:px-5 md:px-10 py-5 mx-auto"
			)}
		>
			{children}
		</div>
	);
};

export default PagesLayout;
