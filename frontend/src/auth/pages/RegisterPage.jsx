
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Backend registration API will be connected here.
    alert("Registration UI ready. Backend API connection is pending.");
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join CampusConnect and start building your skills."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </>
      }
    >

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-3 top-3.5 text-slate-400" size={19} />

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-slate-400" size={19} />

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
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
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              required
              className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
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

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-slate-400" size={19} />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              required
              className="w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3.5 text-slate-400"
            >
              {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Create Account
        </button>

        <p className="text-xs text-center text-slate-500">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>

      </form>

    </AuthLayout>
  );
}

export default RegisterPage;
