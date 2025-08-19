import React from 'react';

export default function EventDetailHero({
  image = '/images/events/event-hero.jpg',
  countdown = { days: 12, hours: 54, minutes: 36, seconds: 48 },
}: {
  image?: string;
  countdown?: { days: number; hours: number; minutes: number; seconds: number };
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-2xl h-[100vh]">
          <img src={image} alt="Event banner" width={1280} height={1280} className="w-full h-full object-cover aspect-[2/3]" />

          {/* Countdown block */}
          <div className="absolute bottom-6 right-6">
            <div className="bg-red-600 text-white rounded-md px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
              <div className="grid grid-flow-col auto-cols-max gap-4 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold">{countdown.days.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wide">Days</div>
                </div>
                <span className="self-center text-white/70">:</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold">{countdown.hours.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wide">Hours</div>
                </div>
                <span className="self-center text-white/70">:</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold">{countdown.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wide">Minutes</div>
                </div>
                <span className="self-center text-white/70">:</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold">{countdown.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wide">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
