
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

function AuthLayout({ children, title, subtitle, footer }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Brand */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <GraduationCap size={27} className="text-white" />
          </div>

          <span className="text-2xl font-bold text-slate-900">
            Campus<span className="text-indigo-600">Connect</span>
          </span>
        </Link>

        {/* Auth Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-7 sm:p-9">

          <div className="text-center mb-7">
            <h1 className="text-2xl font-bold text-slate-900">
              {title}
            </h1>

            <p className="text-slate-500 text-sm mt-2">
              {subtitle}
            </p>
          </div>

          {children}

        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          {footer}
        </p>

        <p className="text-center text-xs text-slate-400 mt-5">
          © 2026 CampusConnect. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default AuthLayout;
