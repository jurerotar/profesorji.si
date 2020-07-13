export const state = () => ({
    username: '',
    email: '',
    password: '',
    color: '',
    selected : [],
    access_token : '',
    refresh_token : '',
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
    setEmail(state, email) {
        state.email = email;
    },
    setPassword(state, password) {
        state.password = password;
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
    email(state) {
        return state.email;
    },
    password(state) {
        return state.password;
    },
    firstLetter(state) {
        return state.username.charAt(0).toUpperCase();
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
    refreshToken(state) {
        return state.refresh_token;
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
