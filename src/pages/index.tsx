import { DefaultLayout } from '@layouts/defaultLayout';
import Hero from '@components/landing/Hero';
import Mission from '@components/landing/Mission';
import DescriptLink from '@components/landing/DescriptLink';
import Blog from '@components/landing/Blog';
import { BlogData } from '@components/landing/BlogCard';
import DonorsAndPartners from '@components/landing/DonorsAndPartners';

export default function Home() {
  const blogArray: BlogData[] = [
    {
      title: 'Embracing Campus Culture',
      author: 'Mark Griego',
      date: 'April 26, 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      id: '1',
    },
    {
      title: 'Never assume',
      author: 'Mark Griego',
      date: 'April 26, 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      id: '2',
    },
    {
      title: 'My intersectional',
      author: 'Mark Griego',
      date: 'April 26, 2021',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      id: '3',
    },
  ];

  return (
    <DefaultLayout>
      <main className="font-sans">
        <section id="hero">
          <Hero />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="campus-representatives">
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
        <section id="donors">
          <DonorsAndPartners />
        </section>
        <section id="education">
          <DescriptLink
            heading="Education"
            title="The things we wish we would have known"
            description="We've built a library of on-demand resources to support you through your college admission process."
            buttonText="Explore Education"
            buttonHref="/"
            imageSrc="/images/resources.png"
            imageLocation="left"
            backgroundColor="#FFFFFF"
          />
        </section>
        <section id="discord">
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
        <section id="blog">
          <Blog blogPosts={blogArray} />
        </section>
      </main>
    </DefaultLayout>
  );
}
