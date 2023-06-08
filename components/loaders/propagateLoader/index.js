import { PropagateLoader } from 'react-spinners'
import styles from './styles.module.scss'


export default function PropagateLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
        <PropagateLoader color="#2f82ff" loading={loading}/>
    </div>
  )
}
