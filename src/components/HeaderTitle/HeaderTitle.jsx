import React from 'react'
import styles from './HeaderTitle.module.css'

const HeaderTitle = ({ children }) => {
    return <div className={styles.Header}>{children}</div>
}

export default HeaderTitle
