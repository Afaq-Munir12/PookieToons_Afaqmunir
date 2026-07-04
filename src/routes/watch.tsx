import { useRef, useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Music2,
  Sparkles,
} from "lucide-react";
import logoAsset from "@/assets/pookietoons-logo.jpg";
import { ThemeToggle } from "@/components/theme-toggle";

const ADS: { title: string; embedUrl: string; watchUrl: string }[] = [
  {
    title: "AI Ad · Reel 01",
    embedUrl: "https://www.instagram.com/reel/DZcu7i5NTXV/embed",
    watchUrl: "https://www.instagram.com/reel/DZcu7i5NTXV/",
  },
  {
    title: "AI Ad · Reel 02",
    embedUrl: "https://www.instagram.com/reel/DZh-dI-tpR3/embed",
    watchUrl: "https://www.instagram.com/reel/DZh-dI-tpR3/",
  },
  {
    title: "AI Ad · Reel 03",
    embedUrl: "https://www.instagram.com/reel/DZsel1ntzFD/embed",
    watchUrl: "https://www.instagram.com/reel/DZsel1ntzFD/",
  },
];

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Watch PookieToons — Afaq Munir's AI stories" },
      { name: "description", content: "Watch AI-animated fairy tales, fruit stories and drama shorts from PookieToons — embedded from TikTok, Instagram and Facebook." },
      { property: "og:title", content: "Watch PookieToons" },
      { property: "og:description", content: "AI-animated fairy tales, fruit stories & drama shorts by Afaq Munir." },
    ],
  }),
  component: WatchPage,
});

type VideoEmbed = {
  platform: "Instagram" | "TikTok" | "Facebook";
  title: string;
  embedUrl: string;
  watchUrl: string;
  Icon: typeof Instagram;
  color: string;
};

const VIDEOS: VideoEmbed[] = [
  {
    platform: "Instagram",
    title: "Fresh from the reel",
    embedUrl: "https://www.instagram.com/reel/DXExFZWArQi/embed",
    watchUrl: "https://www.instagram.com/reel/DXExFZWArQi/",
    Icon: Instagram,
    color: "var(--color-tangerine)",
  },
  {
    platform: "Instagram",
    title: "PookieToons short",
    embedUrl: "https://www.instagram.com/reel/DZ-IIbpi-_R/embed",
    watchUrl: "https://www.instagram.com/reel/DZ-IIbpi-_R/",
    Icon: Instagram,
    color: "var(--color-magenta)",
  },
  {
    platform: "Facebook",
    title: "Facebook fairy tale",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2219226845571481&show_text=0&width=360",
    watchUrl: "https://www.facebook.com/reel/2219226845571481",
    Icon: Facebook,
    color: "var(--color-sky-pop)",
  },
  {
    platform: "Facebook",
    title: "Facebook fruit story",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F977759968515409&show_text=0&width=360",
    watchUrl: "https://www.facebook.com/reel/977759968515409",
    Icon: Facebook,
    color: "var(--color-sky-pop)",
  },
  {
    platform: "TikTok",
    title: "TikTok fairy tale",
    embedUrl: "https://www.tiktok.com/embed/7631579496784612629",
    watchUrl: "https://www.tiktok.com/@pookiiee_toons/video/7631579496784612629",
    Icon: Music2,
    color: "var(--color-magenta)",
  },
  {
    platform: "TikTok",
    title: "TikTok fruit story",
    embedUrl: "https://www.tiktok.com/embed/7635316224959712520",
    watchUrl: "https://www.tiktok.com/@pookiiee_toons/video/7635316224959712520",
    Icon: Music2,
    color: "var(--color-magenta)",
  },
];

function useCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 1);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    const width = child?.offsetWidth || el.clientWidth * 0.8;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return { ref, canPrev, canNext, scroll };
}

function CarouselNav({ canPrev, canNext, onPrev, onNext, label }: {
  canPrev: boolean; canNext: boolean; onPrev: () => void; onNext: () => void; label: string;
}) {
  return (
    <div className="mb-4 flex justify-end gap-2 sm:hidden">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
        aria-label={`Previous ${label}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
        aria-label={`Next ${label}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

function WatchPage() {
  const stories = useCarousel();
  const ads = useCarousel();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop-sm">
            <Sparkles className="h-4 w-4" />
          </span>
          Afaq Munir
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-bold shadow-pop-sm transition hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-6 pb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--color-magenta)]" /> The Watch Room
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
          Press play on{" "}
          <span className="bg-gradient-to-r from-[var(--color-magenta)] via-[var(--color-tangerine)] to-[var(--color-sky-pop)] bg-clip-text text-transparent">
            PookieToons
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Every episode I've dropped across TikTok, Instagram and Facebook — embedded straight from the source. Tap any tile to open on the original platform.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <CarouselNav
          canPrev={stories.canPrev}
          canNext={stories.canNext}
          onPrev={() => stories.scroll(-1)}
          onNext={() => stories.scroll(1)}
          label="story"
        />

        {/* Mobile: horizontal snap carousel; Desktop: grid */}
        <div className="relative -mx-5 px-5 sm:hidden">
          <div
            ref={stories.ref}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-pookie-grab active:cursor-pookie-grab"
          >
            {VIDEOS.map((v, i) => (
              <article
                key={v.embedUrl}
                className="group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm"
                style={{ transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})` }}
              >
                <div className="flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: v.color }}>
                      <v.Icon className="h-3.5 w-3.5" />
                    </span>
                    {v.platform}
                  </span>
                  <a href={v.watchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground">
                    Open <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="relative aspect-[9/16] w-full bg-black">
                  <iframe
                    src={v.embedUrl}
                    title={`${v.platform} — ${v.title}`}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                    allowFullScreen
                    scrolling="no"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <article
              key={v.embedUrl}
              className="group relative overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
              style={{ transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})` }}
            >
              <div className="flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: v.color }}>
                    <v.Icon className="h-3.5 w-3.5" />
                  </span>
                  {v.platform}
                </span>
                <a href={v.watchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground">
                  Open <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="relative aspect-[9/16] w-full bg-black">
                <iframe
                  src={v.embedUrl}
                  title={`${v.platform} — ${v.title}`}
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                  allowFullScreen
                  scrolling="no"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          More episodes drop weekly across TikTok, Instagram and Facebook.
        </p>
      </section>


      <section id="ads" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-tangerine)]" /> Ads Play
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            AI ads I've made
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Short-form AI ad concepts running on Instagram Reels. Tap any tile to open on Instagram.
          </p>
        </div>

        <CarouselNav
          canPrev={ads.canPrev}
          canNext={ads.canNext}
          onPrev={() => ads.scroll(-1)}
          onNext={() => ads.scroll(1)}
          label="ad"
        />

        <div className="relative -mx-5 px-5 sm:mx-0 sm:px-0">
          <div
            ref={ads.ref}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-pookie-grab active:cursor-pookie-grab"
          >
            {ADS.map((ad, i) => (
              <article
                key={ad.embedUrl}
                className="group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop sm:w-[45vw] lg:w-[30vw]"
                style={{ transform: `rotate(${i % 2 === 0 ? "0.5deg" : "-0.5deg"})` }}
              >
                <div className="flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: "var(--color-tangerine)" }}>
                      <Instagram className="h-3.5 w-3.5" />
                    </span>
                    {ad.title}
                  </span>
                  <a
                    href={ad.watchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    Open <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="relative aspect-[9/16] w-full bg-black">
                  <iframe
                    src={ad.embedUrl}
                    title={ad.title}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                    allowFullScreen
                    scrolling="no"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm font-semibold text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logoAsset} alt="" className="h-7 w-7 rounded-full" />
            © {new Date().getFullYear()} Afaq Munir · PookieToons
          </div>
          <Link to="/" className="hover:text-foreground">← Back to portfolio</Link>
        </div>
      </footer>
    </div>
  );
}