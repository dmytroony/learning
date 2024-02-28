import Gallery from "@/app/components/Gallery";
import Bio from "@/app/components/Bio";
import List from "@/app/components/People";
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Bio />

      <div className={styles.center}>
        <Gallery />
      </div>

      <div className={styles.grid}>
        <List />
      </div>
    </main>
  )
}
