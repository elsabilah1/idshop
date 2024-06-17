import Text from "./common/text";
import GooglePlay from "../../public/images/google-play.png";
import AppStore from "../../public/images/app-store.png";
import Image from "next/image";
import Link from "next/link";
import Badge from "./common/badge";
import FooterMenu from "./footer-menu";
import {
  customerServiceLinks,
  deliveryServiceList,
  exploreIdShopLinks,
  paymentMethodList,
  securityList,
  socialMediaList,
} from "@/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1048px] px-4 md:px-0">
      <div className="flex flex-wrap gap-10 py-6">
        <div className="flex w-full flex-col gap-8 md:w-fit md:flex-row">
          <div>
            <Text as="h3" variant="label/large" className="mb-4">
              Layanan Pelanggan
            </Text>
            <FooterMenu menuLinks={customerServiceLinks} />
          </div>
          <div>
            <Text as="h3" variant="label/large" className="mb-4">
              Jelajahi idshop
            </Text>
            <FooterMenu menuLinks={exploreIdShopLinks} />
          </div>
        </div>
        <div>
          <Text as="h3" variant="label/large" className="mb-4">
            Unduh Aplikasi
          </Text>
          {[GooglePlay, AppStore].map((item, i) => (
            <Link key={i} href="/">
              <Image src={item} alt="download-app" />
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4 py-6">
        <div className="space-y-2">
          <Text as="h3" variant="label/large">
            Metode Pembayaran
          </Text>
          <div className="flex flex-wrap gap-2">
            {paymentMethodList.map(item => (
              <Badge key={item} item={`pm-${item}`} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Text as="h3" variant="label/large">
            Jasa Pengiriman
          </Text>
          <div className="flex flex-wrap gap-2">
            {deliveryServiceList.map(item => (
              <Badge key={item} item={`ds-${item}`} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Text as="h3" variant="label/large">
            Keamanan dan Privasi
          </Text>
          <div className="flex flex-wrap gap-2">
            {securityList.map(item => (
              <Badge key={item} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-neutral-2 py-4">
        <Text variant="label/medium">
          &copy; idshop 2024. Hak Cipta Dilindungi
        </Text>
        <div className="space-y-2">
          <Text as="h3" variant="label/large">
            Ikuti Kami
          </Text>
          <div className="flex gap-2">
            {socialMediaList.map((item, i) => (
              <Link href="/" key={i}>
                <Image src={item} alt="social" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
