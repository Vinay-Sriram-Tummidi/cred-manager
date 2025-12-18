import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Button } from "@credit-manager/ui/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@credit-manager/ui/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@credit-manager/ui/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@credit-manager/ui/components/ui/dropdown-menu";

export default function Navbar() {
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
         
            <>
              <Link to="/gold" className="text-sm hover:text-black">
                Gold and Silver
              </Link>
              <Link to="/secured" className="text-sm hover:text-black">
                Secured Credit Card
              </Link>
              <Link to="/bonds" className="text-sm hover:text-black"></Link>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                 
                  <DropdownMenuTrigger asChild>
                    <Avatar className="rounded-lg">
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>VS</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link to="/dashboard">Dashboard</Link>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button
             
                className="text-white px-3 py-1 rounded"
              >
                Logout
              </Button>
            </>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="p-6">
            <nav className="flex flex-col gap-4 text-lg">
              <Link to="/gold">Gold and Silver</Link>
              <Link to="/secured">Secured Credit Card</Link>
              <Link to="/bonds">Bonds</Link>
              <Button className="w-full mt-4" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}