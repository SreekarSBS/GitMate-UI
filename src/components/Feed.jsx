import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed, addPage } from "../utils/feedSlice"
import { useEffect, useState } from "react"
import SwipeCards from "./SwipeCards"

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);
  const dispatch = useDispatch()

 console.table(feed);

  useEffect(() => {
   
    getFeed(page)
  },[page])


  const getFeed = async(page) => {
    
    try
   { 
    const res = await axios.get(BASE_URL + "/user/feed?limit=10&page="+page,{withCredentials:true})
    // console.table("Feed hello" + res.data.data);
    const newCards = res?.data?.data 
    if(newCards.length === 0){
       setHasMore(false)
       return;
    }
      console.log("page" + page);
      if(page == 1)
      dispatch(addFeed(newCards)); // Append feed on next pages
    else
    dispatch(addPage(newCards));
  }
  catch(err){
    console.log("Failed to load the user feed " + err.message)
  }
  }

  const handleCardsEmpty = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };
  return ( 
    feed ? 
    <div>
    <SwipeCards cardData = {feed}  onEmpty={handleCardsEmpty}   />
   
    </div>
    :(
    <div
      className="grid h-[80vh] w-screen place-items-center select-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='1' stroke='%23d4d4d4' stroke-opacity='0.2'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
       
      }}
    >
    <div className="text-center text-gray-100 text-xl font-semibold">
      🎉 No more profiles!
    </div>
    </div>
    )
  )
}

export default Feed
