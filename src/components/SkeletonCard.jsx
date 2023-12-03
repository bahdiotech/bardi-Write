import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
  return (
      <div className="  ">
          <div className="m-4">
              <h2 className="font-bold  text-xl my-4"> <Skeleton baseColor="gray"  /> </h2>

              <p><Skeleton baseColor="gray" count={3}/> </p>
              <p className="flex items-center my-8 justify-between">
                  <span className=" text-sm  rounded-sm px-4"> <Skeleton baseColor="gray"  width="80px" /></span>

              </p>
          </div>
      </div>
  )
}
