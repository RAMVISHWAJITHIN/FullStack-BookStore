import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
export default function LoginPage() {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleGoogleSignIn=()=>{

    }
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="p-8 rounded-lg shadow-neumorphism w-96 bg-white">
                <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                        {...register("email", { required: true })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address"
                            className="w-full p-3 rounded-lg bg-gray-200 shadow-inner-neumorphism focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                        {...register("password", { required: true })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg bg-gray-200 shadow-inner-neumorphism focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold shadow-neumorphism hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center font-medium mt-6 text-sm text-gray-700">
                    Haven't an account?{' '}
                    <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Please Register
                    </Link>
                </p>
                {/* Google button */}
                <div className="mt-4">
                    <button onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>
                <p className="mt-5 text-center text-gray-500 text-xs">
                    © 2025 Book Store. All rights reserved.
                </p>
            </div>
        </div>
    );
}
