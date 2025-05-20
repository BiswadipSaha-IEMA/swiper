import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Styles.css';

const DoctorsCarousel = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Ahmad Khan',
      specialty: 'Neurologist',
      image: '../src/assets/doc.jpg'
    },
    {
      id: 2,
      name: 'Dr. Heena Sachdeva',
      specialty: 'Orthopedics',
      image: '../src/assets/doc.jpg'
    },
    {
      id: 3,
      name: 'Dr. Ankur Sharma',
      specialty: 'Medicine',
      image: '../src/assets/doc.jpg'
    },
    {
      id: 4,
      name: 'Dr. Hull',
      specialty: 'Cardiology',
      image: '../src/assets/doc.jpg'
    },
    {
      id: 5,
      name: 'Dr. Sarah Wilson',
      specialty: 'Dermatology',
      image: '../src/assets/doc.jpg'
    },
  ];

  return (
    <div className='doctors-carousel-most'>
      <div className="doctors-carousel-container">
        <div className="carousel-inner-container w-full max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
              dynamicBullets: false,
              renderBullet: function (index, className) {
                if (index >= 3) return '';
                return `<span class="${className}"></span>`;
              },
              formatFractionCurrent: function(number) {
                return ((number - 1) % 3) + 1;
              },
              renderFraction: function(current, total) {
                return '';
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false
              },
              1024: {
                slidesPerView: 4,
                centeredSlides: false
              }
            }}
            slidesPerGroup={1}
            className="mySwiper"
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              
              const bullets = document.querySelectorAll('.custom-bullet');
              
              if (bullets.length === 3) {
                bullets.forEach(bullet => {
                  bullet.classList.remove('custom-bullet-active');
                });
                
                const activeBulletIndex = realIndex % 3;
                bullets[activeBulletIndex].classList.add('custom-bullet-active');
              }
            }}
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <div className="doctor-card flex flex-col items-center justify-center h-full py-4">
                  <div className="doctor-image-container relative mx-auto mb-4">
                    <div className="doctor-image-wrapper">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="doctor-image w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="doctor-name text-lg font-medium text-center mb-1">{doctor.name}</h3>
                  <p className="doctor-specialty text-sm text-blue-500 text-center">{doctor.specialty}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCarousel;