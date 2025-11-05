
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Franco Aranzabal Dev. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
