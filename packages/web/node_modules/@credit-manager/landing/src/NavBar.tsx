import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Button, Avatar, AvatarFallback, AvatarImage } from "@credit-manager/ui";
import { useContext } from "react";
import { GlobalContext } from "@credit-manager/core";

// Note: You'll need to add Sheet and DropdownMenu components to the UI package
// For now, this is a simplified version without those components

export function Navbar() {
  const ctx = useContext(GlobalContext);
  if (!ctx) return null;

  const { state, dispatch } = ctx;
  return (
    <header className="w-full bg-white border-b fixed">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          CredCloud
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="https://www.etmoney.com/mutual-funds/explore"
            target="_blank"
            className="text-sm hover:text-black"
          >
            Explore
          </a>
          {state.user ? (
            <>
              <Link to="/gold" className="text-sm hover:text-black">
                Gold and Silver
              </Link>
              <Link to="/secured" className="text-sm hover:text-black">
                Secured Credit Card
              </Link>
              <Link to="/bonds" className="text-sm hover:text-black">
                Bonds
              </Link>
              <div className="flex items-center gap-2">
                <span>
                  Hello, <strong>{state.user}</strong>
                </span>
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
              </div>
              <Button
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="text-white px-3 py-1 rounded"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => dispatch({ type: "SET_USER", payload: "Vinay" })}
              className=" text-white px-3 py-1 rounded"
            >
              Login
            </Button>
          )}
        </nav>

        {/* Mobile Menu */}
        <Menu className="h-6 w-6 md:hidden" />
      </div>
    </header>
  );
}
