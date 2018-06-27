const _ = require(`lodash`);
const fs = require(`fs`);

const offlinePlugin = require('gatsby-plugin-offline/gatsby-node.js');
const offlinePluginPostBuild = offlinePlugin.onPostBuild;

function modifyWebpackConfig({ config, stage }, options) {
    if (stage === "build-javascript" && options.workerScript) {
        config.merge((conf) => {
            conf.entry['worker'] = options.workerScript;
            return conf;
        });
    }
};

let s
const readStats = () => {
  if (s) {
    return s
  } else {
    s = JSON.parse(
      fs.readFileSync(`${process.cwd()}/public/stats.json`, `utf-8`)
    )
    return s
  }
}

const getAssetsForChunk = (chunk) =>
  _.flatten(readStats().assetsByChunkName[chunk])

const onPostBuild = (args, pluginOptions) => {
    const workerFile = getAssetsForChunk('worker').filter((file) => file.substr(-3) === '.js').pop();
    console.log(workerFile);
    return offlinePluginPostBuild(args, {
        ...pluginOptions,
        importScripts: [workerFile]
    });
};

module.exports = {...offlinePlugin, modifyWebpackConfig, onPostBuild};
