import React, { useState } from 'react'
import Link from 'next/link'
import styles from './menu.module.css'


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];


const ToggleMenu = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={styles.toggle}>
            <button onClick={() => setShow(!show)}><span className={styles.close}>Menu</span></button>
            {
                show ? <div className={styles.menu}>
                    {
                        links.map(link => (
                            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                        ))
                    }
                </div> : null}
        </div>
    )

}

export default ToggleMenu