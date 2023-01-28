import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
      <div className="flex w-[1320px] mx-auto">
        <div className="w-[30%]">
          <Sidebar />
        </div>
        <div className="w-2/5">
          <Component {...pageProps} />
        </div>
        <div className="w-[30%]">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
