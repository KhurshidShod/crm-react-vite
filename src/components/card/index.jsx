import styles from './Card.module.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import PropTypes from 'prop-types'
import { memo } from 'react'

function Card({ prod, deleteProd, incQuantity, editProd }) {
  console.log("Card")
  return (
    <div className={styles.card}>
        <div>
        <h1>{prod.name}</h1>
        <p>${prod.price * prod.quantity}</p>
        </div>
        <p>{prod.description}</p>
        <div>
            <h4>{prod.category}</h4>
            <div>
                <button onClick={() => incQuantity('minus', prod.id)}><FaMinus size={20} /></button>
                <h3>{prod.quantity}</h3>
                <button onClick={() => incQuantity('plus', prod.id)}><FaPlus size={20} /></button>
            </div>
        </div>
        <div>
        <button onClick={editProd}>Edit</button>
        <button onClick={deleteProd}>Delete</button>
        </div>
    </div>
  )
}

Card.propTypes = {
  deleteProd: PropTypes.func,
  editProd: PropTypes.func,
  incQuantity: PropTypes.func,
  prod: PropTypes.object
}

const memoCard = memo(Card)

export default memoCard