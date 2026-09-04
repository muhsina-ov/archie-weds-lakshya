import jainSymbol from "@/assets/jain-symbol.jpg";
import mahavirayaNamah from "@/assets/mahaviraya-namah.jpg";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function Blessing() {
  const { blessing } = invitation;

  return (
    <section className="px-5 py-20 bg-parchment-deep/40">
      <Reveal className="mx-auto max-w-md text-center">
        <div className="mx-auto w-24 gold-rule" />

        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-parchment p-3 border border-gold/40 shadow-sm">
            <img src={jainSymbol} alt="Jain Symbol" className="h-16 w-16 object-contain mix-blend-multiply" />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <img src={mahavirayaNamah} alt="Shree Mahaviraya Namah" className="h-8 w-auto mix-blend-multiply opacity-90" />
        </div>

        <p className="mt-6 font-display text-3xl leading-relaxed text-pine font-semibold">
          {blessing.motto}
        </p>

        <p className="mt-2 text-sm text-ink/80 font-medium">
          “{blessing.line}”
        </p>

        <p className="mt-4 font-display text-base leading-relaxed italic text-ink/75">
          {blessing.translation}
        </p>

        <p className="mt-6 text-[0.65rem] tracking-[0.3em] text-gold uppercase font-semibold">
          {blessing.source}
        </p>

        <div className="mx-auto mt-8 w-24 gold-rule" />
      </Reveal>
    </section>
  );
}
