import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export const metadata: Metadata = {
    title: 'Lamamia About',
    description: 'This is About Page',
}


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/14036625/pexels-photo-14036625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className={styles.img} fill={true} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum dolorum et, dolorem vero iure iste sit quaerat fugit, nesciunt sunt voluptas provident quasi eligendi eius totam rem amet. Ipsa?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum dolorum et, dolorem vero iure iste sit quaerat fugit, nesciunt sunt voluptas provident quasi eligendi eius totam rem amet.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum dolorum et, dolorem vero iure iste sit quaerat fugit, nesciunt sunt voluptas provident quasi eligendi eius totam rem amet.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptate omnis. Vero neque veniam quo nostrum veritatis delectus sit doloremque? Dicta corporis fuga facilis aut, quo deleniti ipsam asperiores repellat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptate omnis. Vero neque veniam quo nostrum veritatis delectus sit doloremque? Dicta corporis fuga facilis aut, quo deleniti ipsam asperiores<br /><br />
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>

        </div>
    )
}

export default About