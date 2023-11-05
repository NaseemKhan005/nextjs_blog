"use client";

import React, { useState } from "react";
import {
	AiFillGithub,
	AiOutlineEye,
	AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
	const [showPassword, setshowPassword] = useState(false);

	return (
		<form action="">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
				<div className="w-full bg-white dark:bg-[#272e44] rounded-lg shadow-xl drop-shadow-sm md:mt-0 sm:max-w-sm xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:px-8 py-10">
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
								{/* <div className="relative"></div> */}
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Enter your password"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 outline-indigo-600 block w-full px-3 py-6"
								/>
								{showPassword ? (
									<span
										className="text-xl p-2 text-black/50 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-2/3 -translate-y-1/2 right-2 hover:text-indigo-600"
										onClick={() => setshowPassword(false)}
									>
										<AiOutlineEye />
									</span>
								) : (
									<span
										className="text-xl p-2 text-black/50 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-2/3 -translate-y-1/2 right-2 hover:text-indigo-600"
										onClick={() => setshowPassword(true)}
									>
										<AiOutlineEyeInvisible />
									</span>
								)}
							</div>
							<button
								type="submit"
								className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
							>
								Sign in
							</button>
							<div className="relative">
								<span className="block w-[30%] absolute top-1/2 left-0 dark:bg-white bg-black/50 h-[1px]" />
								<p className="text-sm text-center">Or continue with</p>
								<span className="block w-[30%] absolute top-1/2 right-0 dark:bg-white bg-black/50 h-[1px]" />
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex items-center justify-between gap-1">
									<Button className="w-full text-white py-6 bg-rose-500 hover:bg-rose-600">
										<FcGoogle className="text-lg mr-1" />
										Google
									</Button>
									<Button className="w-full text-white py-6 bg-neutral-700 hover:bg-neutral-800">
										<AiFillGithub className="text-xl mr-1" />
										Github
									</Button>
								</div>
								<Button className="w-full text-white py-6 bg-blue-600 hover:bg-blue-700">
									<BsFacebook className="text-lg mr-1" />
									Facebook
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
