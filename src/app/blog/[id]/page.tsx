import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache",
    })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}


const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ducimus incidunt deserunt quam fuga tempora odit, eligendi quidem et. Magni asperiores odio quam, tempora sunt quibusdam dicta illo laborum ea!
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg"
                        alt=""

                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consectetur temporibus itaque perspiciatis tenetur architecto, ipsam, tempore minima aspernatur quia nulla error corrupti possimus voluptates repellendus? Quisquam deserunt officia id.
                </p>
            </div>
        </div>
    )
}

export default BlogPost