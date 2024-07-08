import Image from "next/image";
import Link from "next/link";
import logo from "@/public/conacylogo.svg";
import messaging from "@/public/messaging.svg";
import timer from "@/public/timer.svg";
import view from "@/public/view.svg";
import usersecurity from "@/public/security.svg";
import { Potta_One } from "next/font/google";
import ScreenshotPhone from "@/app/components/ScreenshotPhone";
import Footer from "./components/Footer";
import ArrowForward from "@/public/Icons/ArrowForward";
const pottaone = Potta_One({ weight: ["400"], subsets: ["latin-ext"] });
export default function IntroPage() {
  const features = [
    ["Messaging", "Choose who can send you direct messages.", messaging],
    ["Post Visibility", "Determine who can see your posts and comment.", view],
    ["Timed Posts", "Share updates that disappear after a set time.", timer],
    [
      "Profile Security",
      "You can choose not to get searched by strangers.",
      usersecurity,
    ],
  ];
  return (
    <main className="flex flex-col min-h-screen">
      <div className="navbar sticky flex justify-between items-center px-10 py-5 w-full">
        {/* <div className="max-sm:hidden"></div> */}
        <div className="flex items-start">
          <Image
            src={logo}
            alt=""
            className="sm:h-20 sm:w-20 h-16 w-16"
          ></Image>
          <div className={pottaone.className + " sm:text-6xl text-4xl"}>
            onacy
          </div>
        </div>
        <div className="max-sm:hidden">
          <GetStartedButton />
        </div>
      </div>
      <div className="flex max-lg:flex-col max-lg:items-center justify-between items-start h-full">
        <div className="flex flex-col mx-8 flex-1 justify-between h-full p-5 gap-5">
          <div className="text-4xl sm:text-6xl text-center">
            Where privacy is priority.
          </div>
          <div className="text-lg sm:text-2xl text-center ">
            At <span className={pottaone.className}>Conacy</span>, we understand
            the importance of connecting with friends and family in your own
            unique way. Our customizable visibility settings empower you to
            tailor your social experience like never before.
          </div>
          <div className="flex max-lg:flex-col flex-row-reverse gap-5 items-center">
            <ScreenshotPhone />
            <ul className="text-lg grid grid-flow-row xl:grid-cols-2 grid-cols-1 gap-3">
              {features.map((v, i) => (
                <div
                  key={v[0] + i}
                  className="flex flex-col gap-4 bg-base-100 card bg-opacity-40 backdrop:blur-lg p-3 transition-transform hover:scale-105"
                >
                  <div className="flex flex-row items-center">
                    <Image
                      src={v[2]}
                      alt=""
                      className="sm:w-40 sm:h-40 w-28 h-28"
                    />
                    <div className="flex flex-col">
                      <div>
                        <b className="sm:text-xl text-base">{v[0]}</b>
                      </div>
                      <div className="max-sm:text-sm">{v[1]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="sm:hidden">
            <GetStartedButton />
          </div>
        </div>
        {/* <div className="max-md:hidden">
          <ScreenshotPhone />
        </div> */}
      </div>
      <Footer />
    </main>
  );
}

const GetStartedButton = () => {
  return (
    <Link
      className="btn max-sm:btn-block border-none transition-all duration-300 bg-gradient-to-br dark:from-blue-200 dark:to-white from-blue-950 to-sky-700 bg-sky-400 dark:bg-slate-400 bg-size-200 hover:to-black hover:dark:to-white bg-[0%] hover:bg-[100%] flex justify-between "
      href={"/register"}
    >
      <span className="text-2xl text-white dark:text-black">Get Started</span>
      <ArrowForward className="h-8 dark:fill-black fill-white" />
    </Link>
  );
};
