import Link from "next/link";
import Text from "./common/text";

interface FooterMenuProps {
  menuLinks: string[];
}

export default function FooterMenu({ menuLinks }: FooterMenuProps) {
  return (
    <div className="grid gap-1 md:w-[200px]">
      {menuLinks.map(item => (
        <Link
          //  href={`/${item}`}
          key={item}
          href={"/"}
          className="border-b border-neutral-2 py-1 capitalize transition-colors hover:text-primary-0"
        >
          <Text variant="body/small">{item.replaceAll("-", " ")}</Text>
        </Link>
      ))}
    </div>
  );
}
