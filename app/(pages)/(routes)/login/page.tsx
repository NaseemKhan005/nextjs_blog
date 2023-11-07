"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
	AiFillGithub,
	AiOutlineEye,
	AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRightShort } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";

const Login = () => {
	const [showPassword, setshowPassword] = useState(false);
	const [showGoogleIcon, setShowGoogleIcon] = useState(false);
	const [showGithubIcon, setShowGithubIcon] = useState(false);
	const { status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <Loading />;
	}

	if (status === "authenticated") {
		router.push("/");
	}

	return (
		<form action="">
			<div className="flex flex-col items-center justify-center sm:px-6 pt-8 mx-auto md:h-screen lg:py-0 relative">
				<div className="w-full sm:bg-white sm:dark:bg-[#272e44] rounded-xl sm:shadow-2xl sm:drop-shadow-md md:mt-0 sm:max-w-[26rem] xl:p-0">
					<div className="p-2 sm:p-6 space-y-4 md:space-y-6 sm:px-8 py-10 sm:mb-8 sm:mt-5">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="select-none cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<Input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 outline-indigo-600 block w-full px-3 py-6"
									placeholder="Enter your email"
								/>
							</div>
							<div className="relative">
								<label
									htmlFor="password"
									className="select-none cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Enter your password"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 outline-indigo-600 block w-full px-3 py-6"
								/>
								{showPassword ? (
									<span
										className="text-xl p-2 text-black/50 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-indigo-600"
										onClick={() => setshowPassword(false)}
									>
										<AiOutlineEye />
									</span>
								) : (
									<span
										className="text-xl p-2 text-black/50 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-indigo-600"
										onClick={() => setshowPassword(true)}
									>
										<AiOutlineEyeInvisible />
									</span>
								)}
							</div>
							<button
								type="submit"
								className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-[.8rem] text-center"
							>
								Sign in
							</button>
							<div className="relative">
								<span className="block w-[30%] absolute top-1/2 left-0 dark:bg-white bg-black/50 h-[1px]" />
								<p className="text-sm text-center">Or continue with</p>
								<span className="block w-[30%] absolute top-1/2 right-0 dark:bg-white bg-black/50 h-[1px]" />
							</div>

							<div className="flex items-center flex-col justify-between gap-1">
								<Button
									onClick={() => signIn("google")}
									onMouseEnter={() => setShowGoogleIcon(true)}
									onMouseLeave={() => setShowGoogleIcon(false)}
									variant="outline"
									className="w-full flex items-center justify-start gap-3 py-[1.4rem] dark:bg-transparent dark:hover:bg-white/5 dark:border-white/10"
								>
									<FcGoogle className="text-2xl mr-1 mt-[2px]" />
									<span>Continue to Google</span>
									<span
										className={cn(
											"ml-auto text-2xl text-black/70 dark:text-white/70 transition-all duration-500",
											showGoogleIcon
												? "scale-100 translate-x-0"
												: "scale-0 -translate-x-5"
										)}
									>
										<BsArrowRightShort />
									</span>
								</Button>
								<Button
									onClick={() => signIn("google")}
									onMouseEnter={() => setShowGithubIcon(true)}
									onMouseLeave={() => setShowGithubIcon(false)}
									variant="outline"
									className="w-full flex items-center justify-start gap-3 py-[1.4rem] dark:bg-transparent dark:hover:bg-white/5 dark:border-white/10"
								>
									<AiFillGithub className="text-2xl mr-1 mt-[2px]" />
									<span>Continue to Github</span>
									<span
										className={cn(
											"ml-auto text-2xl text-black/70 dark:text-white/70 transition-all duration-500",
											showGithubIcon
												? "scale-100 translate-x-0"
												: "scale-0 -translate-x-5"
										)}
									>
										<BsArrowRightShort />
									</span>
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
