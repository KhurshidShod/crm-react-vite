import { memo } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

function Header({ openModal }) {
  const navigate = useNavigate()
  console.log('Header')
  return (
    <header>
    <div className="container">
      <nav className={styles.nav}>
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

Header.propTypes = {
  openModal: PropTypes.func
}

const memoHeader = memo(Header)

export default memoHeader