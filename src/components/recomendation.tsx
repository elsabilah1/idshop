import { recomendationList } from "@/data";
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
