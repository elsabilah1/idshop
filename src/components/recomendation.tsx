import Container from "./common/container";
import ProductCard from "./product-card";

export default function Recomendation() {
  return (
    <Container title="Rekomendasi untuk Kamu" className="bg-transparent">
      <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        {recomendationList.map(item => (
          <ProductCard
            key={item.name}
            item={{ ...item, image: "recomendation/" + item.image }}
          />
        ))}
      </div>
    </Container>
  );
}

const recomendationList = [
  {
    name: "Pinka Lipstick - Red Cheery Bloom",
    price: 120683,
    discount: 0,
    image: "product-1.png",
    sold: 1500,
  },
  {
    name: "Eye Shadow Mulan - Cold Tone",
    price: 80837,
    discount: 20,
    image: "product-2.png",
    sold: 1000,
  },
  {
    name: "Almond Milk - FreshkyMilk",
    price: 54829,
    discount: 50,
    image: "product-3.png",
    sold: 456,
  },
  {
    name: "Kaos Hitam Bulop - Size M",
    price: 83092,
    discount: 20,
    image: "product-4.png",
    sold: 1000,
  },
  {
    name: "Reed Diffuser Aromaterapi",
    price: 50568,
    discount: 10,
    image: "product-5.png",
    sold: 11000,
  },
  {
    name: "Alexa Ring - Titanium Silver Gold",
    price: 93002,
    discount: 50,
    image: "product-6.png",
    sold: 1000,
  },

  {
    name: "kacamata Baca murah",
    price: 45903,
    discount: 25,
    image: "product-7.png",
    sold: 5000,
  },
  {
    name: "Sepatu kerja wanita - Putih",
    price: 110938,
    discount: 0,
    image: "product-8.png",
    sold: 2100,
  },
  {
    name: "Baju wanita - Hijau Army",
    price: 39748,
    discount: 10,
    image: "product-9.png",
    sold: 6200,
  },
  {
    name: "Levis wanita premium",
    price: 320739,
    discount: 50,
    image: "product-10.png",
    sold: 1500,
  },
  {
    name: "Wadah kaca estetik",
    price: 29478,
    discount: 80,
    image: "product-11.png",
    sold: 5000,
  },
  {
    name: "Mechanical Wireless Keyboard - Visky",
    price: 490379,
    discount: 10,
    image: "product-12.png",
    sold: 9400,
  },
];
