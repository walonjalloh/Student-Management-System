import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(false);

  function handleMobileMenu() {
    setIsOpened(!isOpened);
  }
  return (
    <header className="sticky top-2 z-50 w-full">
      <nav>
        <div className="flex flex-row items-center mx-4 my-2 justify-between">
          <div>
            <Link to='/'><img src={logo} alt="Logo"  className="text-blue-400 w-[200px]"/></Link>
          </div>
          {isAuthenticated ? (
            <div className="hidden md:flex flex-row gap-4 items-center">
              <Button className="bg-blue-400 bg-clip-text text-transparent font-bold text-xl hover:rounded-full hover:bg-blue-600 py-1">Dashboard</Button>
              <Button className="font-bold text-xl hover:rounded-full py-1">logout</Button>
            </div>
          ) : (
            <div className="hidden md:flex flex-row gap-4 items-center">
              <Button className="bg-blue-400 bg-clip-text text-transparent hover:bg-blue-600 font-bold text-xl hover:rounded-full py-1">register</Button>
              <Button className=" font-bold text-xl hover:rounded-full py-2"><Link to='/login'>login</Link></Button>
            </div>
          )}
          <div className="md:hidden">
            <Menu onClick={handleMobileMenu} />
          </div>
        </div>
      </nav>
      {isOpened && (
        <div className="md:hidden w-full mt-2">
          {isAuthenticated ? (
            <div className="flex flex-col mx-4 gap-2">
              <Button className="bg-blue-400 bg-clip-text hover:bg-blue-600 text-transparent font-bold text-xl hover:rounded-full py-1">Dashboard</Button>
              <Button className="font-bold text-xl hover:rounded-full py-1">logout</Button>
            </div>
          ) : (
            <div className="flex flex-col mx-4 gap-2">
              <Button className="bg-blue-400 hover:bg-blue-600 bg-clip-text text-transparent font-bold text-xl hover:rounded-full py-1">register</Button>
              <Button className="font-bold text-xl hover:rounded-full py-1"><Link to='/login'>login</Link></Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
