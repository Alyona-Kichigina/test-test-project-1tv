import {Navigate, Redirect, Route, Routes, useNavigate, Suspense} from "react-router-dom"
import ListVideo from "./Pages/ListVideo";
import PageVideo from "./Pages/PageVideo";

function App() {
  return (
   <div className="flex-container bg-greyDarken-3">
    <Routes>
      <Route
        path='/list-video'
        element={<ListVideo/>}
      />
      <Route
        path='/page-video/:id'
        element={<PageVideo/>}
      />
    </Routes>
   </div>
  );
}

export default App;
