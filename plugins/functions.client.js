export default (context, inject) => {
    function updateLocalStorage(object) {
        function isSet(property) {
            return !!localStorage.getItem(property);
        }
        for(const property in object) {
            if(!isSet(property)) {
                localStorage.setItem(`${property}`, object[property]);
            }
        }
    }
    inject('updateLocalStorage', updateLocalStorage);
}
