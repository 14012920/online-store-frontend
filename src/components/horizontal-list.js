import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
const callouts = [
  {
    name: "Ring6",
    description: "Work from home accessories",
    imageSrc: "https://picsum.photos/200/300",
    imageAlt: ".",
    price: "240",
  },
  {
    name: "Ring 4",
    description: "Journals and note-taking",
    imageSrc: "https://picsum.photos/200/300",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    price: "340",
  },
  {
    name: "Ring1",
    description: "Daily commute essentials",
    imageSrc: "https://picsum.photos/200/300",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    price: "540",
  },
  {
    name: "Ring2",
    description: "Journals and note-taking",
    imageSrc: "https://picsum.photos/200/300",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    price: "140",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};
const externaImageLoader = ({ src }) => `${src}`;

const HorizontalList = (props) => {
  const dispatch = useDispatch();
  console.log("products", props);
  const router = useRouter();
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        router.replace("/");
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <div className="px-4 relative sm:px-6 lg:px-4 pb-4">
      <div className="max-w-2xl sm:py-2 lg:max-w-none lg:py-8">
        <h2 className="my-2 text-2xl text-center text-gray-900 font-josefin ">
          New Arrival
        </h2>
      </div>
      <div className="my-4 lg:my-6 ">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          transitionDuration={700}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
          renderDotsOutside={true}
        >
          {props?.products.map((callout) => (
            <div
              key={callout._id}
              class="mx-2 border-slate-700 shadow-md items-center "
            >
              {/* <Link href={"/product-detail"}> */}
              <Link href={`/product-detail/${callout._id}`}>
                <div className=" relative h-48  min-w-full overflow-hidden  sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1">
                  <Image
                    loader={externaImageLoader}
                    fill
                    src={callout?.images && callout?.images[0]}
                    alt={callout?.images && callout?.images[0]}
                  />
                </div>
              </Link>
              <div className=" pb-1 flex flex-col text-center items-center">
                <h3 className="mt-2 text-md text-gray-500 ">{callout.title}</h3>
                <h3 className=" text-md text-slate-950">{`₹${callout.price}`}</h3>
                <button
                  className="text-sm  justify-center items-center py-1 flex self-center my-1 w-32 border border-slate-400 bg-white"
                  onClick={() => {
                    props.onPressCart(callout);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default HorizontalList;
