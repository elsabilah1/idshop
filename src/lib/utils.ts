import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRupiah = (angka: string | number = 0, prefix?: string) => {
  if (angka === null || angka === undefined) return "Rp 0";
  let angka_string = typeof angka == "number" ? angka.toString() : angka;

  let number_string = angka_string?.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substring(0, sisa),
    ribuan = split[0].substring(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix ? rupiah : rupiah ? "Rp" + rupiah : "";
};

export const compactIdFormatter = (val: number) => {
  if (val > 10000) return "10RB+";

  const compact = new Intl.NumberFormat("id-ID", {
    notation: "compact",
  }).format(val);
  const compatWithDot = compact.replaceAll(",", ".");

  return compatWithDot.replace(/\s/g, "").toUpperCase();
};
