import { createStore, Module, ModuleTree, Mutation } from "vuex";
import { CounterState } from "./modules/counter/type";
const moduleList = import.meta.globEager('./modules/**/*.module.ts')


interface RootState {
    counter: CounterState
}


const modules: ModuleTree<any> = {};

for (const path in moduleList) {
    if (moduleList.hasOwnProperty(path)) {
        const startIndex = path.lastIndexOf('/');
        const endIndex  = path.indexOf('.module.ts');
        const key = path.substr(startIndex + 1, endIndex - startIndex - 1);
        modules[key] = moduleList[path].default;
    }
}




export default createStore({
  modules
});
