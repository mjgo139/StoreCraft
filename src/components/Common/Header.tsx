import Buscar from "./Buscar";
import Cart from "./Cart";

export default function Header() {
    return (
        <header>
            <section className="bg-black p-5 flex justify-between w-full ">
                <div className="pl-20 flex justify-between w-1/2">
                    <div className="w-28 h-28 rounded-full bg-blue-500 flex justify-center items-center overflow-hidden border">
                        <img
                            src={`/img/tienda_a.jpg`}
                            className="object-cover w-full h-full"
                            alt="Imagen de la tienda"
                        />
                    </div>
                    <div className="flex-none w-1/2 text-white">
                        <h1>[Nombre tienda]</h1>
                        <p>Conocé [Nombre tienda]</p>
                        <p>📍[Asunción] [0981506229]</p>
                        <p>📍[Luque] [0984413913]</p>
                    </div>
                </div>

                <Cart />
            </section>
            <nav className="w-full">
                <ul className=" w-full bg-black flex row-auto justify-between p-5 pl-24 pr-24">
                    <li className="w-16 h-16 bg-teal-500 rounded-full flex justify-center text-center items-center p-10 cursor-pointer">Categoria</li>
                    <li className="w-16 h-16 bg-teal-500 rounded-full flex justify-center text-center items-center p-10 cursor-pointer">Populares</li>
                    <li className="w-16 h-16 bg-teal-500 rounded-full flex justify-center text-center items-center p-10 cursor-pointer">Contacto</li>
                    <li className="w-16 h-16 bg-teal-500 rounded-full flex justify-center text-center items-center p-10 cursor-pointer">Acerca</li>
                </ul>
                <Buscar />
            </nav>
        </header>
    )
}
