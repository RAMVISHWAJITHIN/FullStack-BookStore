import React, { useEffect,useState } from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation } from "swiper/modules";
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/Features/books/booksApi';
const Recommended = () => {
    // const [books, setBooks] = useState([]);
    // useEffect(()=>{
    //   fetch("books.json").then((res)=>res.json()).then((data)=>setBooks(data))

    // })
      const { data, isLoading, isError, error } = useFetchAllBooksQuery();
        const books = data?.book || [];
        console.log(books)
        if (isLoading) {
          return <div>Loading...</div>;
        }
        
        if (isError) {
          return <div>Error: {error?.message}</div>;
        }
        
        if (books.length === 0) {
          return <div>No books available</div>;
        }
  return (
    <>
    <div className="py-6">
    <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
    {/* Swiper Carousel */}
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} // Enable navigation buttons
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8,18).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
   
    </>
  )
}

export default Recommended