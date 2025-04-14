import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <nav className="h-16 flex items-center justify-between px-12 border-b border-gray-200">
        {/* //TODO: Adicionar logo */}
        <h1 className="text-3xl font-bold text-slate-500">logo</h1>
        <ul>
          <li className="inline-block">
            <Link className="text-slate-500 hover:text-slate-700 transition ease-in-out" href='/'>Início</Link>
          </li>
          <li className="inline-block ml-6">
            <Link className="text-slate-500 hover:text-slate-700 transition ease-in-out" href='/about'>Sobre</Link>
          </li>
          <li className="inline-block ml-6">
            <Link className="text-slate-500 hover:text-slate-700 transition ease-in-out" href='/contact'>Contato</Link>
          </li>
        </ul>
        <Link className=" text-white rounded-md px-4 py-2 bg-slate-600 hover:bg-slate-700 transition ease-in-out" href='login'>Login</Link>
      </nav>
      <main className="md:px-12 py-8">
        <h1 className="text-3xl font-bold">Landing Page</h1>
      </main>
    </div>
  );
}
