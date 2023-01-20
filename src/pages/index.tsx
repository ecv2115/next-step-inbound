import { DefaultLayout } from '@layouts/defaultLayout';
import Hero from '@components/landing/Hero';

export default function Home() {
  return (
    <DefaultLayout>
      <main className='font-sans'>
        <section>
          <Hero />
        </section>
      </main>
    </DefaultLayout>
  );
}
