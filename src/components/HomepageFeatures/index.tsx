import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">> | undefined;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Concepts",
    Svg: undefined,
    description: <>On Ocean architecture, network deployments, and more.</>,
  },
  {
    title: "Tutorials",
    Svg: undefined,
    description: (
      <>On launching a marketplace, running compute-to-data, and more.</>
    ),
  },
  {
    title: "API references",
    Svg: undefined,
    description: <>Interfaces for libraries and services.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")} onClick={() => {}}>
      {Svg ? (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      ) : null}
      <div className={clsx("text--center padding-horiz--md")}>
        <h3 className="purple-text">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
