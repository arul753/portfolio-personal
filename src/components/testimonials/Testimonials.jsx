import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/logo-sd.png";
import AVTR2 from "../../assets/asvie.png";
import AVTR3 from "../../assets/smk.png";
import AVTR4 from "../../assets/unass1.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "SDN MANGGARAI SELATAN",
    review:
      "Pada tahun 2004 sampai 2009 saya memasuki pendiikan pertama, yaitu dimana saya bersekolah di sekolah dasar negeri, ketika saya masuk ke sekolah dasar dari sanalah saya bukan hanya belajar tentang semua pelajaran yang terkait tetapi disana adalah masa-masa saya baru mulai kenal yang namanya warnet, dan video game.",
  },
  {
    avatar: AVTR2,
    name: "MTS AS-SYAFI'IYAH",
    review:
      "Pada tahun 2009 sampai 2012 saya memasuki pendiikan kedua, yaitu dimana saya bersekolah di sekolah menengah pertama swasta, ketika saya masuk ke sekolah menengah pertama dari sanalah saya bukan hanya belajar tentang semua pelajaran yang terkait tapi disana juga masa-masa saya baru kenal dan belajar cara mengoperasikan komputer, cara mengetik dengan bak, serta cara mencetak menggunakan printer..",
  },
  {
    avatar: AVTR3,
    name: "SMK KARYA TELADAN",
    review:
      "Pada tahun 2012 sampai 2015 saya memasuki pendiikan ketiga, yaitu dimana saya bersekolah di sekolah menengah kejuruan, ketika saya masuk ke sekolah menengah kejuruan dari sanalah saya bukan hanya belajar tentang semua pelajaran yang terkait tapi disana juga masa-masa saya mulai paham bagaimana caranya mengoperasikan komputer, mengetik 8 jari dengan cepat, membuat surat, dan sudah tertarik dalam dunia komputer.",
  },
  {
    avatar: AVTR4,
    name: "UNIVERSITAS NASIONAL",
    review:
      "Pada tahun 2018 sampai 2022, saya memasuki pendidikan keempat, yaitu dimana saya berkuliah dengan jurusan Teknik Informatika, alesan saya kuliah karena saya senang mengulik komputer dari software atuapun hardware, banyak ilmu yang saya ambil dari internal ataupun externel, saya lulus di tahun 2022 dengan mendapatkan ipk 3.33 .",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>MY PERSONAL DATA EDUCATION</h5>
      <h2>Education Formal</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]} 
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
