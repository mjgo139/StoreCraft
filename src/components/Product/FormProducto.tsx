
export default function FormProducto() {
    return (
        <div className="flex items-center justify-center p-12">

            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form
                    className="py-6 px-9"
                    action="https://formbold.com/s/FORM_ID"
                    method="POST"
                >
                    <div className="mb-5">
                        <label
                            htmlFor="descripcion"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Descripcion:
                        </label>
                        <input
                            type="text"
                            name="descripcion"
                            id="descripcion"
                            placeholder="Descripcion del Producto"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="precio"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Precio:
                        </label>
                        <input
                            type="number"
                            name="precio"
                            id="precio"
                            placeholder="Precio del Producto"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className="mb-6 pt-4">
                        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                            Seleccionar Imagen del Producto
                        </label>

                        <div className="mb-8">
                            <input type="file" name="file" id="file" className="sr-only" />
                            <label
                                htmlFor="file"
                                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                            >
                                <div>
                                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                        Arrastrar el archivo aqui
                                    </span>
                                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                        O
                                    </span>
                                    <span
                                        className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                    >
                                        Buscar
                                    </span>
                                </div>
                            </label>
                        </div>



                        
                    </div>

                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Cargar Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
