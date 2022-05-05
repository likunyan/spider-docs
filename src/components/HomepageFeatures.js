import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '快速迭代',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        每周至少更新一次。
      </>
    ),
  },
  {
    title: '快速支持',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          时刻在线，有问题可以随时联系。
      </>
    ),
  },
  {
    title: '联系方式',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        QQ：327125038
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
