import  pageNotFound from "../assets/pageNotFound.jpg";
import { Link } from "react-router-dom";
import { useTitle } from "../hook/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found!")
  return (
    <main>
      <section className="flex flex-col   my-6 items-center">
        <p className="text-4xl font-bold dark:text-white">Page Not found!</p>
        <img className=" md:max-w-[40rem] other:max-w-[20rem] lg:w-[50rem] max320:max-w-[10rem] " src={pageNotFound} alt="page not found" />
        <Link to='/' className="bg-blue-500 other:w-[20rem] md:max-w-[40rem] lg:w-[50rem] max320:max-w-[10rem] text-center font-bold text-white text-xl p-3" >Go Home</Link>
      </section>
    </main>
  )
}
