export const state = () => ({
    appName: 'profesorji.si',
    wideScreenWidth: 1000,
    tabletWidth: 768,
    mobileWideWidth: 400,
    mobileSmallWidth: 320,
    anonymousUserTitle: 'Anonimni uporabnik',
    profileColors: [
        '#001f3f',
        '#7FDBFF',
        '#39CCCC',
        '#3D9970',
        '#2ECC40',
        '#01FF70',
        '#FFDC00',
        '#FF851B',
        '#FF4136',
        '#85144b',
        '#F012BE',
        '#B10DC9',
        '#111111',
        '#AAAAAA',
        '#DDDDDD',
    ],
});


export const getters = {
    wideScreen(state) {
        return state.wideScreenWidth;
    },
    tablet(state) {
        return state.tabletWidth
    },
    mobileWide(state) {
        return state.mobileWidth;
    },
    mobileSmall(state) {
        return state.mobileSmallWidth;
    },
    anonymousUserTitle(state) {
        return state.anonymousUserTitle;
    },
    profileColors(state) {
        return state.profileColors;
    },
    name(state) {
        return state.appName;
    }
}

