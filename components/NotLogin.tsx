import Link from "next/link";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import {
	HiOutlineBookmark,
	HiOutlineLightBulb,
	HiOutlineUserPlus,
} from "react-icons/hi2";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const NotLogin = () => {
	const { theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button size="icon" variant="ghost">
					<AiOutlineUser />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-3 rounded-xl shadow-2xl drop-shadow-lg mr-10 mt-3 dark:bg-[#272E44]">
				<Link href="/login">
					<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
						<HiOutlineUserPlus className="text-2xl text-black/50 dark:text-white/70" />
						<span className="font-semibold text-base">Sign Up</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuItem
					onClick={() => signIn()}
					className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg"
				>
					<AiOutlineLogin className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Login</span>
				</DropdownMenuItem>

				<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
					<HiOutlineBookmark className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Reading List</span>
				</DropdownMenuItem>

				<DropdownMenuSeparator className="bg-black/5 dark:bg-white/50" />

				<DropdownMenuItem className="flex items-center justify-between px-3 py-[.6rem] rounded-lg">
					<p className="flex items-center gap-4">
						<HiOutlineLightBulb className="text-2xl text-black/50 dark:text-white/70" />
						<span className="font-semibold text-base">
							{theme === "light" ? "Dark Theme" : "Light Theme"}
						</span>
					</p>
					<div className="ml-5 mt-[2px]">
						<Switch />
					</div>
				</DropdownMenuItem>

				<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
					<FiHelpCircle className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Help</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NotLogin;
