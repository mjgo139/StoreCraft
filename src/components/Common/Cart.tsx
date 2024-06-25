
export default function Cart() {
    return (
        <div className="flex-none bg-red-500 w-1/4 flex justify-center items-center text-center ">
            <img src="./img/carrito.png" width={50} />
            <div id="carrito" className="bg-white top-0 right-0 h-full fixed">
                <div className=" bg-slate-500 w-full">
                    <h1>Mi Carrito</h1>
                </div>
                <div className=" overflow-auto h-3/4">

                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        className=""
                                        src={`/img/prueba.jpg`}
                                        alt="imagen guitarra"
                                        width={50}
                                    />
                                </td>
                                <td>Nombre</td>
                                <td className="">
                                    $300
                                </td>
                                <td className="">
                                    <button
                                        type="button"
                                        className=""

                                    >
                                        -
                                    </button>
                                    5
                                    <button
                                        type="button"
                                        className=""

                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className=""
                                        type="button"

                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-end">Total pagar: <span className="">$200</span></p>

                <button
                    className=""

                >Vaciar Carrito</button>
            </div>
        </div>
    )
}
