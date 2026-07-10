import React from 'react'
import { assets } from '../assets/assets';
import {
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
	EnvelopeIcon
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
			<img width="150" height="50" src={assets.logo} alt="" />
			<p className="flex-1  border-l border-gray-400 pl-4 text-sm text-gray-500  max-sm:hidden "> Copyright @Clera BG | All right reserved.</p>
			<div className="flex gap-1">

				

				<Link to="https://www.linkedin.com/in/het-patel-4229532b7/" target="_blank">
					<span className="hover:text-blue-700">
						<LinkedinLogo size={32}  className="hover:scale-105 transition-all duration-500" />
					</span>
				</Link>

				<Link to="https://github.com/Het10-Lb" target="_blank">
					<span className="hover:text-gray-400">
						<GithubLogo size={32}  className="hover:scale-105 transition-all duration-500" />
					</span>
				</Link>

				<Link to="mailto:hetkecodes@gmail.com" target="_blank">
					<span className="hover:text-blue-400">
						<EnvelopeIcon size={32}   className="hover:scale-105 transition-all duration-500"/>
					</span>
				</Link>


			</div>
		</div>
	);
};


export default Footer