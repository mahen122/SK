import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="text-center py-4 font-bold text-xl">Admin</div>
      <nav className="flex-1">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `block px-4 py-2 ${isActive ? "bg-blue-600" : "hover:bg-blue-700"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/mahasiswa"
          className={({ isActive }) =>
            `block px-4 py-2 ${isActive ? "bg-blue-600" : "hover:bg-blue-700"}`
          }
        >
          Mahasiswa
        </NavLink>
      </nav>
    </aside>
  );
}
