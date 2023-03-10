import Link from "next/link";
import Image from "next/image";
import logo from "../Navbar/images/logo.svg";
import logo2 from "./images/logo2.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import discord from "./images/discord.svg";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-full bg-[#C1FFF0]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full  ">
        <div className="flex flex-col items-start lg:items-center justify-center w-full md:w-1/2 my-7">
          <div className="flex flex-col items-start justify-center">
            <p className="text-black text-4xl font-bold">Career Vyas</p>
            <p className="text-3xl text-slate-500 font-semibold mt-3">
              Strengthening the Vector of Education
            </p>
            <div className="flex flex-row">
              <div
                className="lg:h-[200px] lg:w-[250px] my-2
              h-[150px] w-[125px] relative"
              >
                <Image
                  src={logo}
                  alt="career vyas"
                  height={150}
                  width={125}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div
                className="lg:h-[200px] lg:w-[250px] my-2
              h-[150px] w-[125px] relative"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/carrervyaswebsite.appspot.com/o/Footer%2Fstartupindia%20logo.png?alt=media&token=6e0d6f9f-c071-42f1-a1c9-d81192781759"
                  alt="career vyas"
                  height={150}
                  width={125}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start lg:items-center w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-8 lg:gap-4 mx-3 lg:mx-0">
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/">Home</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/blog">Blogs</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/">College Diaries</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/about">About us</Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/reachout">
                Reach Out
                </Link>
            </span>
            <span className="text-sm cursor-pointer tracking-tight">
              <Link href="/terms">Terms</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <span className="text-slate-700 text-xs lg:text-sm">
            ?? 2022,Career Vyas. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col items-end lg:items-center justify-center w-full md:w-1/2 mb-4">
          <div className="text-slate-700 flex flex-col">
            Connect with us
            <div className="flex flex-row">
              <div
                className="h-[30px] w-[30px] relative m-1
              cursor-pointer"
              >
                <Link href="https://www.instagram.com/careervyas/?utm_medium=copy_link">
                  <Image
                    src={instagram}
                    alt="career vyas"
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://discord.gg/a5dRVB63GM">
                  <Image
                    src={discord}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.linkedin.com/company/career-vyas">
                  <Image
                    src={linkedin}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://twitter.com/career_vyas?t=l8Z6rBmtIrWOgeHxFl8UTQ&s=09">
                  <Image
                    src={twitter}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
              <div
                className="h-[30px] w-[30px] relative m-1
                cursor-pointer"
              >
                <Link href="https://www.facebook.com/profile.php?id=100086391339652">
                  <Image
                    src={facebook}
                    alt="career vyas"
                    height={30}
                    width={30}
                    objectFit="cover"
                    layout="fill"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
