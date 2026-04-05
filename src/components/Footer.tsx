"use client";

import { Leaf } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Leaf size={20} /> Dinethri Sulakshani
        </div>
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {year} Dinethri Sulakshani. All rights reserved. <br className="md:hidden" />
          Designed for a sustainable future.
        </p>
      </div>
    </footer>
  );
}
