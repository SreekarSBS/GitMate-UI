import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import GetStarted from "./components/GetStarted"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Signup from "./components/Signup"
import PrivacyPolicy from "./components/Privacy"
import TermsAndConditions from "./components/TC"
import CancellationRefundPolicy from "./components/Cancellation"
import ShippingDeliveryPolicy from "./components/Shipping"
import ContactUs from "./components/Contact"
import Premium from "./components/Premium"
import Chat from "./components/Chat"



function App() {

  return (
    <>
      <Provider store = {appStore} >
     <BrowserRouter  >
    
        <Routes >
          <Route path = "/" element = {<Body />} >
          <Route path = "/" element = {<Feed />} />

          <Route path = "/auth" element = {<GetStarted />} />
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/profile" element = {<Profile />}/>
            <Route path = "/connections" element = {<Connections />} />
            <Route path = "/requests" element = {<Requests />} />
            <Route path = "/privacy" element = {<PrivacyPolicy />} />
            <Route path = "/terms" element = {<TermsAndConditions />} />
            <Route path = "/cancellation" element = {<CancellationRefundPolicy />} />
            <Route path = "/shipping" element = {<ShippingDeliveryPolicy />} />
            <Route path = "/contact" element = {<ContactUs />} />
            <Route path = "/premium" element = {<Premium />} />
            <Route path = "/chat/:targetUserId" element = {<Chat />} />
          </Route>
        </Routes>
       
     </BrowserRouter>
     </Provider>
    </>
  )
}

export default App
