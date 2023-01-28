import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#f1f1f1] min-h-screen flex max-w-[1500px] mx-auto">
      <Sidebar />
      <Component {...pageProps} />
      <div className="w-[375px]">
        <Suggestions />
      </div>
    </div>
  );
}

export default MyApp;
