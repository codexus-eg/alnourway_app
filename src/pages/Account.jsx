 at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async catchUnfinishedHookActions (file:///Users/builder/clone/node_modules/rollup/dist/es/shared/node-entry.js:23321:16)
    at async rollupInternal (file:///Users/builder/clone/node_modules/rollup/dist/es/shared/node-entry.js:23846:5)
    at async buildEnvironment (file:///Users/builder/clone/node_modules/vite/dist/node/chunks/dep-Dq2t6Dq0.js:46260:14)
    at async Object.defaultBuildApp [as buildApp] (file:///Users/builder/clone/node_modules/vite/dist/node/chunks/dep-Dq2t6Dq0.js:46738:5)
    at async CAC.<anonymous> (file:///Users/builder/clone/node_modules/vite/dist/node/cli.js:863:7)
[error] Could not find the web assets directory: ./dist.
        Please create it and make sure it has an index.html file. You can change the path of this directory in capacitor.config.ts (webDir option). You may need to compile the web assets for your app (typically npm run build). More info: https://capacitorjs.com/docs/basics/workflow#sync-your-project

Build failed :|
Step 4 script `Build web app and Sync` exited with status code 1

> alnourway@0.0.0 build
> vite build

vite v6.4.2 building for production...
transforming...
✓ 45 modules transformed.
✗ Build failed in 749ms
error during build:
[vite-plugin-pwa:build] [plugin vite-plugin-pwa:build] src/pages/Account.jsx (81:60): There was an error during the build:
  Transform failed with 1 error:
/Users/builder/clone/src/pages/Account.jsx:81:60: ERROR: Unexpected end of file before a closing "p" tag
Additionally, handling the error in the 'buildEnd' hook caused the following error:
  Transform failed with 1 error:
/Users/builder/clone/src/pages/Account.jsx:81:60: ERROR: Unexpected end of file before a closing "p" tag
file: /Users/builder/clone/src/pages/Account.jsx:81:60
Unexpected end of file before a closing "p" tag
79 |                      </p>
80 |                      <p className="text-lg font-semibold text-gray-900">
81 |                        {user.full_name || t("not_specified")}
   |                                                              ^
    at getRollupError (file:///Users/builder/clone/node_modules/rollup/dist/es/shared/parseAst.js:406:41)
    at file:///Users/builder/clone/node_modules/rollup/dist/es/shared/node-entry.js:23863:39
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async catchUnfinishedHookActions (file:///Users/builder/clone/node_modules/rollup/dist/es/shared/node-entry.js:23321:16)
    at async rollupInternal (file:///Users/builder/clone/node_modules/rollup/dist/es/shared/node-entry.js:23846:5)
    at async buildEnvironment (file:///Users/builder/clone/node_modules/vite/dist/node/chunks/dep-Dq2t6Dq0.js:46260:14)
    at async Object.defaultBuildApp [as buildApp] (file:///Users/builder/clone/node_modules/vite/dist/node/chunks/dep-Dq2t6Dq0.js:46738:5)
    at async CAC.<anonymous> (file:///Users/builder/clone/node_modules/vite/dist/node/cli.js:863:7)
[error] Could not find the web assets directory: ./dist.
        Please create it and make sure it has an index.html file. You can change the path of this directory in capacitor.config.ts (webDir option). You may need to compile the web assets for your app (typically npm run build). More info: https://capacitorjs.com/docs/basics/workflow#sync-your-project

Build failed :|
Step 4 script `Build web app and Sync` exited with status code 1
