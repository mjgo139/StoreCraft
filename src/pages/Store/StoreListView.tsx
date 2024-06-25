import StoreCard from "../../components/Store/StoreCard";

export default function StoreListView() {
  return (
    <main className="w-1/2 max-w-3/4 mx-auto bg-slate-700 grid grid-cols-3 gap-1">
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
        </main>
  )
}
