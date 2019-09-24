import * as types from './types';

function initialState() {
    return {
        value: ''
    }
}

const edit = {
    state: initialState,
    mutations: {
        [types.CHANGE_INPUT](state, val) {
            state.value = val
        },
        [types.UNMOUNT](state) {
            Object.assign(state, initialState())
        }
    },
    actions: {
        changeInput({commit}, val) {
            commit(types.CHANGE_INPUT, val)
        },
        unmountState({commit}) {
            commit(types.UNMOUNT)
        }
    }
}

export default edit;