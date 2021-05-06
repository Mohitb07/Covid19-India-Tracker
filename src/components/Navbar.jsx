import React from 'react'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <a href="/">COVID19 <span>INDIA</span></a>
        </div>
    )
}

export default Navbar
