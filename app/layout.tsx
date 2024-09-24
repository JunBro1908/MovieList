import { Metadata } from "next";
import Navigation from "../component/navigation_bar";
import "../css/global.css";

export const metadata: Metadata = {
  title: { template: `%s | nextJs movie`, default: "NextJs Movie" },
  description: "best Movies made by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
