import "./globals.css";
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1>blender</h1>
            <h3>create a project using CAD, <br></br>learn new skills, <br></br>get prizes!!!</h3>
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
            width={500}
            height={500}
          />
        </div>
      </div>


      <div> 
        <h2>how it works</h2>
      </div>
    </main>
  );
};