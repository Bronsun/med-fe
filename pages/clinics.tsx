import type { NextPage } from 'next'
import SelectSearchComponent from '../components/Atoms/SelectSearchComponent'
import CategoriesBar from '../components/Organisms/CategoriesBar'
import NavbarComponent from '../components/Organisms/Navbar'

interface ClinicsList{
    
}

const ClinicsList: NextPage = () => {
  return (
    <div>
      <NavbarComponent/>
      <CategoriesBar/>
      <SelectSearchComponent/>
    </div>
  )
}

export default ClinicsList
