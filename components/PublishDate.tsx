import { cn } from "@/lib/utils";

interface PublishDateProps {
	author: String;
	date: String;
	additionalClasses?: String;
}

const PublishDate = ({ author, date, additionalClasses }: PublishDateProps) => {
	return (
		<div className="capitalize flex items-center gap-2 text-[.7rem] lg:text-xs relative h-fit">
			<p>{author}</p>
			<span
				className={cn(
					"block bg-white w-[.4rem] aspect-square rounded-full",
					additionalClasses
				)}
			/>
			<p>{date}</p>
		</div>
	);
};

export default PublishDate;
