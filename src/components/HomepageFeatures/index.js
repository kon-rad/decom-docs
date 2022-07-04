import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frictionless',
    Svg: require('@site/static/img/illustrations/1.png').default,
    description: (
      <>
        Create your on-chain shop and upload digital goods to sell in minutes, without asking for permission.
      </>
    ),
  },
  {
    title: 'Decentralized',
    Svg: require('@site/static/img/illustrations/3.png').default,
    description: (
      <>
        All of the store, menu item, transaction and file data are stored on chain. The digital goods are only accessible by the owner.
      </>
    ),
  },
  {
    title: 'Interoperable',
    Svg: require('@site/static/img/illustrations/4.png').default,
    description: (
      <>
        Your digital good can be incorporated into any game or software platform.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
