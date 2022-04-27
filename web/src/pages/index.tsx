import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, SoundList } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <SoundList />
        </Container>
      </main>
    </>
  );
};

export default Home;
