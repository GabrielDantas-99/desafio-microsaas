import { handleAuth } from "@/app/actions/handle-auth";
import Logo from "@/app/components/logo";
import LogoutIcon from "@/app/components/logout-icon";
import { auth } from "@/app/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const session = await auth();
    if (!session) {
        redirect('/login');
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex items-center justify-between border-b border-gray-200 w-full px-12 py-4">
                <Logo />
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Image src={'/user.png'} alt="Imagem de perfil" width={32} height={32} />
                        <div className="leading-4">
                            <p className="font-semibold">{session?.user?.name ? session?.user?.name : 'Acesso Restrito!'}</p>
                            <small>{session?.user?.email ? session?.user?.email : 'Acesso Restrito!'}</small>
                        </div>
                    </div>
                    {session?.user?.email && (
                        <form action={handleAuth}>
                            <button type="submit" className="flex items-center gap-2 bg-red-500/75 hover:bg-red-500 text-white rounded-md px-4 py-2 transition ease-in-out cursor-pointer">
                                <LogoutIcon />
                                Logout
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <main className="md:px-12 py-8 flex flex-col items-center justify-center flex-1">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-4">Welcome to the dashboard!</p>
            </main>
        </div>
    );
}