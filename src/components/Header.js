import Logo from "../assets/Logo.png";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth") || false))

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true)
      localStorage.setItem("isAuth", true);
      console.log(result);
    })
  }

  function handleLogout() {
    signOut(auth)
    localStorage.setItem("isAuth", false);
    setIsAuth(false)
  }

  return (
    <header className="other:w-full med:w-full max320:w-full medium:w-full">
      <div className="h-[5rem] dark:bg-slate-900 lg:min-w-[80rem] medium:min-w-[60rem] shadow-md flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="w-16 other:w-13 " src={Logo} alt='write Note' />
          <span className="text-2xl other:text-xl dark:text-white other:ml-[-0.4rem] ml-[-0.8rem] max320:text-base font-bold">Bardi-Write</span>
        </Link>
        <div className="flex">
          <NavLink to="/" className="mr-2 py-2 px-4 max320:hidden other:text-base other:px-2 rounded-md text-xl hover:bg-slate-300 bg-slate-200">Home</NavLink>
          {isAuth && <Link to="/create" className=" other:text-base other:px-2 max320:text-sm max320:px-1 max320:p-1 max320:h-8 flex items-center text-xl p-2 bg-green-200 rounded-md mr-2">Create</Link>}
          {isAuth ? <button onClick={handleLogout} className="flex other:text-base other:px-2 mr-4 py-2 hover:bg-blue-900 px-2 max320:text-sm max320:px-1 max320:p-1 max320:h-8 rounded-md text-xl text-white bg-blue-800 items-center"> <span className="mr-2">
            <FaSignOutAlt />
          </span>Logout</button> :
            (<button onClick={handleLogin} className="flex other:text-base other:px-2 mr-4 py-2 hover:bg-blue-900 px-2 rounded-md text-xl text-white bg-blue-800 items-center"> <span className="mr-2">
              <FaGoogle />
            </span>Login</button>)}
        </div>
      </div>
    </header>
  )
}
