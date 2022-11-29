import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import Spinner from "./Spinner";

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  const items = listings?.map(({ data, id }) => {
    return (
      <>
        <img
          onClick={() => navigate(`/category/${data.type}/${id}`)}
          key={id}
          src={data.imgUrls[0]}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            height: "400px",
          }}
        />

        <p className="swiperSlideText">{data.name}</p>
        <p className="swiperSlidePrice">
          ${data.discountedPrice ?? data.regularPrice}{" "}
          {data.type === "rent" && "/ month"}
        </p>
      </>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }

  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>
        <div style={{ height: "150%", display: "flex", alignItems: "center" }}>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
          />
        </div>
        {/* <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="swiperSlideDiv"
              >
                <p className="swiperSlideText">{data.name}</p>
                <p className="swiperSlidePrice">
                  ${data.discountedPrice ?? data.regularPrice}{" "}
                  {data.type === "rent" && "/ month"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </>
    )
  );
}

export default Slider;
