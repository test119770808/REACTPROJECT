export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      &copy; Next JS is Good!(footer)
    </div>
  );
}