import { Phone } from "lucide-react";
const footerFloral = "https://media.invitestory.in/sage-parchment/src/assets/footer-floral.jpg";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  const { couple, footer, familyElders } = invitation;

  return (
    <footer className="relative isolate overflow-hidden pt-24 pb-12 text-center">
      <img
        src={footerFloral}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={912}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-parchment/70" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-parchment to-transparent"
      />

      <Reveal className="px-6">
        <p className="font-display text-3xl tracking-[0.16em] text-pine uppercase font-light">
          {couple.groomShort} <span className="text-gold font-normal">&amp;</span> {couple.brideShort}
        </p>
        <div className="mx-auto mt-5 w-24 gold-rule" />

        <div className="mt-6 space-y-2 text-sm text-ink">
          <p className="font-semibold text-pine text-base">{footer.families}</p>
          <div className="mt-3 rounded-xl border border-gold/40 bg-parchment/90 p-4 max-w-sm mx-auto shadow-sm">
            <p className="text-[0.65rem] tracking-[0.25em] text-gold uppercase font-bold">{familyElders.title}</p>
            <p className="text-xs font-semibold text-pine mt-1.5">{familyElders.names}</p>
            <p className="text-xs font-semibold text-pine mt-1">{familyElders.parents}</p>
            {"others" in familyElders && (familyElders as Record<string, string>).others && (
              <p className="text-xs font-semibold text-pine mt-1">{(familyElders as Record<string, string>).others}</p>
            )}
          </div>
        </div>

        {footer.contacts.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {footer.contacts.map((c: { name: string; phone: string }) => (
              <a
                key={c.phone}
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-parchment/80 px-5 py-2.5 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/15 active:scale-95"
              >
                <Phone className="size-3.5 text-gold" aria-hidden />
                {c.name}
              </a>
            ))}
          </div>
        )}

        {/* High visibility Hashtag Badge */}
        <div className="mt-8">
          <span className="inline-block rounded-full border border-gold/60 bg-pine px-6 py-2.5 text-xs font-bold tracking-[0.3em] text-parchment uppercase shadow-md">
            {couple.hashtag}
          </span>
        </div>
      </Reveal>

      <a
        href="https://www.instagram.com/invitestory.in/"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block text-[10px] uppercase tracking-[0.35em] text-ink/70 font-semibold transition-opacity hover:opacity-100"
      >
        Crafted with ❤️ by @invitestory.in
      </a>
    </footer>
  );
}
