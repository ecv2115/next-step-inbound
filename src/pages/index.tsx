import { DefaultLayout } from '@layouts/defaultLayout';
import Hero from '@components/landing/Hero';
import Mission from '@components/landing/Mission';
import DescriptLink from '@components/landing/DescriptLink';

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
        <section>
          <DescriptLink
            heading="Campus Representatives"
            title="Our reps have been  and are here to help"
            description="Chat with passionate service members who have been in your boots."
            buttonText="Meet our Reps"
            buttonHref="/"
            imageSrc="/images/CampusReps.png"
            imageLocation="right"
            backgroundColor="#FFFFFF"
          />
        </section>
        <section>
          <DescriptLink
            heading="Education"
            title="The things we wish we whouls have known"
            description="We've built a library of on-demand resources to support you through your college admission process."
            buttonText="Explore Education"
            buttonHref="/"
            imageSrc="/images/resources.png"
            imageLocation="left"
            backgroundColor="#FFFFFF"
          />
        </section>
        <section>
          <DescriptLink
            heading="Discord"
            title="Come connect with your community"
            description="Join us on our Discord to chat, ask questions, and connect with our NSI community."
            buttonText="Visit Discord"
            buttonHref="/"
            imageSrc="/images/Discord.png"
            imageLocation="right"
            backgroundColor="#FAFAFA"
          />
        </section>
      </main>
    </DefaultLayout>
  );
}
