import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TREMELO | Guitars For Sale",
  description: "Find new and used guitars",
  keywords: 'guitar, electric guitar, acoustic guitar, acoustic, bass, bass guitar'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Container>
            <NavBar />
            <main>{children}</main>
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
