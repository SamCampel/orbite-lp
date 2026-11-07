import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonWithIconProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function ButtonWithIcon({
  children,
  href,
  onClick,
  className,
  ...props
}: ButtonWithIconProps) {
  const content = (
    <>
      <span className="relative z-10 transition-all duration-500">{children}</span>
      <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#121214] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </>
  );

  const commonClassName = [
    'group relative h-12 w-fit overflow-hidden rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 pe-14 text-sm font-medium text-white transition-all duration-500 hover:ps-14 hover:pe-6',
    className,
  ].join(' ');

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={commonClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={commonClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

export default function ButtonWithIconDemo() {
  return <ButtonWithIcon href="#features">Ver funcionalidades</ButtonWithIcon>;
}
