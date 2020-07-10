export const state = () => ({
    username: 'Anonimni uporabnik',
    color: '',
    selected : [
    {
        id: 1,
        selection: 'UN LJ'
    },
    {
        id: 2,
        selection: 'FE'
    }
    ],
    device: {
        width: 1000,
        height: 1000
    }
});


export const mutations = {
    remove(state, element) {
        let selected = state.selected;
        const index = selected.findIndex(el => el.selection === element);
        (index !== -1) ? selected.length = index : selected = {};
    },
    add(state, element) {
        state.push({
            id: state.selected.length + 1,
            selection: element
        });
    }
}


export const getters = {
    color(state) {
        return state.color;
    },
    selected(state) {
        return state.selected;
    },
    username(state) {
        return state.username;
    },
    width(state) {
        return state.device.width;
    },
    height(state) {
        return state.device.height;
    }
}
