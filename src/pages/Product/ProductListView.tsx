import ProductCard from '../../components/Product/ProductCard'

export default function ProductListView() {
    return (
        <main className="w-3/4 max-w-3/4 mx-auto bg-slate-700 grid grid-cols-4 gap-1">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </main>
    )
}
