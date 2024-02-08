import './App.css'
import { Home } from './Pages/Home.jsx';
import { About } from './Pages/About.jsx';
import { Page404 } from './Pages/Page404.jsx';
import { Router } from './Router.jsx';
import { Search } from './Pages/Search.jsx';

const appRoutes = [
  {
    path:"/",
    Component:Home
  },
  {
    path:"/about",
    Component:About
  },
  {
    path:"/search/:query",
    Component:Search
  }
]

function App() {
  
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
