import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PostReactionsProps {
	like: number;
	comment: number;
}

const PostReactions = ({ like, comment }: PostReactionsProps) => {
	return (
		<div className="flex items-center justify-between lg:m-0 lg:mt-4 md:mt-2 mt-3 select-none">
			<div className="flex items-center gap-5">
				<div className="flex items-center gap-2 hover:text-red-500">
					<AiOutlineHeart className="text-4xl cursor-pointer p-2 bg-muted-foreground/5 hover:bg-red-500/10 rounded-full" />
					<span className="text-sm">{like}</span>
				</div>
				<Link href="#comment">
					<div className="flex items-center gap-2 hover:text-emerald-500">
						<AiOutlineMessage className="text-4xl p-2 bg-muted-foreground/5 hover:bg-emerald-500/10 rounded-full" />
						<span className="text-sm">{comment}</span>
					</div>
				</Link>
			</div>
			<Link
				href="/single-post"
				className="font-semibold text-sm flex items-start hover:text-indigo-600"
			>
				<span>Read more</span>
				<MdKeyboardArrowRight className="text-xl" />
			</Link>
		</div>
	);
};

export default PostReactions;
