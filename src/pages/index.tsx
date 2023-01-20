import { DefaultLayout } from '@layouts/defaultLayout';
import Hero from '@components/landing/Hero';
import Mission from '@components/landing/Mission';

export default function Home() {
  return (
    <DefaultLayout>
      <main className="font-sans">
        <section>
          <Hero />
        </section>
        <section>
          <Mission />
        </section>
      </main>
    </DefaultLayout>
  );
}
