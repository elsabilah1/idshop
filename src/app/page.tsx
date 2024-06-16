import Banner from "@/components/banner";
import Category from "@/components/category";
import TopUpAndBill from "@/components/top-up-and-bill";

export default function Home() {
  return (
    <main className="mx-auto mb-10 mt-4 max-w-[1048px] space-y-10 md:mb-[100px] md:mt-10">
      <Banner />
      <Category />
      <TopUpAndBill />
    </main>
  );
}
