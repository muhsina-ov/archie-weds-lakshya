import { CalendarPlus, Clock, MapPin, Sparkles, Utensils } from "lucide-react";
import jaali from "@/assets/jaali.jpg";
import { invitation } from "@/config/invitation";
import { directionsUrl, googleCalendarUrl } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function Details() {
  const { schedule, venue } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: `url(${jaali})`, backgroundSize: "260px" }}
      />
      <div aria-hidden className="absolute inset-0 bg-parchment/75" />

      <div className="relative mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">Wedding Itinerary</p>
          <h2 className="mt-2 font-display text-4xl tracking-[0.1em] text-pine uppercase sm:text-5xl">
            Event Details
          </h2>
          <div className="mx-auto mt-4 w-32 gold-rule" />
        </Reveal>

        <div className="mt-12 space-y-12">
          {schedule.map((day, dayIndex) => (
            <Reveal key={day.date} delay={dayIndex * 0.1}>
              <div className="relative rounded-3xl border border-gold/50 bg-parchment/90 p-6 shadow-[0_20px_50px_-30px_var(--color-ink)] paper-grain sm:p-8">
                <div className="pointer-events-none absolute inset-2.5 rounded-[1.25rem] border border-gold/30" />

                <div className="text-center">
                  <span className="inline-block rounded-full bg-gold/15 px-4 py-1 text-[0.65rem] tracking-[0.25em] text-gold uppercase font-semibold">
                    {day.dayName}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-pine sm:text-3xl">
                    {day.date}
                  </h3>
                  <p className="text-xs text-ink/60 uppercase tracking-widest mt-1">{day.title}</p>
                </div>

                <div className="mx-auto mt-6 w-20 gold-rule" />

                <div className="mt-6 divide-y divide-gold/25">
                  {day.events.map((ev, i) => (
                    <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/30">
                          <Clock className="size-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-lg font-semibold text-pine">{ev.title}</span>
                            {ev.dressCode && (
                              <span className="inline-flex items-center gap-1 rounded-md bg-amber-100/80 px-2 py-0.5 text-[0.65rem] font-medium text-amber-900 border border-amber-300/60">
                                <Sparkles className="size-3 text-amber-600" />
                                {ev.dressCode}
                              </span>
                            )}
                          </div>

                          {ev.entryTime && (
                            <p className="mt-1 text-xs font-medium text-amber-800/90 flex items-center gap-1">
                              ✨ {ev.entryTime}
                            </p>
                          )}

                          {ev.note && (
                            <p className="mt-1 text-xs text-ink/75 flex items-center gap-1">
                              {ev.icon === "food" ? (
                                <Utensils className="size-3 text-gold/80 inline shrink-0" />
                              ) : ev.icon === "sparkles" ? (
                                <Sparkles className="size-3 text-gold/80 inline shrink-0" />
                              ) : null}
                              {ev.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <span className="font-display text-sm font-semibold tracking-wider text-gold bg-gold/5 px-2.5 py-1 rounded-full border border-gold/20">
                          {ev.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Action Buttons */}
        <Reveal className="mt-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-pine px-7 py-3.5 text-[0.7rem] tracking-[0.24em] text-parchment uppercase transition-transform duration-200 active:scale-95 shadow-md"
            >
              <CalendarPlus className="size-4 transition-transform group-hover:rotate-6" />
              Add to Calendar
            </a>
            <a
              href={directionsUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold/60 bg-parchment/80 px-7 py-3.5 text-[0.65rem] tracking-[0.2em] text-ink/80 uppercase transition-colors hover:bg-gold/10 active:scale-95"
            >
              <MapPin className="size-4 text-gold" />
              Venue Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
