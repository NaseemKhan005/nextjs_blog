const PagesLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="container px-3 sm:px-5 md:px-10 py-5 mx-auto">
			{children}
		</div>
	);
};

export default PagesLayout;
