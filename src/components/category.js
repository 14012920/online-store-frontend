import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const callouts = [
  {
    name: "Jewellery ",
    description: "Work from home accessories",
    imageSrc:
      "https://media.istockphoto.com/id/652925014/photo/horizontal-portrait-of-a-beautiful-girl-with-shiny-jewelry.jpg?s=612x612&w=is&k=20&c=22n2Xt5UporgzUIfnOn3ylSLhcs1zSoeqq0daCBuKe4=",
    imageAlt: "Jawellery wear",
    href: "#",
  },
  {
    name: "Women footwear",
    description: "Journals and note-taking",
    imageSrc:
      "https://media.istockphoto.com/id/1182647884/photo/maybe-these-will-do.jpg?s=612x612&w=is&k=20&c=PWUzKrHGU6XSFJviKh8ZOlzGbWn_o7RKZEYvswJDq8c=",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Women Wear",
    description: "Daily commute essentials",
    imageSrc:
      "https://media.istockphoto.com/id/521622910/photo/the-classic-little-black-dress-stylish-and-versatile.jpg?s=612x612&w=is&k=20&c=vAmOG0Fiv7dgvJ7G-C61fRdFi4BBx17OUaN6z0HCbB0=",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Women Cosmatics",
    description: "Journals and note-taking",
    imageSrc:
      "https://media.istockphoto.com/id/1197806204/photo/makeup-artist-applies-eye-shadow.jpg?s=612x612&w=is&k=20&c=Y7XbnklX20Ta6GhT4gBUw3njg0Co7fN_r8K-5k2Vtg8=",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
];
const externaImageLoader = ({ src }) => `${src}`;

export default function Category() {
  const [catList, setCatList] = useState([]);

  const getCatList = () => {
    fetch("online-store-c3ujtnbe7-manoj-sonis-projects.vercel.app/api/static/catlist")
      .then((r) => r.json())
      .then((res) => {
        console.log("CATAATTTTRES", res);
        setCatList(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCatList();
  }, []);

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-4 pt-0 ">
        <div className="mx-auto max-w-2xl sm:py-2 lg:max-w-none lg:py-8">
          <h2 className="text-2xl py-2 text-center text-gray-900 lg:text-3xl">
            Collections
          </h2>

          <div className="items-center justify-center mt-2 grid grid-cols-2 gap-4 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {catList.map((callout) => (
               <Link href={`/catwise-products/${callout._id}`}>
              <div key={callout.name}>
                <div className="relative h-40  overflow-hidden  bg-white  sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75">
                  <Image
                    loader={externaImageLoader}
                    fill
                    src={callout.image}
                    alt={callout.name}
                    className="h-full w-full object-cover object-center lg:h-52"
                  />
                </div>
                <h3 className="mt-2 text-sm text-gray-500 text-center lg:text-xl">
                  {/* <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a> */}
                </h3>
                <p className="text-base font-medium text-gray-900 text-center">
                  {callout.name}
                </p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
