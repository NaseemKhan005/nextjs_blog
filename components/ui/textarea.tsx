import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[120px] w-full rounded-xl border border-input bg-background p-4 text-sm ring-offset-indigo-600 placeholder:text-muted-foreground focus-visible:outline-none  ring-indigo-600 focus-within:ring-indigo-600  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#191e2947] focus-visible:ring-[.5px] focus-visible:ring-indigo-600 text-[.8rem]",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };
