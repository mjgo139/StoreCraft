

export type Tienda = {
    id: number,
    name: string,
    image: string,
    description: string,
}

export type Producto = {
    id: number,
    idTienda: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

export type CarritoItem = Producto & {
    quantity: number
}