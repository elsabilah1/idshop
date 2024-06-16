import Image from "next/image";
import { Button } from "./common/button";
import { CaretDown, CaretUp, User } from "./common/icons";

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex justify-end gap-4">
        <CaretDown />
        <CaretUp />
        <User />
        <Button variant="ghost/primary">Masuk</Button>
        <Button>Daftar</Button>
      </div>
      <div className="flex gap-4">
        <Image src="/images/logo.png" width={200} height={200} alt="logo" />
        <Image src="/illustration/baby.svg" width={80} height={80} alt="baby" />
      </div>
    </header>
  );
}
