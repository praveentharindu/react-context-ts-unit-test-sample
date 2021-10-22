import React from 'react';

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card = (props: CardProps) => (
  <aside data-test="card-section">
    <h2 data-test="card-title">{props.title}</h2>
    <p data-test="card-paragraph">{props.paragraph}</p>
  </aside>
);

const el = <Card title="Welcome!" paragraph="To this example" />;
