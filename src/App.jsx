import { BrowserRouter, Routes, Route } from "react-router-dom";

//task import layout
import DefaultLayout from "./layouts/DefaultLayout";

//task importo le pages
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route Component={DefaultLayout}>

            {/* importo le pages */}
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={SinglePost} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
