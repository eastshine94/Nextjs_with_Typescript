import { ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

function Link({ children, href, className }: LinkProps) {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default Link;
