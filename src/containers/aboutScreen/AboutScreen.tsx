import React from 'react';

import { Card } from '../../components/common/card/Card';

export const AboutScreen = (props: any) => {
  return (
    <div data-test="about-screen">
      <Card
        data-test="about-screen-welcome-card"
        title="Welcome to About !"
        paragraph="Example content."
      />
    </div>
  );
};
