import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
//#region src/components/theme-toggle.tsx
function getInitial() {
	if (typeof window === "undefined") return false;
	const stored = window.localStorage.getItem("theme");
	if (stored) return stored === "dark";
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function ThemeToggle({ className = "" }) {
	const [dark, setDark] = useState(false);
	useEffect(() => {
		const initial = getInitial();
		setDark(initial);
		document.documentElement.classList.toggle("dark", initial);
	}, []);
	const toggle = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		window.localStorage.setItem("theme", next ? "dark" : "light");
	};
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: toggle,
		"aria-label": dark ? "Switch to light theme" : "Switch to dark theme",
		className: `inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-pop-sm transition hover:-translate-y-0.5 ${className}`,
		children: dark ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
	});
}
//#endregion
export { ThemeToggle as t };
