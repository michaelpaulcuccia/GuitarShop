import "./globals.css";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { UserContextProvider } from "../../context/UserContext";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

export const metadata = {
  title: "TREMELO | Guitars For Sale",
  description: "Find new and used guitars",
  keywords:
    "guitar, electric guitar, acoustic guitar, acoustic, bass, bass guitar",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <UserContextProvider>
            <NavBar />
            <Container>
              <main>{children}</main>
            </Container>
          </UserContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
