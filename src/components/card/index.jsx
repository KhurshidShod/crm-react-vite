import styles from './Card.module.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import PropTypes from 'prop-types'

function Card({ id, name, price, category, quantity, description, deleteProd, incQuantity }) {
  return (
    <div className={styles.card}>
        <div>
        <h1>{name}</h1>
        <p>${price}</p>
        </div>
        <p>{description}</p>
        <div>
            <h4>{category}</h4>
            <div>
                <button onClick={() => incQuantity('minus', id)}><FaMinus size={20} /></button>
                <h3>{quantity}</h3>
                <button onClick={() => incQuantity('plus', id)}><FaPlus size={20} /></button>
            </div>
        </div>
        <div>
        <button>Edit</button>
        <button onClick={deleteProd}>Delete</button>
        </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string,
  deleteProd: PropTypes.func,
  incQuantity: PropTypes.func,

}

export default Card