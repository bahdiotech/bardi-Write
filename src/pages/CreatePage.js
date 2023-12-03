import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import { auth, db } from "../firebase/config";
import { useTitle } from "../hook/useTitle";

export const CreatePage = () => {
  const navigate = useNavigate()
  async function handleCreatePost(e){
    const postRef = collection(db, "posts")
    e.preventDefault()
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    }
    await addDoc(postRef, document)
    navigate('/')
  }

  useTitle("Create")


  return (
    <main className="">
      <div className="lg:w-[60rem] ">
      <h1 className="text-center dark:text-white font-bold text-2xl">Add New Post</h1>
        <form onSubmit={handleCreatePost} className="flex max320:min-w-[13rem] other:min-w-[20rem] mt-4 flex-col min-w-[40rem]">
          <input type="text" name="title" required className="shadow-md dark:bg-slate-600 lg:text-xl lg:h-[4rem] rounded-md dark:text-white p-2"  placeholder="Title" />
          <textarea cols="30" required name="description" placeholder="Description" className="shadow-md lg:text-xl lg:h-[30rem] rounded-md dark:bg-slate-600 dark:text-white my-3 placeholder:p-2" rows="10"></textarea>
        <button type="submit" className="bg-green-500 text-white py-3 text-xl hover:bg-green-600 rounded-md my-4">Create</button>
        </form>
      </div>
    </main>
  )
}
