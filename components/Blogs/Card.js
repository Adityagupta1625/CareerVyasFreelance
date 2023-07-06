import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../utils/sanityClient";

export default function Card({ data }) {
  const imageProps = useNextSanityImage(client, data.mainImage);

  return (
    <div className="w-80 h-full rounded-md overflow-hidden ring-2 ring-slate-300 hover:shadow-lg hover:shadow-blue-400 my-2 mx-4 flex flex-col items-center bg-white">
      <div className="w-auto relative">
        <Image
          className={"rounded-md"}
          src={imageProps.src}
          alt="Servon"
          width={500}
          height={350}
          objectFit="cover"
          layout="intrinsic"
        />

        <p
          className="bg-red-700 text-white text-center absolute top-3 left-2 w-12
        rounded-md"
        >
          New
        </p>
      </div>
      <div className="p-2 h-fit">
        <div className="font-bold text-xl mb-1 my-1">{data.title}</div>
        <p className="text-gray-700 text-base">
          <span className="text-blue-500 font-bold">
            {new Date(data._createdAt).toString().substring(0,16)+","+new Date(data._createdAt).toString().substring(16,24)}{" "}
          </span>
          <br></br>
          {data.excerpt.slice(0, 200)+".."}
        </p>
      </div>
      <Link
        href={{ pathname: "/slug", query: { keyword: `${data.slug.current}` } }}
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2">
          Read More
        </button>
      </Link>
    </div>
  );
}
