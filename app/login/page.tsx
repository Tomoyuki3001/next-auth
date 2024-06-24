import Link from "next/link";

const Login = () => {
  return (
    <div className="justify-center mt-16">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center text-gray-500 mt-4">- or -</div>
        <Link
          className="block text-center text-blue-500 hober:underline mt-2"
          href="/register"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
