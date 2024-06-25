import Navigation from "./components/navigation";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 레이아웃에 적용할 내용을 입력... 공통으로 적용할 Navigation 추가...  */}
        <Navigation />
        <hr />
        {children}
        </body>
    </html>
  );
}
