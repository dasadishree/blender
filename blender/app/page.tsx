import "./globals.css";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1>blender</h1>
            <h3>create a 3d project using CAD, <br></br>learn new skills, get prizes!!!</h3>
            <a href="#" className="rsvpBtn">rsvp now!</a>

            <div className="challenge-wrap">
              <div className="weekly-challenge">
                <p className="challenge-heading">weekly challenge:</p>
                <p className="challenge-body">create a fidget toy/stress reliever 3d model, get a fidget like needohs or slime!</p>
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
          />
        </div>
      </div>

      <div className="how-section"> 
        <h2>how it works</h2>

        <div className="steps">
          <div className="step" style={{ '--step-color': '#e67b5c' } as CSSProperties}>
            <span className="step-tag">1. pick a track/fruit </span>
            <p className="step-body">choose your fruit! in this YSWS, you will learn how to use CAD in different types of projects: from fashion, architecture, art, video editing, web development, and so much more.</p>
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
      </div>
    </main>
  );
};