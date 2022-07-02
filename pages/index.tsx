import type { NextPage } from 'next'
import CategoriesBar from '../components/CategoriesBar'
import MainPageTile from '../components/MainPageTile'
import MainSearcher from '../components/MainSearcher'
import NavbarComponent from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <NavbarComponent/>
      <CategoriesBar/>
      <MainSearcher/>
      <div>
        <MainPageTile/>
        <MainPageTile/>
        <MainPageTile/>
        <MainPageTile/>
        <MainPageTile/>
      </div>
    </div>
  )
}

export default Home
