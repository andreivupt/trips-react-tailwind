import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
            <a href="#" className="block text-xs hover:text-zinc-100 text-zinc-400 truncate">https://www.airbnb.com/rooms/10040054235434324324324324</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
            <a href="#" className="block text-xs hover:text-zinc-100 text-zinc-400 truncate">https://www.airbnb.com/rooms/10040054235434324324324324</a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 w-full justify-center h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
        <Plus className='size-5' />
        Cadastrar novo link
      </button>
    </div>
  );
}