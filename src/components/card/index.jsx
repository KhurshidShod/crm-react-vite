import styles from './Card.module.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'

function Card({ id, name, price, category, quantity, description }) {
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
                <button><FaMinus size={20} /></button>
                <h3>{quantity}</h3>
                <button><FaPlus size={20} /></button>
            </div>
        </div>
        <div>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Card