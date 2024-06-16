import { Button } from "./common/button";
import { Input } from "./common/input";

export default function SearchBar() {
  return (
    <div className="relative max-w-[735px] flex-1">
      <Input placeholder="Cari di idshop" className="h-12 w-full md:h-14" />
      <div className="absolute inset-y-0 right-0 hidden items-center px-3 md:flex">
        <Button size="small">Cari</Button>
      </div>
    </div>
  );
}
