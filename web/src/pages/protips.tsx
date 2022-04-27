import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Modal, Navbar, SoundList } from '../components';

const Protips: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sounds.io | The best new sounds</title>
        <meta name='description' content='The best new sounds' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container>
          <h1 className='text-9xl'>Protips</h1>
        </Container>
      </main>
    </div>
  );
};

export default Protips;
