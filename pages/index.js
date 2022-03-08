import Head from 'next/head';
import styled from 'styled-components';
import Cat from '../svgs/cat_2.svg';

const Title = styled.h1`
  font-size: 20px;
  color: red;
`;

const value = '400px';

export default function Home() {
  return (
    <>
      <Head>
        <title>Page One</title>
      </Head>
      <Title>Resize SVG in next.js</Title>
      <Cat height={value} width={value} />
    </>
  );
}
