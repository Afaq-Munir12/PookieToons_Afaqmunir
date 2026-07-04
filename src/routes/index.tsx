import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/pookietoons-logo.jpg";
import {
  Sparkles,
  Play,
  Heart,
  Mail,
  Instagram,
  Facebook,
  Music2,
  ArrowUpRight,
  Star,
  Wand2,
  Apple,
  Snowflake,
  Clapperboard,
  Megaphone,
  Smartphone,
  ShoppingBag,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afaq Munir — AI Storyteller behind PookieToons" },
      { name: "description", content: "Portfolio of Afaq Munir — AI animated fairy tales, fruit stories & seasonal dramas. 50K+ followers across TikTok, Instagram and Facebook." },
      { property: "og:title", content: "Afaq Munir — PookieToons" },
      { property: "og:description", content: "AI animated fairy tales & fruit stories. 50K+ followers across socials." },
      { property: "og:image", content: logoAsset },
      { name: "twitter:image", content: logoAsset },
    ],
  }),
  component: Portfolio,
});

const SOCIALS = [
  { name: "TikTok", handle: "@pookiiee_toons", followers: "22K", meta: "390.5K likes", url: "https://www.tiktok.com/@pookiiee_toons", Icon: Music2, color: "var(--color-magenta)" },
  { name: "Instagram", handle: "@pookiie_toons", followers: "10K", meta: "38 posts", url: "https://www.instagram.com/pookiie_toons/", Icon: Instagram, color: "var(--color-tangerine)" },
  { name: "Facebook", handle: "Afaq Munir", followers: "18K", meta: "Storytelling channel", url: "https://www.facebook.com/profile.php?id=61588215682177", Icon: Facebook, color: "var(--color-sky-pop)" },
];

const SERIES = [
  { title: "Fairy Tales, Reimagined", tag: "Ongoing series", desc: "Classic bedtime tales rebuilt with AI animation — new twists, new characters, the same warm magic.", Icon: Wand2, tint: "var(--color-magenta)" },
  { title: "Fruit Stories", tag: "Fan favourite", desc: "Cheeky talking fruits getting into wholesome trouble. Short, snackable, very re-watchable.", Icon: Apple, tint: "var(--color-tangerine)" },
  { title: "Drama Shorts", tag: "Episodic", desc: "Mini-dramas with feelings, plot twists and tiny monsters. Released part-by-part.", Icon: Clapperboard, tint: "var(--color-sky-pop)" },
  { title: "Seasonal Specials", tag: "Limited drops", desc: "Themed episodes for every season — cozy autumns, sparkly winters, sunny adventures.", Icon: Snowflake, tint: "var(--color-mint)" },
];


const ADS = [
  { title: "Short-Form Video Ads", tag: "TikTok · Reels · Shorts", desc: "Hook-first 15–60s AI ads built for TikTok, Instagram Reels and YouTube Shorts — designed to stop the scroll and drive clicks.", Icon: Megaphone, tint: "var(--color-magenta)" },
  { title: "Feed & Story Ads", tag: "Instagram · Facebook", desc: "Polished vertical and square ad creatives for Instagram Stories, Facebook Feed and Reels placements.", Icon: Smartphone, tint: "var(--color-tangerine)" },
  { title: "Product & Brand Ads", tag: "E-com · Launches", desc: "Animated product showcases, launch teasers and brand explainers with AI-generated characters and scenes.", Icon: ShoppingBag, tint: "var(--color-sky-pop)" },
  { title: "Custom AI Ad Concepts", tag: "Made to order", desc: "From script to final render — bespoke AI ad concepts tailored to your product, audience and campaign goals.", Icon: Sparkles, tint: "var(--color-mint)" },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between rounded-full border-2 border-foreground/10 bg-card/85 px-5 py-3 shadow-pop-sm backdrop-blur-md">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold transition hover:scale-105">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            Afaq Munir
          </a>
          <nav className="hidden items-center gap-1 rounded-full bg-muted/60 px-2 py-1 text-sm font-semibold md:flex">
            <a href="#work" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Work</a>
            <a href="#ads" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Ads</a>
            <Link to="/watch" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Watch</Link>
            <a href="#story" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Story</a>
            <a href="#stats" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Stats</a>
            <a href="#contact" className="rounded-full px-4 py-1.5 transition hover:bg-background hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <a href="#contact" className="hidden items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background shadow-pop-sm transition hover:-translate-y-0.5 md:inline-flex">
              Collab <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-6xl px-5 pt-6 pb-24">
        <Star className="pointer-events-none absolute left-6 top-10 h-8 w-8 fill-[var(--color-sun)] text-[var(--color-sun)] animate-float" style={{ ["--r" as never]: "-12deg" }} />
        <Heart className="pointer-events-none absolute right-10 top-24 h-7 w-7 fill-[var(--color-magenta)] text-[var(--color-magenta)] animate-float" style={{ animationDelay: "1.2s", ["--r" as never]: "18deg" }} />
        <Sparkles className="pointer-events-none absolute left-1/3 top-2 h-6 w-6 text-[var(--color-sky-pop)] animate-float" style={{ animationDelay: "0.6s" }} />

        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--color-magenta)]" /> AI Content Creator · Since 10 April
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
              I make tiny worlds <br />
              <span className="bg-gradient-to-r from-[var(--color-magenta)] via-[var(--color-tangerine)] to-[var(--color-sky-pop)] bg-clip-text text-transparent">
                where monsters read fairy tales.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Hey, I'm <strong className="text-foreground">Afaq Munir</strong> — the creator behind{" "}
              <strong className="text-foreground">PookieToons</strong>. I direct AI-animated fairy
              tales, fruit stories and seasonal dramas, dropped part-by-part for a fast-growing
              audience across TikTok, Instagram and Facebook.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/watch" className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 active:scale-95" style={{ animationDelay: "0.1s" }}>
                <Play className="h-4 w-4 fill-current" /> Watch the work
              </Link>
              <a href="#contact" className="animate-pop-in inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-6 py-3 font-bold shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 active:scale-95" style={{ animationDelay: "0.25s" }}>
                <Mail className="h-4 w-4" /> Work with me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-semibold text-muted-foreground">
              <div className="flex -space-x-2">
                {SOCIALS.map((s) => (
                  <span key={s.name} className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-white" style={{ background: s.color }}>
                    <s.Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>
              <span>50,000+ followers and growing — in under a season.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-magenta)] via-[var(--color-tangerine)] to-[var(--color-sky-pop)] opacity-80 blur-2xl" />
            <div className="relative rounded-[2.5rem] border-2 border-foreground bg-card p-5 shadow-pop">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-sun)]/40 via-card to-[var(--color-sky-pop)]/40 p-4">
                <Sparkles className="absolute right-4 top-4 h-5 w-5 text-[var(--color-magenta)]" />
                <img
                  src={logoAsset}
                  alt="PookieToons mascot — a cuddly orange & blue monster reading a storybook"
                  className="mx-auto w-full max-w-sm animate-float drop-shadow-xl"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <div className="font-display text-xl font-bold">PookieToons</div>
                  <div className="text-xs font-semibold text-muted-foreground">The studio · Directed by Afaq Munir</div>
                </div>
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold text-background">EST. APR 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-2 border-foreground bg-foreground py-4 text-background">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-2xl font-bold uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>★ AI Animated Fairy Tales</span>
              <span className="text-[var(--color-tangerine)]">★ Fruit Stories</span>
              <span>★ Drama Shorts</span>
              <span className="text-[var(--color-sky-pop)]">★ Seasonal Specials</span>
              <span>★ PookieToons Universe</span>
              <span className="text-[var(--color-sun)]">★ Bedtime Magic</span>
            </div>
          ))}
        </div>
      </div>

      <section id="work" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-magenta)]">The Series</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">What I make on PookieToons</h2>
          </div>
          <p className="hidden max-w-sm text-muted-foreground md:block">
            Short-form, character-led, dropped in parts so the audience keeps coming back for the next episode.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERIES.map((s, i) => (
            <Link
              key={s.title}
              to="/watch"
              className="group relative block rounded-3xl border-2 border-foreground bg-card p-7 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
              style={{ transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground text-foreground shadow-pop-sm" style={{ background: s.tint }}>
                  <s.Icon className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border-2 border-foreground bg-background px-3 py-1 text-xs font-bold opacity-0 transition group-hover:opacity-100">
                  Watch <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.tag}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>

      </section>

      <section id="ads" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-tangerine)]">AI Ads</span>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Scroll-stopping AI ads</h2>
          </div>
          <p className="hidden max-w-sm text-muted-foreground md:block">
            I also make AI-powered ads for brands — short, character-led and ready to run on the biggest platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ADS.map((a, i) => (
            <article
              key={a.title}
              className="group relative rounded-3xl border-2 border-foreground bg-card p-7 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
              style={{ transform: `rotate(${i % 2 === 0 ? "0.5deg" : "-0.5deg"})` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-foreground text-foreground shadow-pop-sm" style={{ background: a.tint }}>
                <a.Icon className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{a.tag}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{a.title}</h3>
              <p className="mt-3 text-muted-foreground">{a.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid items-center gap-12 rounded-[2rem] border-2 border-foreground bg-card p-8 shadow-pop md:grid-cols-[1fr_1.2fr] md:p-14">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-sky-pop)] to-[var(--color-magenta)] opacity-30 blur-xl" />
            <img src={logoAsset} alt="PookieToons logo" className="relative mx-auto w-full max-w-xs animate-wiggle rounded-3xl" />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-tangerine)]">My Story</span>
            <h2 className="mt-2 font-display text-4xl font-bold">From a single upload to 50K+ in one season.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              I started <strong className="text-foreground">PookieToons on 10 April</strong> with a
              simple idea: use AI to bring back the feeling of bedtime stories — bright characters,
              kind worlds, tiny lessons. A few episodes in, the audience exploded.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Today I write, direct and animate every episode myself — fairy tales, fruit stories,
              drama shorts and seasonal specials, released part-by-part across three platforms.
            </p>
          </div>
        </div>
      </section>

      <section id="watch" className="mx-auto max-w-6xl px-5 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-foreground bg-card p-10 text-center shadow-pop md:p-14">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-magenta)]">The Watch Room</span>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Ready to press play?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every episode I've dropped — fairy tales, fruit stories and drama shorts — lives on one page. Pick any tile and dive in.
          </p>
          <Link
            to="/watch"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105"
          >
            <Play className="h-4 w-4 fill-current" /> Open the Watch Room
          </Link>
        </div>
      </section>




      <section id="stats" className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-sky-pop)]">Where to watch</span>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">The PookieToons universe lives here</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SOCIALS.map((s, i) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border-2 border-foreground bg-card p-7 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
              style={{ transform: `rotate(${[-1, 0.5, -0.5][i]}deg)` }}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-2xl transition group-hover:opacity-60" style={{ background: s.color }} />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-foreground text-white shadow-pop-sm" style={{ background: s.color }}>
                  <s.Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
              </div>
              <div className="relative mt-6 font-display text-5xl font-bold">{s.followers}</div>
              <div className="relative mt-1 text-sm font-semibold text-muted-foreground">followers on {s.name}</div>
              <div className="relative mt-4 flex items-center justify-between border-t-2 border-dashed border-border pt-4 text-sm">
                <span className="font-bold">{s.handle}</span>
                <span className="text-muted-foreground">{s.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-foreground bg-gradient-to-br from-[var(--color-magenta)] via-[var(--color-tangerine)] to-[var(--color-sky-pop)] p-10 text-center shadow-pop md:p-16">
          <Star className="absolute left-8 top-8 h-10 w-10 fill-white/90 text-white animate-spin-slow" />
          <Sparkles className="absolute right-10 top-10 h-8 w-8 text-white animate-float" />
          <Heart className="absolute bottom-8 left-1/4 h-7 w-7 fill-white text-white animate-float" style={{ animationDelay: "1s" }} />

          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">Let's make something cute together.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Brand collabs, sponsored episodes, custom AI animation, character cameos — DM me on any
            platform or send a quick email.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:afaqmunir456@gmai.com" className="animate-pop-in animate-glow-pulse inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-bold text-background shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 hover:animate-bob active:scale-95" style={{ animationDelay: "0.1s" }}>
              <Mail className="h-4 w-4" /> afaqmunir456@gmai.com
            </a>
            <a href="https://www.tiktok.com/@pookiiee_toons" target="_blank" rel="noreferrer" className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-bold shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 hover:animate-bob active:scale-95" style={{ animationDelay: "0.2s" }}>
              <Music2 className="h-4 w-4" /> Follow on TikTok
            </a>
            <a href="https://www.instagram.com/pookiie_toons/" target="_blank" rel="noreferrer" className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-bold shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 hover:animate-bob active:scale-95" style={{ animationDelay: "0.3s" }}>
              <Instagram className="h-4 w-4" /> DM on Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588215682177" target="_blank" rel="noreferrer" className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-bold shadow-pop-sm transition hover:-translate-y-0.5 hover:scale-105 hover:animate-bob active:scale-95" style={{ animationDelay: "0.4s" }}>
              <Facebook className="h-4 w-4" /> Like on Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm font-semibold text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logoAsset} alt="" className="h-7 w-7 rounded-full" />
            © {new Date().getFullYear()} Afaq Munir · PookieToons
          </div>
          <div>Made with AI, color and a lot of caffeine ✦</div>
        </div>
      </footer>
    </div>
  );
}