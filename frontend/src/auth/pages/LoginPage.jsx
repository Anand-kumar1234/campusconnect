
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication will be connected here.
    alert("Login UI ready. Backend API connection is pending.");
  };

  return (
    <AuthLayout
      title="Welcome Back!"
      subtitle="Login to continue your learning journey."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Create Account
          </Link>
        </>
      }
    >

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-slate-400" size={19} />

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={19} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-slate-400"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Login to Account
        </button>

      </form>

    </AuthLayout>
  );
}

export default LoginPage;
