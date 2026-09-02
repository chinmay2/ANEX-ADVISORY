'use client';

import Link from 'next/link';
import { useRef, type PointerEvent } from 'react';
import { siteContent as c } from '@/content/site';

export default function InteractiveHero() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: PointerEvent<HTMLElement>) => {
    if (!ref.current || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3}deg) translate3d(${x * 7}px,${y * 5}px,0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <section className="hero" onPointerMove={move} onPointerLeave={reset}>
      <div className="hero-media" aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-copy">
          <div className="kicker">{c.home.eyebrow}</div>
          <h1 className="serif">
            {c.home.title.map((text, index) => (
              <span key={`${text}-${index}`}>
                {index > 0 ? <em>{text}</em> : text}
                <br />
              </span>
            ))}
          </h1>
          <p>{c.home.description}</p>
          <div className="actions">
            <Link className="btn btn-gold" href="/about">
              {c.home.primary} <span>→</span>
            </Link>
            <Link className="text-link" href="/">
              {c.home.secondary} <span>↗</span>
            </Link>
          </div>
        </div>

        <div
          ref={ref}
          className="hero-orbit"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
