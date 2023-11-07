import React from "react";

const Loading = () => {
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen dark:bg-dark-color bg-white z-[110]">
			<div className="w-44 sm:w-72">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
					<path
						fill="none"
						stroke="#FF156D"
						stroke-width="16"
						stroke-linecap="round"
						stroke-dasharray="300 385"
						stroke-dashoffset="0"
						d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
					>
						<animate
							attributeName="stroke-dashoffset"
							calcMode="spline"
							dur="1.4"
							values="685;-685"
							keySplines="0 0 1 1"
							repeatCount="indefinite"
						></animate>
					</path>
				</svg>
				<h2 className="text-center text-2xl mt-5">Loading...</h2>
			</div>
		</div>
	);
};

export default Loading;
