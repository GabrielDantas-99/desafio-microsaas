import { handleAuth } from "@/app/actions/handle-auth";
import GoogleIcon from "@/app/components/google-icon";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Login page</h1>
            <p className="mt-4">Welcome to the Login page!</p>
            <form action={handleAuth}>
                <button className="border border-gray-300 rounded-md px-4 py-2 flex items-center gap-4 hover:bg-black/5 cursor-pointer transition ease-in-out mt-4" type="submit">
                    <GoogleIcon />
                    Signin with Google
                </button>
            </form>
        </div>
    );
}

export default LoginPage;