import { ActionContext } from 'vuex';
import { Count, CounterState, Decrease, Increase } from './type';




// state
const state = (): CounterState => ({
    [Count]: 0
});

export const getters = {
    [Count]:  (state: CounterState) => state.count
}

export const actions = {
    [Decrease]( { commit }: ActionContext<CounterState, CounterState>,) {
        commit(Decrease)
    }
}


export const mutations = {
  [Decrease]( state: CounterState) {
        state.count +=1;
    }
}







export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}