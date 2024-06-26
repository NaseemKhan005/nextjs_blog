import { cn } from "@/lib/utils";

interface PublishDateProps {
	author: String;
	date: String;
	additionalClasses?: String;
}

const PublishDate = ({ author, date, additionalClasses }: PublishDateProps) => {
	return (
		<div className="capitalize flex items-center gap-2 md:gap-1 lg:gap-2 text-[.8rem] font-semibold relative h-fit">
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
