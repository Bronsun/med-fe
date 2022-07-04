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
      <div className="hero mainSearcherPanel is-halfheight">
      <MainSearcher/>
      </div>
      <div className="reklama" style={{height:"120px"}}/>
      <div className='tile mainPageTilesWrapper'>
        <div className="tile reklama mainPageTile"/>
        <MainPageTile iconPath="/tileIcons/search.png" mainText='Znajdź specjalistę NFZ' text='Masz skierowanie? Znajdź najbliższego sobie specjalistę.'/>
        <MainPageTile iconPath="/tileIcons/queue.png" mainText='Sprawdź kolejkę' text='Nie czekaj w kolejkach do specjalistów! Znajdź bezkolejkowe miejsca.'/>
        <MainPageTile iconPath="/tileIcons/find-clinic.png" mainText='Wyszukaj przychodnię' text='Wyszukaj najbliższą przychodnię NFZ.'/>
        <div className="tile reklama mainPageTile"/>
      </div>
    </div>
  )
}

export default Home
