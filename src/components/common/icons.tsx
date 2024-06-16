import { cn } from "@/lib/utils";
import CaretDownIcon from "../../../public/icons/caret-down.svg";
import CaretUpIcon from "../../../public/icons/caret-up.svg";
import CaretLeftIcon from "../../../public/icons/caret-left.svg";
import CaretRightIcon from "../../../public/icons/caret-right.svg";
import ArrowLeftIcon from "../../../public/icons/arrow-left.svg";
import ArrowUpIcon from "../../../public/icons/arrow-up.svg";
import CartIcon from "../../../public/icons/cart.svg";
import DotsMenuIcon from "../../../public/icons/dots-menu.svg";
import LanguageIcon from "../../../public/icons/language.svg";
import ListIcon from "../../../public/icons/list.svg";
import PhoneIcon from "../../../public/icons/phone.svg";
import UserIcon from "../../../public/icons/user.svg";

interface IconProps {
  className?: string;
}

const baseClass = "size-5 fill-neutral-0";

export function CaretDown({ className }: IconProps) {
  return (
    <>
      <CaretDownIcon className={cn(baseClass, className)} />
    </>
  );
}

export function CaretUp({ className }: IconProps) {
  return (
    <>
      <CaretUpIcon className={cn(baseClass, className)} />
    </>
  );
}

export function CaretLeft({ className }: IconProps) {
  return (
    <>
      <CaretLeftIcon className={cn(baseClass, className)} />
    </>
  );
}

export function CaretRight({ className }: IconProps) {
  return (
    <>
      <CaretRightIcon className={cn(baseClass, className)} />
    </>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <>
      <ArrowLeftIcon className={cn(baseClass, className)} />
    </>
  );
}

export function ArrowUp({ className }: IconProps) {
  return (
    <>
      <ArrowUpIcon className={cn(baseClass, className)} />
    </>
  );
}

export function Cart({ className }: IconProps) {
  return (
    <>
      <CartIcon className={cn(baseClass, className)} />
    </>
  );
}

export function DotsMenu({ className }: IconProps) {
  return (
    <>
      <DotsMenuIcon className={cn(baseClass, className)} />
    </>
  );
}

export function Language({ className }: IconProps) {
  return (
    <>
      <LanguageIcon className={cn(baseClass, className)} />
    </>
  );
}

export function List({ className }: IconProps) {
  return (
    <>
      <ListIcon className={cn(baseClass, className)} />
    </>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <>
      <PhoneIcon className={cn(baseClass, className)} />
    </>
  );
}

export function User({ className }: IconProps) {
  return (
    <>
      <UserIcon className={cn(baseClass, className)} />
    </>
  );
}
