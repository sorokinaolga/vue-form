export default {
    bind(el, binding, vnode) {
        el.clickInsideElement = (event) => {
            if (el === event.target || el.contains(event.target)) {
                vnode.context[binding.expression](event);
            }
        }

        document.body.addEventListener('click', el.clickInsideElement, false);
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickInsideElement);
    }
}