
import "./App.css";
import Header from "./Components/Header"
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import Maincontainer from "./Components/Maincontainer";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincontainer/>},{
      path:"watch",
      element:<WatchPage/>
    }  ]

}])
function App() {
  return (
  <Provider store={store}>
  <div>
     <Header/>
     <RouterProvider router={appRouter}/>
  </div>
    </Provider>
  );
}

export default App;
