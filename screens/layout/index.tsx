import IconGithub from '~/icons/Github';
import IconLinkedIn from '~/icons/LinkedIn';
import IconMastodon from '~/icons/Mastodon';
import IconProductHunt from '~/icons/ProductHunt';
import IconTwitter from '~/icons/Twitter';
import IconBluesky from '~/icons/Bluesky';
import IconThreads from '~/icons/Threads';
import Link from '~/components/Link';
import Header from './Header';
import React from 'react';
import IPaths from '~/types/paths';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-white text-gray-900 border-t-brand border-t-4 h-full">
        <div className="flex flex-col h-full max-w-3xl mx-auto px-4">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-200 mt-12 pt-8 pb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3 mb-8">
              <FooterLink href="https://github.com/rstankov" label="GitHub">
                <IconGithub className="size-5" />
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/radoslavstankov/"
                label="LinkedIn"
              >
                <IconLinkedIn className="size-5" />
              </FooterLink>
              <FooterLink href="https://twitter.com/rstankov" label="Twitter">
                <IconCicle>
                  <IconTwitter className="size-3 text-white" />
                </IconCicle>
              </FooterLink>
              <FooterLink
                href="https://www.threads.com/@rstankov"
                label="Threads"
              >
                <IconCicle>
                  <IconThreads className="size-4 text-white" />
                </IconCicle>
              </FooterLink>
              <FooterLink
                href="https://bsky.app/profile/rstankov.bsky.social"
                label="Bluesky"
              >
                <IconCicle>
                  <IconBluesky className="size-4 text-white" />
                </IconCicle>
              </FooterLink>
              <FooterLink
                href="https://mastodon.social/@rstankov"
                label="Mastodon"
              >
                <IconMastodon className="size-5" />
              </FooterLink>
              <FooterLink
                href="https://producthunt.com/@rstankov"
                label="Product Hunt"
              >
                <IconProductHunt className="size-5" />
              </FooterLink>
            </div>
            <small className="text-gray-400 text-xs">
              © Radoslav Stankov {new Date().getFullYear()}
            </small>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

function IconCicle({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full p-0.5 size-5 inline-flex items-center justify-center bg-gray-800 group-hover:bg-brand transition-colors">
      {children}
    </span>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: IPaths;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="me noopener"
      className="group flex items-center gap-2 text-sm text-gray-600 hover:text-brand"
    >
      {children}
      <span>{label}</span>
    </Link>
  );
}
