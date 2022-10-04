import React from 'react';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__Logo}>
        <img
          className={styles.Navbar__Logo}
          src="https://images.cults3d.com/CE5ZyuUKRxLM1-Hqjyg448LRnuQ=/https://files.cults3d.com/uploaders/20952150/illustration-file/3ff506ac-83d8-40ab-b474-3ebc2c727b7a/pngwing.com-2022-02-20T081900.534.png"
          alt="Movie Logo"
        />
        <h1>Movie Lurker</h1>
      </div>

      <ul className={styles.Navbar__Links}>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

export default Navbar;
