import "./globals.css";

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
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
