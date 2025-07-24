import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ByCategoryPage from "./Pages/ByCategoryPage"
import DetailsPage from "./Pages/DetailsPage"


function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/byCategory/:categoryID"element={<ByCategoryPage/>} />
      <Route path="/details/:postId" element={<DetailsPage/>}/>
        </Routes>
   
  
  
    </BrowserRouter>
  )
}

export default App
