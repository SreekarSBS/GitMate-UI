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
  const getFeed = async(pageNo = 1) => {
    
    try
   { 
    const res = await axios.get(BASE_URL + "/user/feed?limit=10&page="+pageNo,{withCredentials:true})
    // console.table("Feed hello" + res.data.data);
    const newCards = res?.data?.data || []
    if(newCards.length === 0){
       setHasMore(false)
       return;
    }

    if(res.data.data){
      if(pageNo == 1) 
       dispatch(addFeed(newCards))
      else 
        dispatch(addPage(newCards))
    }


  }
  catch(err){
    console.log("Failed to load the user feed " + err.message)
  }
  }
 console.table(feed);

  useEffect(() => {
   
    getFeed(page)
  },[page])

  const handleCardsEmpty = () => {
   if(hasMore) setPage(prevPage => prevPage+1)
  }

  return ( 
    feed && 
    <div>
    <SwipeCards cardData = {feed} onEmpty = {handleCardsEmpty} />
    
    </div>
  )
}

export default Feed
