import Link from "next/link";

const SignIn = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
