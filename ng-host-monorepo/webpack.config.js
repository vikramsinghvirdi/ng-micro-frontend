const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "ngHostMonorepo",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        // name: "ngHostMonorepo",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        remotes: {
            "remote01": "remote01@http://localhost:3000/remoteEntry.js",
            "remote02": "remote02@http://localhost:3200/remoteEntry.js"

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@cds/angular": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@cds/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@clr/angular": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@clr/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@clr/icons": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@clr/ui": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
