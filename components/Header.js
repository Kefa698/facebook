import Image from 'next/image';
import React from 'react';
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from '@heroicons/react/solid';
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
function Header() {
	return (
		<div className="sticky top-0 z-50 bg-white flex items-center lg:px-5 shadow-md">
			{/* left */}
			<div className="flex items-center">
				<Image
					src="https://www.facebook.com/images/fb_icon_325x325.png"
					height={40}
					width={40}
					layout="fixed"
				/>
				<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
					<SearchIcon className="w-5 h-5 " />
					<input
						className="hidden md:inline-flex  ml-2 bg-transparent outline-none placeholder:gray-500 flex-shrink"
						type="text"
						placeholder="Search Facebook"
					></input>
				</div>
			</div>
			{/* center */}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2">
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
				{/* right */}
			</div>
			{/* profile pic */}
			<div className="flex items-center sm:space-x-2 justify-end">
				{/* profile picture */}
				<p className="whitespace-nowrap font-semibold pr-3">kefaisaboke</p>
				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
