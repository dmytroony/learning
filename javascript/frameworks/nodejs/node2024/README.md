# [NodeJS Crash Course 2024 by Brad Traversy](https://www.youtube.com/watch?v=32M1al-Y6Ag)

## Used commands:
 - ```npm init```start
 - ```npm start```
 - ```npm i -D nodemon``` -D for dev purposes only, not for prod

### Notes:
- Modules using CommonJS built-in features:
  - ```"type": "commonjs"``` in package.json (set by default)
  - ```export.modules = exportedFuncName || { expFuncName1, expFuncName2, ...  };```
  - ```const exportedFeatureName = require('pathToFileWithExportedFunc');``` ||
  - ```const { expFuncName1, expFuncName2 } = require('pathToFileWithExportedFunc');```
- Modules using es6 modules:
  - ```"type": "module"``` in ```package.json```
  - ```export const funcName = () => sth;``` ||
  - ```export { funcName }```; ||
  - ```const funcName = () => sth;``` and then ```export default funcName;```
  - ```import { moduleName } from 'pathToModuleName';``` ||
  - ```import moduleName from 'pathToModuleName';``` ||
  - ```import moduleDefaultName, { anotherModuleName } from 'pathToModuleName';``` if there are more than one func to export