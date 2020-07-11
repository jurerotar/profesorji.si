export const state = () => ({
    widescreenWidth: 1000,
    tabletWidth: 768,
    mobileWidth: 400,
    anonymousUserTitle: 'Anonimni uporabnik'
});


export const getters = {
    wideScreen(state) {
        return state.widescreenWidth;
    },
    tablet(state) {
        return state.tabletWidth
    },
    mobile(state) {
        return state.mobileWidth;
    },
    anonymousUserTitle(state) {
        return state.anonymousUserTitle;
    }
}

