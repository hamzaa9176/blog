import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = () => {
  
  const router = useRouter();
 const {slug} = router.query;

return <div className={styles.container}>
    <main className={styles.main}>
      <h1>Title: {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti nam! Delectus accusamus accusantium quibusdam dolorum expedita iure recusandae, commodi veritatis est blanditiis dolor?
      </div>
      


    </main>
  </div>;
};

export default Slug;