import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import p1 from "@/assets/fatoom-image.png";
import p2 from "@/assets/fatoom-image-2.webp";
import p3 from "@/assets/fatoom-image-3.webp";
import p4 from "@/assets/fatoom-image-4.webp";
import p5 from "@/assets/fatoom-image-5.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Fatoom ♥" },
      { name: "description", content: "A birthday letter and memories for my dearest friend Fatoom." },
      { property: "og:title", content: "Happy Birthday, Fatoom ♥" },
      { property: "og:description", content: "A birthday letter and memories for my dearest friend Fatoom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const letter = [
  "We’ve known each other for three years now. Three whole years of friendship, through so many different stages of my life, and I still believe that one of the best things that ever happened to me was meeting you in that empty classroom, with Monica, your classmate, beside us, as we spoke for the very first time. I had no idea that a quiet, ordinary moment would turn into one of the most important friendships of my life. If I could go back, I would tell myself to pay attention, because someone special was about to walk in.",
  "You are deeply kind and forgiving, and even more than that, you are hardworking. You don’t just carry your own goals; you make room for other people’s too. You notice when someone is struggling, you give your time without being asked, and you have a way of making people feel lighter just by being around them. You shine like a light in the dark, and everyone you touch is a little brighter for it.",
  "Through every season I’ve gone through, you’ve been steady, patient, and genuine. I’m grateful for the laughter, for the support, and for the way you’ve always made me feel that I was worth showing up for.",
  "We all love you, Fatoom. I hope you always know how much you are loved, and how much good you bring into the lives of the people around you.",
];

const photos = [p2, p3, p1, p4, p5];
const rot = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Ambient() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCount(window.innerWidth < 768 ? 45 : 90);
  }, []);
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        kind: i % 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 8 + Math.random() * 12,
        size: 8 + Math.random() * 18,
      })),
    [count],
  );
  if (count === 0) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {items.map((it, i) =>
        it.kind === 3 ? (
          <span key={i} className="absolute drop-shadow-lg" style={{ left: `${it.left}%`, bottom: -60, fontSize: it.size + 14, animation: `rise ${it.dur + 6}s ease-in-out ${it.delay}s infinite`, opacity: 0 }}>💋</span>
        ) : it.kind === 0 ? (
          <span key={i} className="absolute text-rose" style={{ left: `${it.left}%`, bottom: -40, fontSize: it.size, animation: `rise ${it.dur}s linear ${it.delay}s infinite`, opacity: 0 }}>♥</span>
        ) : it.kind === 1 ? (
          <span key={i} className="absolute rounded-[60%_0] bg-primary" style={{ left: `${it.left}%`, top: -30, width: it.size, height: it.size * 0.8, animation: `fall ${it.dur + 4}s linear ${it.delay}s infinite`, opacity: 0 }} />
        ) : (
          <span key={i} className="absolute rounded-full bg-accent" style={{ left: `${it.left}%`, top: `${it.top}%`, width: 3, height: 3, animation: `twinkle ${2 + (it.dur % 4)}s ease-in-out ${it.delay}s infinite` }} />
        ),
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="reveal mx-auto mb-16 flex w-full max-w-xs items-center gap-4 text-accent" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/60" />
      <span className="text-sm">✦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/60" />
    </div>
  );
}

function Wish() {
  const [lit, setLit] = useState(true);
  const [burst, setBurst] = useState(0);
  const hearts = useMemo(
    () =>
      Array.from({ length: 28 }, () => ({
        left: 5 + Math.random() * 90,
        delay: Math.random() * 0.8,
        dur: 3 + Math.random() * 3,
        size: 16 + Math.random() * 24,
      })),
    [burst],
  );
  return (
    <div className="reveal mt-12 flex flex-col items-center">
      <button
        type="button"
        aria-label={lit ? "Blow out the candle and make a wish" : "Light the candle again"}
        onClick={() => {
          if (lit) setBurst((b) => b + 1);
          setLit((l) => !l);
        }}
        className="relative block h-28 w-10 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
      >
        <span
          className={`absolute left-1/2 top-0 h-8 w-4 -translate-x-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-amber-400 to-yellow-100 shadow-[0_0_36px_12px_rgba(255,200,100,0.45)] transition-opacity duration-700 ${lit ? "opacity-100" : "opacity-0"}`}
          style={lit ? { animation: "flicker 1.2s ease-in-out infinite" } : undefined}
        />
        <span className="absolute bottom-0 left-0 h-[4.5rem] w-10 rounded-sm bg-foreground shadow-xl" />
      </button>
      <p className="mt-6 text-lg italic text-muted-foreground">
        {lit ? "Tap the candle and make a wish" : "May every wish come true ♥"}
      </p>
      {!lit && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
          {hearts.map((h, i) => (
            <span key={i} className="absolute text-rose" style={{ left: `${h.left}%`, bottom: -40, fontSize: h.size, opacity: 0, animation: `rise ${h.dur}s ease-out ${h.delay}s 1 forwards` }}>♥</span>
          ))}
        </div>
      )}
    </div>
  );
}

function Index() {
  useReveal();
  const [y, setY] = useState(0);
  useEffect(() => {
    const f = () => setY(window.scrollY);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <div className="fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-1/3 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" style={{ transform: `translate(-50%, calc(-50% + ${y * 0.15}px))` }} />
        <div className="absolute -right-40 bottom-0 h-[40vmax] w-[40vmax] rounded-full bg-rose/20 blur-3xl" style={{ animation: "float 9s ease-in-out infinite" }} />
      </div>
      <Ambient />

      <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="reveal font-display text-sm uppercase tracking-[0.5em] text-accent">Three years · One friendship</p>
        <h1 className="reveal mt-6 font-script text-7xl leading-none text-gold md:text-9xl">Happy Birthday</h1>
        <h2 className="reveal mt-2 font-display text-6xl font-bold italic md:text-8xl" style={{ animation: "float 6s ease-in-out infinite" }}>Fatoom</h2>
        <div className="reveal mt-8 text-5xl text-rose" style={{ animation: "heartbeat 1.6s ease-in-out infinite" }}>♥</div>
        <p className="reveal mt-8 max-w-md text-xl italic text-muted-foreground">To the best friend I could ever ask for.</p>
        <a href="#letter" className="reveal mt-14 text-sm uppercase tracking-[0.4em] text-accent"><span className="inline-block" style={{ animation: "float 2.4s ease-in-out infinite" }}>Scroll ↓</span></a>
      </section>

      <section id="letter" className="relative z-20 px-6 py-24">
        <Divider />
        <article className="reveal glass glow gold-frame mx-auto max-w-3xl rounded-3xl p-8 md:p-16">
          <p className="font-script text-5xl text-gold md:text-6xl">Dear Fatoom,</p>
          <div className="mt-8 space-y-7 text-xl font-medium leading-[1.75] md:text-2xl">
            {letter.map((t, i) => (
              <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:text-accent" : ""}>{t}</p>
            ))}
          </div>
          <p className="mt-10 text-right font-script text-4xl text-rose">With all my love ♥</p>
        </article>
      </section>

      <section className="relative z-20 px-6 py-24">
        <h3 className="reveal text-center font-display text-4xl italic md:text-5xl">Little moments, <span className="text-gold">forever</span></h3>
        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-10">
          {photos.map((src, i) => (
            <figure key={i} className={`reveal relative md:even:mt-10 ${rot[i]} rounded-sm bg-foreground p-3 pb-10 shadow-2xl transition duration-500 hover:z-10 hover:rotate-0 hover:scale-110`}>
              <span className="tape" aria-hidden="true" />
              <img src={src} alt="A cherished memory" loading="lazy" className="h-56 w-64 object-cover sepia-[.25]" />
            </figure>
          ))}
        </div>
      </section>

      <footer className="relative z-20 py-24 text-center">
        <Divider />
        <p className="reveal font-script text-6xl text-gold">Make a wish, Fatoom</p>
        <p className="reveal mt-4 text-lg italic text-muted-foreground">Here's to many more years together.</p>
        <Wish />
      </footer>
    </main>
  );
}
