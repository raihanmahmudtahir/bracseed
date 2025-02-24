import React from 'react';
import Title from '../ui/Title';
import Container from '../ui/Container';
import PurposeCard from '../PurposeCard';
import Flex from '../ui/Flex';
import PurposeCard2 from '../PurposeCard2';
import PurposeCard3 from '../PurposeCard3';
import PurposeCard4 from '../PurposeCard4';

const Purpose = () => {
  return (
    <section>
      <Title className="text-[#006838] mt-[100px] text-center">
        Our Purpose
      </Title>
      <Container>
        <Flex className="flex-wrap justify-center mt-10 gap-6">
          <PurposeCard />
          <PurposeCard2 />
          <PurposeCard3 />
          <PurposeCard4 />
        </Flex>
      </Container>
    </section>
  );
};

export default Purpose;
