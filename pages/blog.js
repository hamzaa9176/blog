import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {

  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs')
    .then(response => response.json())
    .then((data)=>{
      console.log(data)
    })
  },[])
  return (
    <main className={styles.main}>
    <div>
          <h2 className={styles.h2}>All Blogs</h2>
          <div>
            <Link href={'blogpost/learn-javascript'}><h3 className={styles.h3}>How to learn JavaScript in 2022?</h3></Link>
            <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
  )
}

export default blog
