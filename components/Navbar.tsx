"use client";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";

import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/Navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="py-2 md:py-3 border-b border-black/10 dark:border-white/10">
			<div className="container px-5 md:px-10 mx-auto flex items-center justify-between">
				<div className="flex items-center gap-3 md:gap-1 lg:gap-3 text-zinc-700">
					<div>
						<Link href="/">
							<Image
								src="/logo.png"
								alt="logo"
								width={100}
								height={100}
								className="object-contain sm:w-12 sm:h-12 w-11"
							/>
						</Link>
					</div>
					<span className="hidden sm:block w-[.5px] h-7 md:mx-3 lg:mx-4 bg-zinc-500/30 dark:text-white" />
					<div className="relative hidden sm:block">
						<Input
							type="text"
							placeholder="Type to Search..."
							className="rounded-full w-64 md:w-48 lg:w-72 text-sm pr-10"
						/>
						<LuSearch className="text-xl text-black/50 dark:text-white/80 absolute right-4 top-1/2 -translate-y-1/2" />
					</div>
				</div>

				<div className="flex items-center gap-3 md:gap-1 lg:gap-3 text-zinc-700 dark:text-white/90">
					<div>
						<ul
							className={cn(
								"capitalize z-50 flex md:items-center gap-1 md:gap-3 lg:gap-8 text-sm fixed md:relative bg-white dark:bg-dark-color md:w-auto md:bg-transparent dark:md:bg-transparent h-screen md:h-auto top-0 left-0 flex-col md:flex-row shadow-xl py-20 md:py-2 overflow-hidden transition-all duration-500 dark:border-r dark:border-white/5 dark:md:border-r-0 md:shadow-none dark:text-white/70",
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
							<div className="relative w-full mb-2 sm:mt-5 md:hidden px-4 sm:p-0">
								<Input
									type="text"
									placeholder="Type to Search..."
									className="sm:w-72 mx-auto text-sm pl-10 border-0 bg-muted-foreground/5 focus-within:bg-muted-foreground/10 hover:bg-muted-foreground/10 dark:bg-muted-foreground/10 py-6"
								/>
								<LuSearch className="text-[1.3rem] text-black/80 dark:text-white/80 absolute left-6 top-1/2 -translate-y-1/2" />
							</div>
							<span className="md:hidden w-full h-[1px] bg-zinc-500/10 dark:bg-white/10 mb-5" />

							{navLinks.map((link: any) => (
								<li key={link.path} className="mx-4 md:m-0">
									<Link
										href={link.path}
										className={cn(
											"block md:inline-block hover:bg-muted-foreground/5 dark:hover:bg-muted-foreground/10 md:bg-transparent md:hover:bg-transparent dark:md:hover:bg-transparent dark:md:bg-transparent w-full rounded-md px-3 py-[.95rem] md:p-0 hover:text-indigo-600 dark:hover:text-white relative before:absolute before:left-1/2 before:-bottom-[3px] before:-translate-x-1/2 before:w-0 before:h-[2px] sm:before:hover:w-full before:bg-indigo-600 dark:before:bg-white before:transition-all before:duration-500 before:rounded-full",
											pathname === link.path
												? "bg-muted-foreground/5 dark:bg-muted-foreground/10 text-indigo-600 dark:text-white sm:before:w-full"
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
							<div className="absolute bottom-24 sm:bottom-16 left-1/2 -translate-x-1/2">
								<SocialLinks />
							</div>
						</ul>
					</div>

					<div className="flex items-center gap-0 text-xl">
						<span className="hidden md:block w-[.5px] h-7 mx-3 lg:mx-4 bg-zinc-500/30" />
						<Link href="/create">
							<Button
								variant="ghost"
								size="sm"
								className={cn(
									"text-[.7rem] md:text-[.8rem] md:py-5",
									pathname === "/create" ? "bg-neutral-100 dark:bg-muted-foreground/10" : ""
								)}
							>
								<AiOutlinePlus className="text-sm md:text-base mr-1" />
								<span>Create</span>
							</Button>
						</Link>
						<ToggleTheme />
						<Link href="/login">
							<Button size="icon" variant="ghost">
								<AiOutlineUser />
							</Button>
						</Link>
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
