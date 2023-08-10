import { RxDesktop, RxCrop, RxPencil2, RxReader, RxEnvelopeClosed, RxArrowTopRight} from 'react-icons/rx'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Frontend Developer',
    description: ' Web application development: I specialize in building responsive and user-friendly web applications using technologies like React, Vue, Svelte, and more. I focus on creating interfaces that provide an exceptional user experience, following industry best practices for front-end development.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Website Design',
    description: 'I am skilled, knowledgeable and qualified software engineer with extensive background in computer programming,project management Web Development and database development using PHP Myadmin, Wordpress, PHP, HTML, CSS. I also have work experience in Web Design, Graphic Design and Sql databases. I am responsible for full life-cycle development of next-generation software, from initial requirement gathering to design, coding, testing, documentation and implementation. I am highly capable of testing a variety of internet applications and finding solutions to clients needs and problems.',
  },
  {
    icon: <RxDesktop />,
    title: 'No-code Developer',
    description: ' I am a No-Code Expert with several years of technical and knowledgeable experience. I am well-skilled in my profession and I have mastered the likes of Adalo and Bubble.io for Mobile App and Web App development.The opportunity to express my creativity in building a modern and professional Mobile App and Web App is exactly what I am looking for. I have worked on some interesting, challenging, and great projects over the years',
  },
  {
    icon: <RxEnvelopeClosed />,
    title: 'Email Marketing Template',
    description: 'Responsive HTML email template design & coding Custom email newsletter templates (design & coding). PSD, PDF, JPG to emailtemplate, Design modern, elegant, professional email newsletter for branding your product & services. Design layered PSD email template Custom email newsletter templates for email marketing tools (MailChimp, Campaign Monitor, Active Campaign etc.)'
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1,spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] mt-[50px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(965,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169,0.15)] transition-all duration-300'>

              <div className='text-4xl text-accent mb-4'>{item.icon}</div>

              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;


