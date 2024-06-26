import Link from 'next/link'

import RockingTwilight from '@/assets/events/1.webp'
// import Reunion from '@/assets/events/3.webp'
import Snigdhajit from '@/assets/events/4.webp'
import TrapMusic from '@/assets/events/5.webp'
import DJkoyel from '@/assets/events/6.webp'
import TheOctaves from '@/assets/events/7.webp'
import ChoNach from '@/assets/events/8.webp'

import { CulturalEventCard } from './CulturalEventCard'
import EventCardWrapper from './EventCardWrapper'

const PastCulturalEventData = [
  // {
  //   id: 1,
  //   description: '',
  //   title: 'Reunion & Facilitation',
  //   imgSrc: Reunion.src,
  //   time: '',
  //   location: ''
  // },
  {
    id: 1,
    description:
      'Get ready to experience the Vibrant & Rhythmic Chhou Nach, the Heritage of Purulia, with the award-winning team of Bubhan Chandra Kumar!',
    title: 'Chhau Nach',
    imgSrc: ChoNach.src,
    time: 'May 5th Firday at 5 PM',
    location: 'College Playground'
  },
  {
    id: 2,
    description: `️Harmony in Motion Team Octaves Live in Action!.Grooving to the Bengali Beats. The Octaves is going to Rocking the Stage`,
    title: 'The Octaves',
    imgSrc: TheOctaves.src,
    time: '5th May Friday at 10PM',
    location: 'College Playground'
  },
  {
    id: 3,
    description:
      'Feel the Music Surge with Snigdhajit & Lifeline!! Get ready for a mind-blowing band performance at 2nd day of Our Aikatan2.0 that will make your heart race, your feet tap, and your soul soar to the rhythm of the music!',
    title: 'Snigdhajit & Lifeline',
    imgSrc: Snigdhajit.src,
    time: '6th May Saturday at 10:00PM',
    location: 'College Playground'
  },
  {
    id: 4,
    description: `Get ready to be TRAPPED in a web of radical rock! Let TRAP's - The Radical Array Project dynamic sound and vibes take you on a journey like never before.`,
    title: 'Trap Music',
    imgSrc: TrapMusic.src,
    time: '7th May Sunday at 8:00PM',
    location: 'College Playground'
  },
  {
    id: 5,
    description: `️Dance, mix, beat - Repeat! with DJ Koyel !! Get ready to move to the hottest tracks & create memories that will last a lifetime. Don't miss out on the ultimate dance extravaganza on Grand Night of Aikatan2.0`,
    title: 'DJ koyel',
    imgSrc: DJkoyel.src,
    time: '7th May Sunday at 10PM',
    location: 'College Playground'
  }
] as const

const PastCulturalEvent = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'event-cultural'}>
      <a href="#event-cultural">
        <h2
          className={'text-4xl 2xl:text-5xl sm:text-center my-10 text-content'}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4236c5] to-[#02b5e4] font-extrabold">
            PAST{' '}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-extrabold">
            CULTURAL{' '}
          </span>
          EVENT
        </h2>
      </a>
      <EventCardWrapper>
        {PastCulturalEventData.map(
          ({ description, id, imgSrc, location, time, title }) => (
            <CulturalEventCard
              duration={id}
              key={id}
              time={time}
              description={description}
              imgSrc={imgSrc}
              location={location}
              title={title}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default PastCulturalEvent
