import React, { useEffect, useState } from 'react'
import BooksCard from '../books/BooksCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/books.Api';



const categories= ["Chose a genre ", "Business", "Fiction", "Horror", "Adventure"]
const TopSellers=()=>{
    
    const [selectedCategory, setSelectedCategory] = useState("chose a genre")
    const {data: books = []} = useFetchAllBooksQuery();
    
    


    const filteredBooks = selectedCategory === "chose a genre" ? books: books.filter(book=>
    book.category === selectedCategory.toLowerCase())
    


  return (
    <div className='py-5'>
        <h2 className='text-3xl font-semibold mb-6'>TopSeller</h2>

        {/* categories filter */}
        <div className='mdb-8 flex items-center'>
            <select onChange={(e)=> setSelectedCategory(e.target.value)}
            name="category" id="category" className='border bg-[#EAEAEA] rounded-md border-gray-200 px-4 py-2 focus:outline-none'>
               {
                categories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))
               }
            </select>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1180: {
            slidesPerView:3,
            spaceBetween:50,
          }
        }}
        modules={[Pagination, Navigation]}
        
        className="mySwiper">
            
            {
                filteredBooks.length > 0 && filteredBooks.map((book, index)=>(
                    <SwiperSlide key={index}>
                        <BooksCard key={index} book={book}/>
                    </SwiperSlide>
                
                ))
            }
        
       
      </Swiper> 
     




      
    </div>
  )
}

export default TopSellers
