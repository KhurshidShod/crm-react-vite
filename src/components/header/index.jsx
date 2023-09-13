import { BsPlusLg } from 'react-icons/bs'
import styles from './Header.module.scss'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Header({ openModal }) {
  const navigate = useNavigate()
  return (
    <header>
    <div className="container">
      <nav>
        <h1>CRM of Products</h1>
        <div>
        <button onClick={openModal}>Add product <span><BsPlusLg size={25} /></span></button>
        <button onClick={() => {
          localStorage.removeItem('auth');
          navigate('/login')
        }}><FiLogOut size={25} /></button>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Header