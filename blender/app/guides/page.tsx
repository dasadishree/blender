'use client';

import { useMemo, useState } from 'react';
import HomeShell from '@/components/HomeShell';
import Image from 'next/image';

type GuideEntry = {
  heading: string;
  track: string;
  color: string;
  fruit: string;
  link: string;
  body: string;
};

const TRACK_FRUITS = [
  { src: '/strawberry.png', alt: 'Strawberry' },
  { src: '/blueberry.webp', alt: 'Blueberry' },
  { src: '/kiwi.png', alt: 'Kiwi' },
  { src: '/mango.webp', alt: 'Mango' },
  { src: '/pineapple.webp', alt: 'Pineapple' },
] as const;

const GUIDES: GuideEntry[] = [
  {
    heading: '3d Storyboard',
    track: 'game dev / visual novel art & assets',
    color: '#e67b5c',
    fruit: '/strawberry.png',
    link: 'https://storyboard.hackclub.com',
    body: 'Have you ever wanted to make a 3D version of a visual novel game? Tutorial/workshop collaborating with Storyboard coming soon!',
  },
  {
    heading: 'Roblox GFX\'s',
    track: 'general art / animation / video editing',
    color: '#f2a93b',
    fruit: '/mango.webp',
    link: 'https://www.youtube.com/watch?v=4WT2WLU3DhA&pp=ygUabXhkc3NpZSBob3cgdG8gbWthIGUgYSBnZng%3D',
    body: 'Learn how to make Roblox GFXs (fun fact this is actually how I first learned how to use Blender)!',
  },
  {
    heading: 'Architecture / Interior Design Related Projects',
    track: 'architecture / interior design',
    color: '#eec866',
    fruit: '/pineapple.webp',
    link: '',
    body: 'You can create architecture or interior design projects using either free software like Blender or Sketchup Free, or paid platforms (which we can give to you as a prize!) like Rhino, Revit, and Sketchup. Tutorial coming soon!',
  },  
  {
    heading: 'Fashion Design',
    track: 'other',
    color: '#cff450',
    fruit: '/kiwi.png',
    link: 'https://www.clo3d.com/',
    body: 'A lot of 3d fashion design websites like CLO3D are paid, but they are offered in the shop! Personally, I never even knew you could design outfits/fashion like that online so I think it\'s a good incentive, and Blender can be used for the free tier',
  },
  {
    heading: "Spline",
    track: "web dev",
    color: "#3ECFB0",
    fruit: "/blueberry.webp",
    link: "https://spline.design/",
    body: "Tutorial coming soon on how to make 3D websites using Spline! A good example is MIT Blueprint's 2025 website: https://bparchive.hackmit.org/2025/"
  },
  {
    heading: "Three.js",
    track: "web dev",
    color: "#3ECFB0",
    fruit: "/blueberry.webp",
    link: "https://threejs.org/",
    body: "Tutorial coming soon on how to use the JavaScript library Three.js !!"
  },
  {
    heading: "OTHER!!",
    track: "other",
    color: "#cff450",
    fruit: "/kiwi.png",
    link: "",
    body: "There is so much more you can do with CAD!!! Some ideas: making 3d assets for different projects, wood laser cutting, anything else that doesn't fit well into the above categories!"
  }
];

function youtubeEmbedSrc(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com') && u.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
    }
    if (u.hostname === 'youtu.be' && u.pathname.length > 1) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
  } catch {
    return null;
  }
  return null;
}

export default function Guides() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const visible = useMemo(() => {
    if (selectedFruits.length === 0) return GUIDES;
    return GUIDES.filter((g) => selectedFruits.includes(g.fruit));
  }, [selectedFruits]);

  function toggleFruit(src: string) {
    setSelectedFruits((prev) =>
      prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src],
    );
  }

  return (
    <HomeShell bg="/bg2.png" showPopup={false} showPopupReopen={false}>
      <div className="guides-page-shell">
        <div className="guides-page-header">
          <h2>guides</h2>
          <div className="guides-header-tools">
            <p className="guides-sort-label">Sort by fruit</p>
            <div
              className="guides-filter-chips"
              role="group"
              aria-label="Sort or filter guides by fruit"
            >
              {TRACK_FRUITS.map(({ src, alt }) => {
                const selected = selectedFruits.includes(src);
                return (
                  <button
                    key={src}
                    type="button"
                    className={`guides-filter-chip${selected ? ' guides-filter-chip--selected' : ''}`}
                    onClick={() => toggleFruit(src)}
                    aria-pressed={selected}
                    aria-label={alt}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={48}
                      height={48}
                      className="guides-filter-chip__img"
                      sizes="48px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="guides-list">
          {visible.length === 0 ? (
            <p className="guides-empty">No guides for the fruits you picked—try another combo.</p>
          ) : (
            visible.map((item) => {
              const embed = item.link.trim() ? youtubeEmbedSrc(item.link) : null;
              return (
                <article
                  key={`${item.heading}|${item.track}`}
                  className="guide-card"
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.fruit}
                    alt=""
                    width={52}
                    height={52}
                    className="guide-card__fruit"
                    sizes="52px"
                  />
                  <div className="guide-card__inner">
                    <h3 className="guide-card__heading">{item.heading}</h3>
                    <p className="guide-card__track">{item.track}</p>
                    {item.link.trim() && embed ? (
                      <iframe
                        className="guide-card__embed"
                        src={embed}
                        title={item.heading}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : null}
                    {item.link.trim() && !embed ? (
                      <p className="guide-card__link">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.link}
                        </a>
                      </p>
                    ) : null}
                    <p className="guide-card__body">{item.body}</p>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </HomeShell>
  );
}
