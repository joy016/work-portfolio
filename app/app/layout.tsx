import { Barlow_Condensed, Fredoka } from "next/font/google";
import "./globals.css";
import { Provider } from "../components/ui/provider";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-heading",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${fredoka.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>{children} </Provider>
      </body>
    </html>
  );
}
