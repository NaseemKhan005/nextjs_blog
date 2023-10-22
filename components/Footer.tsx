import Link from "next/link";
import Image from "next/image";

import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import MenuPosts from "./MenuPosts";
import { footerLinks1, footerLinks2, footerLinks3 } from "@/constants/Footer";

const FooterLinks = ({ title, links }) => {
	return (
		<div className="w-[20%] md:w-fit capitalize">
			<h3 className="font-semibold text-lg">{title}</h3>
			<div className="flex flex-col gap-4 capitalize text-sm mt-10">
				{links.map((link: any) => (
					<Link key={link.path} href={link.path} className="hover:underline">
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
};

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<section className="bg-light-gray/50 sm:bg-light-gray/30 dark:bg-black/10 mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col gap-10">
			<div className="flex items-start justify-between flex-col lg:flex-row gap-10 md:gap-14 container px-5 md:px-10 mx-auto pt-20">
				<div className="flex flex-col gap-5 w-full md:flex-[1]">
					<div className="flex items-center gap-3">
						<Link href="/">
							<Image
								src="/logo.png"
								alt="logo"
								width={100}
								height={100}
								className="object-contain sm:w-12 sm:h-12 w-11"
							/>
						</Link>
						<h2 className="font-semibold text-xl">Naseem Blog</h2>
					</div>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
						omnis. Fugiat quod unde aut accusamus nulla. Sed accusamus eius
						minima at repudiandae culpa corrupti quam? A possimus temporibus
						laboriosam et.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Molestiae, omnis. Fugiat quod unde aut accusamus nulla. Sed
						accusamus eius minima at repudiandae culpa corrupti quam? A possimus
						temporibus laboriosam et.
					</p>
					<SocialLinks additionalClasses="border rounded-full text-4xl p-1 hover:text-white hover:bg-indigo-600 dark:text-white dark:border-white/20" />
				</div>

				<div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-10 md:gap-16 lg:gap-10 xl:gap-16 md:flex-[2] w-full">
					<FooterLinks title="links" links={footerLinks1} />
					<FooterLinks title="categories" links={footerLinks2} />
					<FooterLinks title="links" links={footerLinks3} />
					<div className="w-full">
						<Newsletter />
					</div>
				</div>
			</div>

			<div className="container px-5 md:px-10 mx-auto py-5 sm:py-8 border-t border-muted-foreground/20 flex items-center justify-between sm:flex-row flex-col gap-3">
				<p className="text-xs sm:text-sm text-black/80 dark:text-white">
					copyright © {date}{" "}
					<Link
						href="https://naseemkhan.vercel.app/"
						target="_blank"
						className="hover:underline"
					>
						Naseem Khan
					</Link>{" "}
					— All rights reserved.
				</p>

				<SocialLinks additionalClasses="hover:translate-y-0 dark:hover:text-indigo-500 hover:scale-125 ml-2" />
			</div>
		</section>
	);
};

export default Footer;
