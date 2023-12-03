import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { RiRefreshLine } from "react-icons/ri";
import { PostCard } from "../components";
import { SkeletonCard } from "../components/SkeletonCard";
import { db } from "../firebase/config";
import { useTitle } from "../hook/useTitle";

/* eslint-disable react-hooks/exhaustive-deps */

export const HomePage = () => {
  const [refresh, setRefresh] = React.useState(true)
  const [posts, setPosts] = React.useState(new Array(3).fill(false))
  const postsRef = React.useRef(collection(db, 'posts'))
  useTitle('Home')

  React.useEffect(() => {
    async function getposts() {
      const data = await getDocs(postsRef.current)
      setPosts(data.docs.map((document) => ({...document.data(), id: document.id})))
    }
    getposts()
  }, [refresh, postsRef])

  // if(posts) {
  //   return <SkeletonCard/>
  // }

  return (<main>
    <div className="max320:w-max w-screen">
      <button onClick={() => window.location.reload()} className="dark:text-white bg-blue-500 p-2 mb-4 font-bold w-[7rem] flex items-center justify-center rounded-md ml-[40%]"><span>Refresh</span><RiRefreshLine className="text-green-400 ml-1"/> </button>
      {posts && posts.map((post, index) => (post ? <PostCard key={post.id} refresh={refresh} setRefresh={setRefresh} post={post} /> : <SkeletonCard key={index} />))
      }
    </div>
  </main>
  )
}
