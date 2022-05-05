import Funnels from "../pages/funnels";
import getPathName from "../utils/getPathName";

const routes = {
    '/index.html': Funnels,
}

const router = async() => {
    const content = document.getElementById('connector')
    let pathName = await getPathName()
    setTimeout(async() => {
        try {
            let dataObj = JSON.parse(tableau.connectionData);
            let render = routes[`/${dataObj.connectionType}`]
            content.innerHTML = await render()
        } catch (e) {
            let render = routes[pathName] ? routes[pathName] : Funnels
            content.innerHTML = await render()
        }
    }, 100)
}

export default router