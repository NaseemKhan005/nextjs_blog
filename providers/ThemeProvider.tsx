"use client";

import * as React from "react";
import ProgressBar from "nextjs-progressbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<ProgressBar
				color="#3f07c4"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			{children}
		</NextThemesProvider>
	);
}
