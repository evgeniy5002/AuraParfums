import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './BrandsBlock.scss'


const BrandsBlock = ({brandsCount}) => {
    const images = Array.from({ length: brandsCount}, (_, index) => `Images/brands/Image ${index + 1}.png`);
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
            slidesPerView={4}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            slidesPerGroup={4}
            >
            
            {images.map((image, index) => (
              <SwiperSlide><img key={index} src={image} alt={`Image ${index}`}  /></SwiperSlide>

            ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      
  
    
  );
}

export default BrandsBlock;