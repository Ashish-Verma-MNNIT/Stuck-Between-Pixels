/** @type {import('next').NextConfig} */
const webpack = require("webpack")
const { parsed: myEnv } = require("dotenv").config()
module.exports = {
	webpack(config) {
		config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
		return config
	},
}
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	env: {
		VERBWIRE_API_KEY: "sk_live_c121bef5-9b72-4c7f-92e8-9833ad98b2d3",
	},
}

module.exports = nextConfig
