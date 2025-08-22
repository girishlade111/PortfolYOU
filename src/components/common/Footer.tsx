import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">PortfolYOU</span>
        </div>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} PortfolYOU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
