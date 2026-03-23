import "./globals.css";
import HomeShell from '@/components/HomeShell';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

// fruitssssd
const FRUITS = [
  {
    src: '/strawberry.png',
    alt: 'Strawberry',
    caption: 'game dev / visual novel art & assets',
    tilt: -13,
    size: 170,
  },
  {
    src: '/blueberry.webp',
    alt: 'Blueberry',
    caption: 'web dev',
    tilt: 10,
    size: 155,
  },
  {
    src: '/kiwi.png',
    alt: 'Kiwi',
    caption: 'other',
    tilt: -7,
    size: 155,
  },
  {
    src: '/mango.webp',
    alt: 'Mango',
    caption: 'general art / animation / video editing',
    tilt: 12,
    size: 155,
  },
  {
    src: '/pineapple.webp',
    alt: 'Pineapple',
    caption: 'architecture / interior design',
    tilt: -11,
    size: 155,
  },
];

// prizes!!!!
const PRIZES = [
  {src: '/watercolor.webp', label: 'watercolors/paint'},
  {src:'/subscription.png', label: "software memberships"},
  { src: '/sketchbook.webp', label: 'sketchbook' },
  { src: '/sewingsupplies.webp', label: 'sewing supplies' },
  { src: '/sewingmachine.png', label: 'sewing machine' },
  { src: '/posca.webp', label: 'posca paint pens' },
  { src: '/muesume.webp', label: 'museum memberships' },
  { src: '/modelkit.png', label: 'any model kit!' },
  { src: '/micronpens.webp', label: 'pens / micron pens' },
  { src: '/legos.png', label: 'any lego set!' },
  { src: '/laptop.webp', label: 'laptop' },
  { src: '/keyboard.webp', label: 'keyboard' },
  { src: '/giftcards.png', label: 'giftcards, robux, coffee' },
  { src: '/filament.png', label: 'filament' },
  { src: '/draftingpenci.webp', label: 'drafting pencils' },
  { src: '/digicam.webp', label: 'digicam / camera' },
  { src: '/bambu.jpg', label: 'bambu lamp kits' },
  { src: '/applepencil.png', label: 'apple pencil' },
  { src: '/alcoholmarkers.jpg', label: 'alcohol markers' },
  { src: '/3dprinter.webp', label: '3d printer' },
  { src: '/placeholder.png', label: 'any suggestions?' }
];

const FAQ_ITEMS: {
  color: string;
  summaryFg?: string;
  q: string;
  a: string;
}[] = [
  {
    color: '#e67b5c',
    q: 'What is Hack Club?',
    a: 'Hack Club is a community of teens from around the world who code together, attend hackathons, and share interests in technology, art, games, and more! Join the Slack if you\'re a teen!',
  },
  {
    color: '#f2a93b',
    q: 'Who is eligible? What if I\'m a beginner?',
    a: 'Any teenager between 13-18 years old is eligible! Blender is available towards anyone, including beginnerings, artists, editors, fashion designers, gamedevs, architects, ANYONE!! We have guides for you to learn from as well.',
  },
  {
    color: '#eec866',
    q: 'How do I start?',
    a: 'See the above steps! Go to the guides page for some project ideas and guides on how to start creating! Make sure you are tracking your hours via Hackatime or Lapse.',
  },
  {
    color: '#cff450',
    summaryFg: '#0e3532',
    q: 'What does “shipped” mean?',
    a: 'Your project needs a deployed, experienceable link, or .stl file, as well as an open-source Git repository.',
  },
  {
    color: "#7bcb00",
    q: 'How do I get prizes?',
    a: 'You get prizes based on the amount of hours you ship while working on projects, which you can spend in the shop! Projects that you spend 10+ hrs on are eligible for potential hour boosts. You can also earn bonus hours/prizes like a custom sticker sheet/custom shirt for completing all fruit tracks, or prizes and boosts for completing the weekly challenges.'
  },
  {
    color: "#e67b5c",
    q: "I have more questions.",
    a: "Message @adishree on the Hack Club Slack and join #channel-coming-soon for any questions!"
  }
];

export default function Home() {
  return (
    <HomeShell>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-title">blender</h1>
            <h3>create a 3d project using CAD, <br></br>learn new skills, get prizes!!!</h3>
            <a href="https://forms.fillout.com/t/b6QT5czYGPus" className="rsvpBtn">rsvp now!</a>

            <div className="challenge-wrap">
              <div className="weekly-challenge">
                <p className="challenge-heading">weekly challenge(s):</p>
                <p className="challenge-body">- create a fidget toy/stress reliever 3d model, get a fidget like needohs or slime! <br></br> - spend 20-30 hrs on a 3d model, get a custom plushie of it shipped!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/blender.png"
            alt="blender"
            width={350}
            height={350}
            className="hero-blender-img"
            style={{ width: '400px', height: '700px' }}
            priority
          />
        </div>
      </div>

      <div className="how-section">
        <h2 id="how-it-works">how it works</h2>

{/* steps */}
        <div className="how-section-body">
        <div className="steps">
          <div className="step" style={{ '--step-color': '#e67b5c' } as CSSProperties}>
            <span className="step-tag">1. pick a track/fruit </span>
            <p className="step-body">choose your fruit! in this YSWS, you will learn how to use CAD in different types of projects: from fashion, architecture, 3d rendered art/gfx's, video editing, web development, and so much more.</p>
          </div>
          <div className="step" style={{ '--step-color': '#f2a93b' } as CSSProperties}>
            <span className="step-tag">2. create a project</span>
            <p className="step-body">
              create projects in your track! see these{' '}
              <Link href="/guides">logs/guides </Link> to help you step outside of your comfort zone
              and potentially make projects in a track you&apos;ve never thought about before.
            </p>
          </div>
          <div className="step" style={{ '--step-color': '#eec866' } as CSSProperties}>
            <span className="step-tag">3. log your hours</span>
            <p className="step-body">
              make sure to log your hours coded using{' '}
              <a href="https://hackatime.hackclub.com" target="_blank" rel="noopener noreferrer">
                Hackatime
              </a>{' '}
              or{' '}
              <a href="https://lapse.hackclub.com" target="_blank" rel="noopener noreferrer">
                Lapse
              </a>
              ! you can spend up to 30% of shipped hours doing art, and up to 30% of shipped hours
              using AI.
            </p>
          </div>
          <div
            className="step"
            style={
              {
                '--step-color': '#cff450',
                '--step-tag-fg': '#0e3532',
              } as CSSProperties
            }
          >
            <span className="step-tag">4. ship it!</span>
            <p className="step-body">
              to count a project as &quot;shipped&quot;, it must have a deployed, experienceable
              link/.stl file and a open-source{' '}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                Github
              </a>{' '}
              repository link, with regular/hourly commits to Github
            </p>
          </div>
          <div className="step" style={{ '--step-color': '#7bcb00' } as CSSProperties}>
            <span className="step-tag">5. get prizes!!!!</span>
            <p className="step-body">get all sorts of prizes for hours shipped! prize options are below (shop coming soon) and please dm me on <a href="https://slack.hackclub.com/">Slack</a> at @adishree for any suggestions!</p>
          </div>
        </div>

        <div className="dice-five" aria-label="Tracks (dice five layout)">
          {FRUITS.map((item) => (
            <div
              key={item.src}
              className="dice-five__cell"
              style={{ ['--tilt']: `${item.tilt}deg` } as CSSProperties}
            >
              <div className="dice-five__card">
                <div className="dice-five__img-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.size}
                    height={item.size}
                    className="dice-five__img"
                    loading="lazy"
                    sizes="(max-width: 640px) 28vw, 140px"
                  />
                </div>
                <p className="dice-five__caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="prizes-section">
        <h2 id="prizes">prizes</h2>

        <div className="prize-marquee">
          <div className="prize-rainbow-bg" aria-hidden>
            <div style={{ background: '#ADFF4B' }} />
            <div style={{ background: '#3ECFB0' }} />
            <div style={{ background: '#FF9A2E' }} />
            <div style={{ background: '#FF5640' }} />
            <div style={{ background: '#FFD93D' }} />
            <div style={{ background: '#ADFF4B' }} />
            <div style={{ background: '#3ECFB0' }} />
            <div style={{ background: '#FF9A2E' }} />
            <div style={{ background: '#FF5640' }} />
            <div style={{ background: '#FFD93D' }} />
          </div>
          <div className="prize-wrap">
            <div className="prize-track">
              {[...PRIZES, ...PRIZES].map((p, i) => (
                <div className="prize-card" key={`${p.src}-${i}`}>
                  <div className="prize-img-wrap">
                    <Image
                      src={p.src}
                      alt={p.label}
                      width={100}
                      height={100}
                      className="prize-img"
                      loading="lazy"
                      sizes="120px"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                  <p className="prize-label">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">faq</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="faq-item"
              style={
                {
                  '--faq-color': item.color,
                  ...(item.summaryFg ? { '--faq-summary-fg': item.summaryFg } : {}),
                } as CSSProperties
              }
            >
              <summary className="faq-summary">
                <span className="faq-q">{item.q}</span>
                <span className="faq-chevron" aria-hidden>
                  ▼
                </span>
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </section>
    </HomeShell>
  );
};