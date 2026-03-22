import "./globals.css";
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="hero">
        <div className="hero-text">
          <h1>blender</h1>
          <h3>create a project using CAD,<br/>learn new skills, get prizes!!!</h3>
          <a href="#" className="rsvpBtn">rsvp now!</a>
        </div>
        <div className="hero-image">
          <Image
            src="/blender.png"
            alt="blender"
            width={340}
            height={340}
          />
        </div>
      </div>
    </main>
  );
};