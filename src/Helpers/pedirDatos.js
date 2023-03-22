import Productos from '../data/Productos.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(Productos)

        }, 1500)
    })
}