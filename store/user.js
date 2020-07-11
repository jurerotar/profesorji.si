export const state = () => ({
    username: '',
    color: '',
    selected : [],
    access_token : '',
    remember_token : '',
    expires_in: 0,
    device: {
        width: 0,
        height: 0
    },
    sidebarExtended: false
});


export const mutations = {
    updateWidth(state, width) {
        state.device.width = width;
    },
    updateHeight(state, height) {
        state.device.height = height;
    },
    toggleSidebar(state) {
        state.sidebarExtended = !state.sidebarExtended;
    },
    setUsername(state, username) {
        state.username = username;
    },
    setColor(state, color) {
        state.color = color;
    },
    setAccessToken(state, token) {
        state.access_token = token;
    },
    setRefreshToken(state, token) {
        state.refresh_token = token;
    },
    setExpiresIn(state, time) {
        state.expires_in = time;
    },

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
    firstLetter(state) {
        return state.username[0].toUpperCase();
    },
    width(state) {
        return state.device.width;
    },
    height(state) {
        return state.device.height;
    },
    accessToken(state) {
        return state.access_token;
    },
    rememberToken(state) {
        return state.remember_token;
    },
    isAuthenticated(state) {
        return !!state.access_token;
    },
    sidebarExtended(state) {
        return state.sidebarExtended;
    }
}

export const actions = {
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
    },
}
