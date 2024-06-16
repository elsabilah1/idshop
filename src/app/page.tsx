import Banner from "@/components/banner";
import Category from "@/components/category";
import OfferCard, { OfferCardProps } from "@/components/offer-card";
import TopUpAndBill from "@/components/top-up-and-bill";

export default function Home() {
  return (
    <main className="mx-auto mb-10 mt-4 max-w-[1048px] space-y-10 md:mb-[100px] md:mt-10">
      <Banner />
      <Category />
      <TopUpAndBill />
      <section className="space-y-4">
        {offerCardList.map((item, i) => (
          <OfferCard key={i} variant={item.variant} data={item.data} />
        ))}
      </section>
    </main>
  );
}

const offerCardList: OfferCardProps[] = [
  {
    variant: "secondary",
    data: {
      img: "offer-1",
      title: "PAY DAY SALE!!",
      desc: (
        <>
          Nikmati promo spektakuler
          <span className="text-primary-0"> idshop</span> setiap tanggal 25!
        </>
      ),
      buttonTitle: "Ikuti Event",
    },
  },
  {
    variant: "primary",
    data: {
      img: "offer-2",
      title: "GRATIS ONGKIR 50%",
      desc: "Klaim voucher gratis ongkos kirim Kamu.",
      buttonTitle: "Klaim Voucher",
    },
  },
];
