"use client";

import Link from "next/link";
import {
	BiMenu,
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoGithub,
} from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";

import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/Navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="py-2 md:py-3 border-b border-muted-foreground/10">
			<div className="container px-10 md:px-5 mx-auto flex items-center justify-between">
				<div className="flex items-center gap-3 text-zinc-700">
					<div>
						<Link href="/">
							<Image
								src="/logo.png"
								alt="logo"
								width={100}
								height={100}
								className="object-contain w-12 h-12"
							/>
						</Link>
					</div>
					<span className="hidden sm:block w-[.5px] h-7 md:mx-3 lg:mx-4 bg-zinc-500/30 dark:text-white" />
					<div className="relative hidden sm:block">
						<Input
							type="text"
							placeholder="Type to Search..."
							className="rounded-full w-64 lg:w-72 text-xs pr-10"
						/>
						<LuSearch className="text-xl text-black/50 dark:text-white/80 absolute right-4 top-1/2 -translate-y-1/2" />
					</div>
				</div>

				<div className="flex items-center gap-3 text-zinc-700 dark:text-white">
					<div>
						<ul
							className={cn(
								"capitalize z-50 flex md:items-center gap-1 md:gap-4 lg:gap-8 text-sm lg:text-[.8rem] fixed md:relative bg-white dark:bg-[#09090B] md:w-auto md:bg-transparent dark:md:bg-transparent h-screen md:h-auto top-0 left-0 flex-col md:flex-row shadow-xl py-20 md:py-0 overflow-hidden transition-all duration-500 dark:border-r dark:border-white/5 dark:md:border-r-0 md:shadow-none",
								menu ? "w-full sm:w-80" : "w-0"
							)}
						>
							<Link href="/" className="md:hidden absolute top-6 left-5">
								<Image
									src="/logo.png"
									alt="logo"
									width={100}
									height={100}
									className="object-contain w-9 h-9"
								/>
							</Link>
							<div className="relative w-full mb-2 mt-5 md:hidden px-4 sm:p-0">
								<Input
									type="text"
									placeholder="Type to Search..."
									className="sm:w-72 mx-auto text-xs pl-10 border-0 bg-muted-foreground/5 focus-within:bg-muted-foreground/10 hover:bg-muted-foreground/10 dark:bg-muted-foreground/10 py-6"
								/>
								<LuSearch className="text-[1.3rem] text-black/80 dark:text-white/80 absolute left-6 top-1/2 -translate-y-1/2" />
							</div>
							<span className="md:hidden w-full h-[1px] bg-zinc-500/10 mb-5" />
							{navLinks.map((link: any) => (
								<li key={link.path} className="mx-4 md:m-0">
									<Link
										href={link.path}
										className={cn(
											"block md:inline-block hover:bg-muted-foreground/5 dark:hover:bg-muted-foreground/10 md:bg-transparent md:hover:bg-transparent dark:md:hover:bg-transparent dark:md:bg-transparent w-full rounded-md px-3 py-[.95rem] md:p-0",
											pathname === link.path
												? "bg-muted-foreground/5 dark:bg-muted-foreground/10"
												: "hover:bg-muted-foreground/5 dark:hover:bg-muted-foreground/10"
										)}
									>
										{link.label}
									</Link>
								</li>
							))}
							<Button
								variant="ghost"
								size="icon"
								className="md:hidden absolute top-5 right-5"
								onClick={() => setMenu(false)}
							>
								<IoClose className="mx-auto" />
							</Button>
							<div className="flex items-center justify-center gap-3 text-2xl absolute bottom-16 left-1/2 -translate-x-1/2 text-black/70">
								<BiLogoFacebook className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
								<BiLogoInstagram className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
								<BiLogoTwitter className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
								<BiLogoGithub className="cursor-pointer hover:text-indigo-600 hover:-translate-y-2 transition-all" />
							</div>
						</ul>
					</div>

					<div className="flex items-center gap-0 text-xl">
						<span className="hidden md:block w-[.5px] h-7 mx-3 lg:mx-4 bg-zinc-500/30" />
						<ToggleTheme />
						<Button size="icon" variant="ghost">
							<AiOutlineUser />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setMenu(true)}
						>
							<BiMenu className="mx-auto" />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;