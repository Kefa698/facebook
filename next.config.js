/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: [
			'www.facebook.com',
			'platform-lookaside.fbsbx.com',
			'firebasestorage.googleapis.com',
		],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.node = {
				fs: 'empty',
			};
		}

		return config;
	},
};
