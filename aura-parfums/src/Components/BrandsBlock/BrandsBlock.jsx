import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './BrandsBlock.scss'


const BrandsBlock = ({ brandsCount = 28 }) => {
  const images = Array.from({ length: brandsCount }, (_, index) => `Images/brands/Image ${index + 1}.png`);
  return (
    <div className="brands">
      <h2>БРЕНДИ</h2>
      <div className={"slider-block"}>
        <div className="container">
          <Swiper
            className="sliderrr"
            modules={[Pagination]}
            loop={true}
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              550: { slidesPerView: 2, slidesPerGroup: 2 },
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1100: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
          >

            {images.map((image, index) => (
              <SwiperSlide><img key={index} src={image} alt={`Image ${index}`} /></SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </div>




  );
}

export default BrandsBlock;