"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { TbMoon } from "react-icons/tb";

import { Button } from "./ui/button";

const ToggleTheme = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			size="icon"
			variant="ghost"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{theme === "light" ? <TbMoon /> : <HiOutlineSun />}
		</Button>
	);
};
export default ToggleTheme;
