import Intro from '@/components/intro'
import Venues from '@/components/venues'
import NewsletterForm from '@/components/newsletter-form'
import AudioPlayer from '@/components/AudioPlayer'
import Carousel from '@/components/Carousel';


export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-5xl'>
        <Intro />

        <Venues />

        <AudioPlayer />

        <Carousel />

        <NewsletterForm />
      </div>
    </section>
  )
}
