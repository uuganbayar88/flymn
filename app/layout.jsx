import "./globals.css";
import { Rubik, Roboto_Condensed, Playfair_Display, Archivo_Black } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--f-rubik",
  display: "swap",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--f-cond",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  style: ["italic"],
  weight: ["400", "500"],
  variable: "--f-play",
  display: "swap",
});
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-arch",
  display: "swap",
});

export const metadata = {
  title: "FLYMN — Нислэгийн тийз онлайн захиалга",
  description:
    "FLYMN Ticketing and Travel Agency — олон улсын онгоцны тийзийг онлайнаар захиалж, э-тийзээ минутын дотор аваарай. IATA агент, Amadeus GDS.",
  openGraph: {
    title: "FLYMN — Нислэгийн тийз онлайн захиалга",
    description: "Олон улсын онгоцны тийз, аялалын багц — онлайнаар, хэдхэн минутад.",
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="mn"
      className={`${rubik.variable} ${robotoCondensed.variable} ${playfair.variable} ${archivoBlack.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
