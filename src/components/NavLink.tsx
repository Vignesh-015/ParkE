interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  const baseClasses = "text-gray-600 hover:text-cyan-600 transition-colors duration-200";
  const mobileClasses = mobile 
    ? "block px-3 py-2 text-base font-medium" 
    : "text-sm font-medium";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
}