export const state = () => ({
    wWidth: 1001
});


export const mutations = {
    updateWWidth(width) {
        state.wWidth = width;
    },
    mounted() {
        this.updateWWidth(window.innerWidth)
    }
};

export const getters = {
    getWidth() {
        return state.wWidth;
    }
};
