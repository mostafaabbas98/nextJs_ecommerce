import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { runFireWork } from '../lib/firework';
import styles from '../styles/Success.module.css';

const Success = () => {
  useEffect(() => {
    runFireWork();
  }, []);
  return (
    <div className={styles.success_container}>
      <BsFillBagCheckFill size="3rem" />
      <h2>Thank You For Your Order!</h2>
      <p>
        if you have any question, please email me:
        <a href="mailto:mostafaabbas98@outlook.com" target="_blank">
          mostafaabbas98@outlook.com
        </a>
      </p>
      <Link href="/">
        <button type="button" className="btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Success;
