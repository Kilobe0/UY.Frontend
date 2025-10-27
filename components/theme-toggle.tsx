"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-lg bg-card text-foreground transition-colors hover:bg-primary-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      type="button"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Sun Icon - Light Mode */}
        <svg
          className={`h-5 w-5 transition-opacity duration-200 ${
            theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon Icon - Dark Mode */}
        <svg
          className={`h-5 w-5 transition-opacity duration-200 absolute inset-0 ${
            theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
}
