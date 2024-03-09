import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"

function App() {

  // getData 

  const apiData = () => {
    fetchDataFromApi('/movie/popular', { page: 3 })
      .then((resp) => {
        console.log(resp);
      })
  };

  useEffect(() => {
    apiData();
  }, [])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
