import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit's Portfolio",
  description: "The Best Animated Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      {/*qki AnimatePressent client m hi ho skta  h and isko[layout] client nhi kr skte..so sbko rk component m wrap krke us component ko yehaan show kr de rhe* */}
      <TransitionProvider>{children}</TransitionProvider>
      
      
      </body>
    </html>
  );
}
