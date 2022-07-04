import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

let imgIndex = 0;
// let isActive = true;
function HomepageHeader() {
  const [heroBgImage, setHeroBgImage] = useState('eth-purple');
  const [isActive, setIsActive] = useState(false);
  // const [imgIndex, setImgIndex] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);
  const heroImages = ['eth-purple', 'eth-sunset', 'eth-network', 'eth-cubes'];
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const currSlide = initBgSlide();
    setSlideInterval(currSlide);
  }, []);

  const initBgSlide = () => {
    return setInterval(() => {
      setIsActive(false);
      const newImgIndex = (imgIndex + 1) % heroImages.length;
      setHeroBgImage(heroImages[newImgIndex]);
      // setImgIndex(newImgIndex);
      imgIndex = newImgIndex;
      console.log('interval ', imgIndex, newImgIndex);
      setTimeout(() => {  
        setIsActive(true); 
        console.log("timeout isActive: ", isActive);
      }, 500);
    }, 2000);
  }
  console.log("heroBgImage", heroBgImage);
  console.log("imgIndex", imgIndex);
  console.log("isActive", isActive);

  return (
    <header className={
        clsx(
          'hero hero--primary',
          styles.heroBanner,
          styles[heroImages[imgIndex]],
          styles[isActive ? 'hero-active' : '']
        )
      }>
      <div className={clsx('container', styles['hero-inner'])}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            learn more
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="deceontralized commerce protocol">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
