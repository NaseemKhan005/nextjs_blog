import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiHelpCircle } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import {
	HiOutlineBookmark,
	HiOutlineClipboardDocumentList,
	HiOutlineLightBulb,
	HiOutlineUser,
} from "react-icons/hi2";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { AiOutlineHeart } from "react-icons/ai";

const UserInfo = () => {
	const { data } = useSession();
	const { theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Image
					src={`${data?.user?.image}`}
					alt="user"
					width={500}
					height={500}
					className="rounded-full w-9 aspect-square object-cover object-top"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-3 rounded-xl shadow-2xl drop-shadow-lg mr-10 mt-3 dark:bg-[#272E44]">
				<DropdownMenuLabel className="flex items-center gap-2 pb-4">
					<Image
						src={`${data?.user?.image}`}
						alt="user"
						width={500}
						height={500}
						className="rounded-full w-11 aspect-square object-cover object-top"
					/>
					<div>
						<p className="text-lg font-semibold">{data?.user?.name}</p>
						<p className="text-sm text-black/70 dark:text-white/50 font-normal -mt-1">
							{data?.user?.email}
						</p>
					</div>
				</DropdownMenuLabel>

				<DropdownMenuSeparator className="bg-black/5 dark:bg-white/50" />

				<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
					<HiOutlineUser className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Edit Profile</span>
				</DropdownMenuItem>

				<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
					<HiOutlineClipboardDocumentList className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">My Posts</span>
				</DropdownMenuItem>

				<DropdownMenuItem className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg">
					<AiOutlineHeart className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Wishist</span>
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
				<DropdownMenuItem
					onClick={() => signOut()}
					className="flex items-center gap-4 cursor-pointer px-3 py-[.6rem] rounded-lg"
				>
					<RiLogoutCircleLine className="text-2xl text-black/50 dark:text-white/70" />
					<span className="font-semibold text-base">Logout</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserInfo;
