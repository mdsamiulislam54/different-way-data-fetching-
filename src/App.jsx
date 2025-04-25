
import './App.css'
import Asynchronous from './components/Asynchronous/Asynchronous.jsx'
import ReactQuery from './components/React-Query/ReactQuery.jsx'
import ReactQuery2 from './components/React-Query/ReactQuery2.jsx'
import SimpleFetch from './components/SimpleFetch/SimpleFetch'
import Swr from './components/Swr/Swr.jsx'
import Swr2 from './components/Swr/Swr2.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {


  return (
    <>
      {/* <SimpleFetch/>
      <Asynchronous/> */}
      {/* <Swr/>
      <Swr2/> */}
      <QueryClientProvider client={queryClient}>
        <ReactQuery/>
        <ReactQuery2/>
      </QueryClientProvider>
    
    </>
  )
}

export default App
