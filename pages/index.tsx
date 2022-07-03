import type { NextPage } from 'next'
import CategoriesBar from '../components/Organisms/CategoriesBar'
import MainPageTile from '../components/Molecules/MainPageTile'
import MainSearcher from '../components/Organisms/MainSearcher'
import NavbarComponent from '../components/Organisms/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <NavbarComponent/>
      <CategoriesBar/>
      <MainSearcher/>
      <div className='tile'>
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
