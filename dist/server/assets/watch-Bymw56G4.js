import { t as pookietoons_logo_default } from "./pookietoons-logo-Cf5M0_yj.js";
import { t as ThemeToggle } from "./theme-toggle-D0G8Aa3m.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Facebook, Instagram, Music2, Sparkles } from "lucide-react";
//#region src/routes/watch.tsx?tsr-split=component
var ADS = [
	{
		title: "AI Ad · Reel 01",
		embedUrl: "https://www.instagram.com/reel/DZcu7i5NTXV/embed",
		watchUrl: "https://www.instagram.com/reel/DZcu7i5NTXV/"
	},
	{
		title: "AI Ad · Reel 02",
		embedUrl: "https://www.instagram.com/reel/DZh-dI-tpR3/embed",
		watchUrl: "https://www.instagram.com/reel/DZh-dI-tpR3/"
	},
	{
		title: "AI Ad · Reel 03",
		embedUrl: "https://www.instagram.com/reel/DZsel1ntzFD/embed",
		watchUrl: "https://www.instagram.com/reel/DZsel1ntzFD/"
	}
];
var VIDEOS = [
	{
		platform: "Instagram",
		title: "Fresh from the reel",
		embedUrl: "https://www.instagram.com/reel/DXExFZWArQi/embed",
		watchUrl: "https://www.instagram.com/reel/DXExFZWArQi/",
		Icon: Instagram,
		color: "var(--color-tangerine)"
	},
	{
		platform: "Instagram",
		title: "PookieToons short",
		embedUrl: "https://www.instagram.com/reel/DZ-IIbpi-_R/embed",
		watchUrl: "https://www.instagram.com/reel/DZ-IIbpi-_R/",
		Icon: Instagram,
		color: "var(--color-magenta)"
	},
	{
		platform: "Facebook",
		title: "Facebook fairy tale",
		embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2219226845571481&show_text=0&width=360",
		watchUrl: "https://www.facebook.com/reel/2219226845571481",
		Icon: Facebook,
		color: "var(--color-sky-pop)"
	},
	{
		platform: "Facebook",
		title: "Facebook fruit story",
		embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F977759968515409&show_text=0&width=360",
		watchUrl: "https://www.facebook.com/reel/977759968515409",
		Icon: Facebook,
		color: "var(--color-sky-pop)"
	},
	{
		platform: "TikTok",
		title: "TikTok fairy tale",
		embedUrl: "https://www.tiktok.com/embed/7631579496784612629",
		watchUrl: "https://www.tiktok.com/@pookiiee_toons/video/7631579496784612629",
		Icon: Music2,
		color: "var(--color-magenta)"
	},
	{
		platform: "TikTok",
		title: "TikTok fruit story",
		embedUrl: "https://www.tiktok.com/embed/7635316224959712520",
		watchUrl: "https://www.tiktok.com/@pookiiee_toons/video/7635316224959712520",
		Icon: Music2,
		color: "var(--color-magenta)"
	}
];
function useCarousel() {
	const ref = useRef(null);
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
	const scroll = (dir) => {
		const el = ref.current;
		if (!el) return;
		const width = el.firstElementChild?.offsetWidth || el.clientWidth * .8;
		el.scrollBy({
			left: dir * width,
			behavior: "smooth"
		});
	};
	return {
		ref,
		canPrev,
		canNext,
		scroll
	};
}
function CarouselNav({ canPrev, canNext, onPrev, onNext, label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-4 flex justify-end gap-2 sm:hidden",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: onPrev,
			disabled: !canPrev,
			className: "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0",
			"aria-label": `Previous ${label}`,
			children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: onNext,
			disabled: !canNext,
			className: "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0",
			"aria-label": `Next ${label}`,
			children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
		})]
	});
}
function WatchPage() {
	const stories = useCarousel();
	const ads = useCarousel();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-6",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2 font-display text-lg font-bold",
					children: [/* @__PURE__ */ jsx("span", {
						className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop-sm",
						children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
					}), "Afaq Munir"]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "inline-flex items-center gap-1 rounded-full border-2 border-foreground bg-card px-4 py-2 text-sm font-bold shadow-pop-sm transition hover:-translate-y-0.5",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), " Back home"]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-6xl px-5 pt-6 pb-12 text-center",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm",
						children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--color-magenta)]" }), " The Watch Room"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl",
						children: [
							"Press play on",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "bg-gradient-to-r from-[var(--color-magenta)] via-[var(--color-tangerine)] to-[var(--color-sky-pop)] bg-clip-text text-transparent",
								children: "PookieToons"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						children: "Every episode I've dropped across TikTok, Instagram and Facebook — embedded straight from the source. Tap any tile to open on the original platform."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-6xl px-5 pb-24",
				children: [
					/* @__PURE__ */ jsx(CarouselNav, {
						canPrev: stories.canPrev,
						canNext: stories.canNext,
						onPrev: () => stories.scroll(-1),
						onNext: () => stories.scroll(1),
						label: "story"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative -mx-5 px-5 sm:hidden",
						children: /* @__PURE__ */ jsx("div", {
							ref: stories.ref,
							className: "flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-pookie-grab active:cursor-pookie-grab",
							children: VIDEOS.map((v, i) => /* @__PURE__ */ jsxs("article", {
								className: "group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm",
								style: { transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})` },
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2 text-sm font-bold",
										children: [/* @__PURE__ */ jsx("span", {
											className: "inline-flex h-7 w-7 items-center justify-center rounded-full text-white",
											style: { background: v.color },
											children: /* @__PURE__ */ jsx(v.Icon, { className: "h-3.5 w-3.5" })
										}), v.platform]
									}), /* @__PURE__ */ jsxs("a", {
										href: v.watchUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground",
										children: ["Open ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "relative aspect-[9/16] w-full bg-black",
									children: /* @__PURE__ */ jsx("iframe", {
										src: v.embedUrl,
										title: `${v.platform} — ${v.title}`,
										loading: "lazy",
										allow: "autoplay; encrypted-media; picture-in-picture; clipboard-write",
										allowFullScreen: true,
										scrolling: "no",
										className: "absolute inset-0 h-full w-full"
									})
								})]
							}, v.embedUrl))
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3",
						children: VIDEOS.map((v, i) => /* @__PURE__ */ jsxs("article", {
							className: "group relative overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop",
							style: { transform: `rotate(${i % 2 === 0 ? "-0.5deg" : "0.5deg"})` },
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-2 text-sm font-bold",
									children: [/* @__PURE__ */ jsx("span", {
										className: "inline-flex h-7 w-7 items-center justify-center rounded-full text-white",
										style: { background: v.color },
										children: /* @__PURE__ */ jsx(v.Icon, { className: "h-3.5 w-3.5" })
									}), v.platform]
								}), /* @__PURE__ */ jsxs("a", {
									href: v.watchUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground",
									children: ["Open ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "relative aspect-[9/16] w-full bg-black",
								children: /* @__PURE__ */ jsx("iframe", {
									src: v.embedUrl,
									title: `${v.platform} — ${v.title}`,
									loading: "lazy",
									allow: "autoplay; encrypted-media; picture-in-picture; clipboard-write",
									allowFullScreen: true,
									scrolling: "no",
									className: "absolute inset-0 h-full w-full"
								})
							})]
						}, v.embedUrl))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 text-center text-sm text-muted-foreground",
						children: "More episodes drop weekly across TikTok, Instagram and Facebook."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "ads",
				className: "mx-auto max-w-6xl px-5 pb-24",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-10 text-center",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--color-tangerine)]" }), " Ads Play"]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-display text-4xl font-bold sm:text-5xl",
								children: "AI ads I've made"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-3 max-w-xl text-muted-foreground",
								children: "Short-form AI ad concepts running on Instagram Reels. Tap any tile to open on Instagram."
							})
						]
					}),
					/* @__PURE__ */ jsx(CarouselNav, {
						canPrev: ads.canPrev,
						canNext: ads.canNext,
						onPrev: () => ads.scroll(-1),
						onNext: () => ads.scroll(1),
						label: "ad"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative -mx-5 px-5 sm:mx-0 sm:px-0",
						children: /* @__PURE__ */ jsx("div", {
							ref: ads.ref,
							className: "flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-pookie-grab active:cursor-pookie-grab",
							children: ADS.map((ad, i) => /* @__PURE__ */ jsxs("article", {
								className: "group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop sm:w-[45vw] lg:w-[30vw]",
								style: { transform: `rotate(${i % 2 === 0 ? "0.5deg" : "-0.5deg"})` },
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between gap-2 border-b-2 border-foreground/10 px-4 py-3",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2 text-sm font-bold",
										children: [/* @__PURE__ */ jsx("span", {
											className: "inline-flex h-7 w-7 items-center justify-center rounded-full text-white",
											style: { background: "var(--color-tangerine)" },
											children: /* @__PURE__ */ jsx(Instagram, { className: "h-3.5 w-3.5" })
										}), ad.title]
									}), /* @__PURE__ */ jsxs("a", {
										href: ad.watchUrl,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground",
										children: ["Open ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" })]
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "relative aspect-[9/16] w-full bg-black",
									children: /* @__PURE__ */ jsx("iframe", {
										src: ad.embedUrl,
										title: ad.title,
										loading: "lazy",
										allow: "autoplay; encrypted-media; picture-in-picture; clipboard-write",
										allowFullScreen: true,
										scrolling: "no",
										className: "absolute inset-0 h-full w-full"
									})
								})]
							}, ad.embedUrl))
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t-2 border-foreground/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm font-semibold text-muted-foreground md:flex-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: pookietoons_logo_default,
								alt: "",
								className: "h-7 w-7 rounded-full"
							}),
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Afaq Munir · PookieToons"
						]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "← Back to portfolio"
					})]
				})
			})
		]
	});
}
//#endregion
export { WatchPage as component };
