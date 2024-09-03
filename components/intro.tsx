import Image from 'next/image'
import Link from 'next/link'
import authorImage from '@/public/images/authors/jodie.jpeg'
import { Button } from './ui/button'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='text-3xl font-bold'>Jodie Kennedy.</h1>
        <h1 className='mt-3 text-1xl font-bold'>Vocalist (SAG-AFTRA).</h1>
        <p className='mt-3 font-light text-muted-foreground'>
            Called “world class” by renowned artist John Fogerty. Grew
            up in Athens, Georgia, where she started singing in choruses and musicals in the 
            4th grade. Chosen as one of 8 sopranos to attend Georgia Governor’s Honors Program.
            Received an offered a vocal scholarship, while singing in two of the university’s top choral groups. 
            She also attended Berklee College of Music, with a vocal scholarship.
        </p>
        <Button asChild className='mt-3'>
          <Link href="/posts/about-jodie">Learn More</Link>
        </Button>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Jodie Kennedy'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}