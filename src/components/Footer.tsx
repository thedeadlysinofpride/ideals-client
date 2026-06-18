import { Youtube, Instagram, Facebook, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/format";
import logoBlue from "@/assets/Logos/logo-blue.png";

const socials = [
  {
    label: "YouTube",
    href: "https://youtube.com/@idealsgh?si=X1qFf4IxlGZylUrp",
    Icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ideals239?igsh=Y3ZncGhjY2oyYnN2&utm_source=qr",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1H6ey99RUZ/?mibextid=wwXIfr",
    Icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ideals_gh?_r=1&_t=ZS-96qOtPrCyu5",
    Icon: MessageCircle,
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/t/Mx3NyDu0",
    Icon: MessageCircle,
  },
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl("Hello iDeals 👋"),
    Icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoBlue} alt="iDeals" className="h-8 w-auto mb-4" />
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Premium iPhones, MacBooks and accessories. <br /> Trusted across
            Ghana based in Accra, Circle.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3"></h4>
          <ul className="space-y-2 text-sm text-muted-foreground"></ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Follow us</h4>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} iDeals · Accra, Ghana.</p>
          <p>Apple deals in 🇬🇭.</p>
        </div>
      </div>
    </footer>
  );
}
