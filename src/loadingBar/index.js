import LoadingBar from './loadingBar.jsx';
import { render, createVNode, ref, computed } from 'vue'

let seed = 0

let vm
const start = (props) => {
    console.log('start')
    if (seed == 1) {
        return
    }
    seed = 1
    vm = createVNode(
        LoadingBar,
        props,
        null
    )
    const container = document.createElement('div')
    render(vm, container)
    document.body.appendChild(container.firstElementChild)
}
const end = () => {
    seed = 0
    vm.component.exposed.endWidth() // not good realization
}
const api = {
    start,
    end
}
export default api;