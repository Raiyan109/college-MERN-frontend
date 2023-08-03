import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import CollegeInfoProvider from "./context/CollegeInfoProvider"


function App() {

  return (
    <div>
      <CollegeInfoProvider>
        <RouterProvider router={routes} />
      </CollegeInfoProvider>
    </div>
  )
}

export default App
