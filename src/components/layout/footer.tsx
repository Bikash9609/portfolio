export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm py-8 text-center text-sm text-muted-foreground">
      <div className="max-w-screen-md mx-auto w-full px-4">
        <p>© {new Date().getFullYear()} Bikash Tiwari. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60">
          Built with Next.js, Tailwind, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
