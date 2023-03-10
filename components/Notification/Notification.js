import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import groq from "groq";
import client from "../client";
import React from "react";


async function getPosts() {
  
  const posts = await client.fetch(groq`
    *[_type == "latestNotification"] | order(dateTime(_createdAt) desc)
  `);
  console.log(posts)
  return posts;
}

export default function Notification() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 675 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 675, min: 0 },
      items: 1,
    },
  };
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-between my-3
    w-full h-full"
      >
        <h1 className="text-3xl font-bold text-[#333333] m-2">
          Latest Notifications
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        focusOnSelect={true}
        keyBoardControl={true}
      >
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </Carousel>
    </>
  );
}
