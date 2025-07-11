import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import SwipeCards from "./SwipeCards"

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch()
  const getFeed = async() => {
    try
   { 
    const res = await axios.get(BASE_URL + "/user/feed",{withCredentials:true})
    console.log("Feed" + res.data.data);
    
    dispatch(addFeed(res.data.data))
  }
  catch(err){
    console.log("Failed to load the user feed " + err.message)
  }
  }
console.log(feed);

  useEffect(() => {
   
    getFeed()
  },[])

  return ( 
    feed &&
    <div>
    <SwipeCards cardData = {feed} />
    
    </div>
  )
}

export default Feed
