import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
