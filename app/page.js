// pages/index.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const classes = [
  { name: 'SI', friends: ['Doni', 'Restu', 'Krisnaldi', 'Afriza', 'Farkhan'] },
  { name: 'KA', friends: ['Erik', 'Akmal', 'Arie', 'Ayu', 'Dea'] },
  { name: 'BD', friends: ['Falah', 'Andhika', 'Adin', 'Ilham', 'Gina'] }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kawan Terbaik</title>
      </Head>
      <h1 className={styles.title}>Daftar Teman Per Prodi</h1>
      <div className={styles.background}>
        {classes.map((classItem) => (
          <div key={classItem.name} className={styles.classCard}>
            <h2 className={styles.classHeader}>{classItem.name}</h2>
            <p className={styles.subTitle}>Daftar Nama Teman:</p>
            <div className={styles.profileContainer}>
              {classItem.friends.map((friend) => (
                <div key={friend} className={styles.profileWrapper}>
                  <img src={`/profiles/${friend}.jpg`} alt={friend} className={styles.profilePic} />
                  <p className={styles.profileName}>{friend}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
