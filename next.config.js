const assetPrefix = process.env.BUILD_GH_PAGES === "true" ? "./" : undefined;

module.exports = {
    images: {
        unoptimized: true,
    },
    assetPrefix,
    experimental: {
        largePageDataBytes: 10000,
    },
};
