import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export default function Intro() {
    return (
      <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
        <div className='mt-2 flex-1 md:mt-0'>
          <h1 className='mt-3 text-1xl font-bold'>Professional Achievements & Collaborations.</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Selection of Locations Performed</AccordionTrigger>
                <AccordionContent>
                    •	Royal Albert Hall (London)<br/>
                    •	Carnegie Hall (NYC)<br/>
                    •	Beacon Theater (NYC)<br/>
                    •	South Street Seaport (NYC)<br/>
                    •	New Jersey Performing Arts Center (NJPAC)<br/>
                    •	Ryman Auditorium (Nashville)<br/>
                    •	Auditorium Theater (Chicago)<br/>
                    •	Stagecoach Festival, Main Stage (Indio, CA)<br/>
                    •	Walt Disney Concert Hall (Los Angeles, CA)<br/>
                    •	Hollywood Bowl<br/>
                    •	Broad Theater<br/>
                    •	Wiltern Theater<br/>
                    •	Nokia Theater<br/>
                    •	Shrine Auditorium<br/>
                    •	Kodak Theater<br/>
                    •	Hollywood Palladium<br/>
                    •	Crystal Cathedral<br/>
                    •	Santa Barbara Bowl (CA)<br/>
                    •	Notre Dame D’Auteuil (Paris, France)<br/>
                    •	Variety of locations (Florence, Italy)<br/>
                    •	Omote Sando, (Tokyo)<br/>
                </AccordionContent>
             </AccordionItem>
             <AccordionItem value="item-2">
                <AccordionTrigger>Selection of Artists Worked With</AccordionTrigger>
                <AccordionContent>
                    •	John Fogerty<br/>
                    •	Al Jarreau<br/>
                    •	Barry Manilow<br/>
                    •	Kenny Rogers<br/>
                    •	Sarah Brightman<br/>
                    •	Buddy Miller<br/>
                    •	Kenny Aronof<br/>
                    •	Zubin Mehta<br/>
                    •	Donald Neuen<br/>
                    •	Esa-Pekka Salonen<br/>
                    •	Chris Walden Big Band<br/>
                    •	Tim Davis<br/>
                    •	Lenny Waronker (Producer)<br/>
                    •	T-Bone Burnett (Producer)<br/>
                    •	New York City Master Chorale<br/>
                    •	Angeles Chorale, Los Angeles<br/>
                    •	Metropolitan Master Chorale<br/>
                    •	Sweet Adelines, Tokyo<br/>
                </AccordionContent>
             </AccordionItem>
             <AccordionItem value="item-3">
                <AccordionTrigger>Styles of Music</AccordionTrigger>
                <AccordionContent>
                    •	Rock ’N Roll<br/>
                    •	Country<br/>
                    •	Country Rock<br/>
                    •	Classical<br/>
                    •	Choral<br/>
                    •	Solo<br/>
                    •	Movie Trailer Music<br/>
                </AccordionContent>
             </AccordionItem>
             <AccordionItem value="item-4">
                <AccordionTrigger>Television/Radio Appearances</AccordionTrigger>
                <AccordionContent>
                    •	The Late Show with David Letterman (CBS)<br/>
                    •	Late Night with Jimmy Fallon (NBC)<br/>
                    •	“Live By Request” (PBS)<br/>
                    •	The Tonight Show with Conan O’Brien (NBC)<br/>
                    •	“Artist Confidential” (Sirius/XM Radio)<br/>
                    •	Americana Music Awards Show<br/>
                </AccordionContent>
             </AccordionItem>
           </Accordion>

        </div>
        
      </section>
    )
  }