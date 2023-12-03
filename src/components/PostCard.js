import React from "react";
import Skeleton from "react-loading-skeleton";
import { deleteDoc, doc } from "firebase/firestore";
import { RiDeleteBin6Line } from "react-icons/ri";
import { auth, db } from "../firebase/config";

export const PostCard = ({ post, setRefresh, refresh }) => {
  const { title, description, author, id } = post

  const isAuth = JSON.parse(localStorage.getItem('isAuth'))
  const handleDelete = async() => {
    const document = doc(db, "posts", id)
    await deleteDoc(document);
    setRefresh(!refresh)
    // window.location.reload()
  }
  

  return (
    <div className=" border-y-2 dark:text-white border-gray-300 shadow-md ">
      <div className="m-4">
        <h2 className="font-bold text-xl my-4"> {!title ? <Skeleton /> : title} </h2>
        <p>{!description ? <Skeleton  />: description}</p>
      <p className="flex items-center my-8 justify-between"> 
          <span className="bg-gray-100 dark:bg-slate-600 text-sm  dark:text-white rounded-sm px-4">{!author.name || author.name  }</span>
        
          {(isAuth && author.id === auth.currentUser.uid) && <span onClick={handleDelete} className="text-red-600 cursor-pointer">{<RiDeleteBin6Line />}</span>}
      </p>
      </div>
    </div>
  )
}
