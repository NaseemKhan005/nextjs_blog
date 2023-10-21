import { FiMail } from "react-icons/fi";
import { HiMiniArrowRight } from "react-icons/hi2";
import { Input } from "./ui/input";

const Newsletter = () => {
	return (
		<div className="flex flex-col gap-4 border dark:border-muted-foreground/20 rounded-xl px-4 py-2 pb-5">
			<div className="flex items-end gap-2 border-b dark:border-muted-foreground/20 py-2 mb-3">
				<FiMail className="text-xl" />
				<h2 className="font-semibold">Stay up to date</h2>
			</div>
			<p className="text-sm">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="relative">
				<Input
					type="email"
					placeholder="Enter your email address"
					className="rounded-full w-full text-sm pr-12 py-5 bg-transparent dark:border-muted-foreground/20"
				/>
				<HiMiniArrowRight className="text-4xl p-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 absolute right-[.2rem] top-1/2 -translate-y-1/2 cursor-pointer" />
			</div>
		</div>
	);
};

export default Newsletter;
