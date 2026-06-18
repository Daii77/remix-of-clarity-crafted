import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills & Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/passions", label: "Passions" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-primary">
            <span className="w-9 h-9 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground">
              <Network className="w-5 h-5" />
            </span>
            <span className="text-lg">Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 rounded-md text-sm font-medium",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-secondary"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Network & Communication Systems Engineer · University of Hail
        </div>
      </footer>
    </div>
  );
};

export default Layout;
