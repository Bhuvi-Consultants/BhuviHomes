import { Leaf, Sun, Grid3x3, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function CityPage() {
  return (
    <div className="bg-surface min-h-screen text-on-surface">
      <main>
        <section className="relative min-h-[90vh] flex items-center px-8 md:px-24 overflow-hidden pt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-[1440px] mx-auto items-center">
            <div className="md:col-span-7 z-10">
              <span className="font-headline font-bold text-tertiary tracking-widest uppercase text-sm mb-4 block">
                Stone & Stem Collective
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8">
                The Soul of <br />
                <span className="text-primary italic">Jharkhand</span> Living.
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                Crafting residential interiors that breathe through local
                basalt, reclaimed Sal wood, and the tectonic precision of modern
                architecture.
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  className="bg-primary text-on-primary px-10 py-4 rounded-md font-headline font-bold uppercase tracking-tighter hover:opacity-90 transition-all"
                  href="#consult"
                >
                  Start Your Project
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface font-headline font-bold uppercase tracking-tighter group"
                  href="#gallery"
                >
                  Explore Gallery
                  <span className="w-12 h-[2px] bg-primary group-hover:w-16 transition-all"></span>
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden shadow-2xl relative z-0">
                <Image
                  alt="Luxury interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoQgF3X8Gia2san4WUd9aflibQFaWz4vKRvijcWxK_EnCV-78iKBjTRAoBPO0vlu3mIwvQvrJjOuYT3USz58JPeToBlm_CSJCeenAFpHm9iWG1x3BcNOWewuyxkzzL5RaF2rQW781ajM1LHBvPngiwJ3zxvInmObhd27eJ_Z0qiDonqvJWH0_ruqnyQi0blM1-wNDWOf7W3520I-3FLn2zVeonZymOPP-6_WvGFbEVho2PBR_1L2iUn2XHkVoQpT5iAbG0MnC78Za1"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-tertiary-container p-8 hidden md:block">
                <p className="text-on-tertiary-container font-headline font-black text-4xl leading-none">
                  01/05
                </p>
                <p className="text-on-tertiary-container font-body mt-4 opacity-80">
                  Current Chapter: The Forest Pavilion, Ranchi
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10"
            style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
          ></div>
        </section>

        <section className="py-32 px-8 md:px-24 bg-surface-container">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl font-black text-on-surface tracking-tighter mb-6">
                  Anchored Spaces: <br />
                  The Living Room
                </h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Our approach to the communal hearth balances the raw weight of
                  Jharkhand granite with the lightness of open-plan drafting. We
                  focus on "The Anchor" — a central material element that
                  defines the room's gravity.
                </p>
              </div>
              <span className="text-outline-variant font-headline font-black text-9xl hidden md:block opacity-20">
                LIVING
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Material Integration",
                  desc: "Sourcing local Chota Nagpur basalt for monolithic wall cladding and bespoke furniture bases.",
                },
                {
                  icon: Sun,
                  title: "Atmospheric Lighting",
                  desc: "Clerestory windows and recessed linear LEDs designed to mimic the dappled light of Jharkhand's Sal forests.",
                },
                {
                  icon: Grid3x3,
                  title: "Drafting Precision",
                  desc: "Floor plans dictated by natural circulation paths, ensuring a seamless flow between the indoors and the landscape.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-surface-container-lowest p-8 rounded-lg ${idx === 1 ? "md:mt-12" : ""}`}
                >
                  <item.icon className="text-primary w-10 h-10 mb-6" />
                  <h3 className="font-headline text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-8 md:px-24">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-surface-container-high rounded-lg overflow-hidden">
                <img
                  alt="Modern Kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwODwY6PgUrdCEAHp4MsMzzeG9duL3WI-rjwh_Zw4FlNHNh42WFenxI7_Z2x4Kgeb0jmPGMVPOhLVxQFqoIRNks8q6MhkJ_gKo6FbhdHPxX-udVfAHrqZMtjKkcXYN5iJotwc6tkVSHHCHuDYuMbhgfrgL2O7C_lX5lPecpqlj2pnsdrrzeghBIBmnDYl5wPSQRyJ4NOrcIrNv81bvJBFXLM3WZvkBT2tz-AvW9gnN104pf-MuVhomlCS2rFH9BNMFTQqg0zC3f6Vv"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container p-6 rounded-full flex items-center justify-center text-center">
                <p className="text-on-primary-container font-headline font-bold leading-tight">
                  AGYEYA <br />
                  SERIES
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-5xl font-black text-on-surface tracking-tighter mb-8">
                Culinary Tectonics: <br />
                Kitchens (Agyeya)
              </h2>
              <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
                Named after the primordial fire, our Agyeya series reimagines
                the kitchen as a functional sculpture. We utilize heavy
                Jharkhand granite for seamless island blocks, paired with
                precision-engineered storage that disappears into the
                architecture.
              </p>
              <ul className="space-y-6">
                {[
                  {
                    title: "Monolithic Granite Countertops",
                    desc: "Locally quarried stone, honed for a tactile, matte finish.",
                  },
                  {
                    title: "Indigenous Timber Accents",
                    desc: "Reclaimed wood detailing that adds warmth to industrial surfaces.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle className="text-tertiary w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-headline font-bold">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 md:px-24 bg-on-surface text-surface">
          <div className="max-w-[1440px] mx-auto text-center mb-24">
            <h2 className="font-headline text-5xl font-black tracking-tighter mb-6">
              Sanctuaries of Silence
            </h2>
            <p className="font-body text-lg opacity-70">
              Soft textures, organic geometry, and deep tonal palettes create a
              restorative escape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] max-w-[1440px] mx-auto">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                alt="Bedroom"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxcsaHWGM7SuWRnyRqACO_WVw3VeYAbsKfDNf0NPXPiAI6_vFL0ff6oKfWIgSf3VLMQ_dWw7DXyubzQUYb6LQHbKbc1Mslg5nNghEtrdrDQthTb23vOjs5398uo5YwRCt1VMNG5JETCF-ITKTREVUXolTW9FVKANtZnBD8n9Bld99LWR9aLLequHYzun0COt0xST5C0r7B7jvGdIaFuGI5hARE7NCLtD4lggGsRMCz01-ZePvipchZbMCXJ_uFRqrufXrAumqNkyX"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                <h4 className="font-headline text-3xl font-bold">
                  The Earthen Suite
                </h4>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              {[
                {
                  title: "Landscape Framing",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByTjZMmf3TSd9wmcgh7l8LINTtyaxi7qTe9oeK28U1SMXPh7Ujd_z_BwQnQP5Hhspabr6-O4JK9ucApd0C6BydC6dSL6rQfFKBayQv8lreTTL1HAhWXWndToA-pKIJsGJehbcI7TC5fLGmt_2tsOHB8DE-57txrfuuux6NV6sb_RS1yxmy7IBTpwDsZFZoIBHDQsYrzW_O7M0AVtAZnJ6a7PG2Hpsfi5B-Z5BbC0jkvmF-A7lV-70t0Uxw4mJosNgfbS0fE9G6lWvw",
                },
                {
                  title: "Circadian Integration",
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHVs9P1xbchqlIWUpgH3Wjprwm0FrTFwAT26-n1v9G0FGaS7JKeeCYEl5_5yY1Eu7UkqzUtT6WMWRoSBqCY79oGT5pAtliLLARuUHVMQxV0FeqeQgeAXFE80bwUn17AiQweKPZruKuTGB7RkFYIY3984zduUdVxBQD-waCqD0e18Gr_TbWpYrJRlj_0pETtWDIkTlHemc-OB3aPHeQTw57CivXIZEurwnDwDrDo70A3gAimAli5dL4j8tEA-anE0JSkz345gKoc6Xi",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    src={item.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                    <h4 className="font-headline text-xl font-bold">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-32 px-8 md:px-24 overflow-hidden bg-surface-container-low"
          id="gallery"
        >
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-black text-on-surface tracking-tighter mb-16">
              Stone & Timber Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
              <div className="md:col-span-2 md:row-span-2 bg-surface-container rounded-lg overflow-hidden relative">
                <img
                  alt="Granite"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHib2yPLMY0kQl20G8Ux_Qw6oBIv0tz3hgKa79g8x7hi6F_vLzu64nhWhYb9kyjBw0uWC5vZ9_bBWDLv6QgWX7pXa8rXQXkQ81sYu1pTqdlYZ98b8wlJYfkpBfBSPvJA5t3QtJNY2allZxo7aEIsa6aPDux-Nm-fLB5ZpPDoFQxEehQLUvfFEh1_aivp3aeqdyeuZB4iBVy1k8tnKPiHmvsQS8iycY9Z-P69bfz6FO7V0kdzk2UkeqyWminPF7HGEpunSM4NGbK0jz"
                />
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md p-4 rounded-lg">
                  <p className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface">
                    Spec: Ranchi Black Granite
                  </p>
                </div>
              </div>
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABmJkHJC3Y38z9ER_F-fFYxr98tp-aM6pdiX4PBN7K4QIK5cQvFR-R8gxOEts8MFRlDk7iMAX0M5CFWOUYbNrriUk-tIMqKWy7hjvtrO4C6d_3BPSTafaObJWX5254ez89Aahn9oQdvcA09qQiW76lb-1jPH_jjjVbd-PIofy8oR2rebMX-V9z8dgS3SMWRA3pTrvF5AySG9dfnmhouV4if6KxDk1wQCE4GYcVAke8NlFx3v6iizGdoDPwjNpnUVvj_tDdhi7gcXue",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAVaEirQi8IfvTiqMsRgBm8coE46TVZxpLSf3n8zH7xcGucsIryHZcPHytrkV_nR0zEzTmOHqv5eu2KrY_K1ziIbAoNNcS0-xjW4MQakY6SeRLz7HjA6FdtJTmsWM1ZJ_n3EdNmidL8TtrEd-vK-ZibC5akIV-8XSXJiCZc8GU62Hd7U21933V5L4hmwq44J8ul2c-cPg140CX6_4LWFv9Qki1z6mkrEKJPfeKkdTa9FcK6UXDSqeh44r1HxP0EWxJMjWIfawsCDQ4S",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDN_ZIVeaWpoT8CIiowbvdLY2HMNWDWVgN-kTSCYblzC3M3WGayvyAUuOkm8-BnTJofRYZUX0G2ZzVhuhwJP8aGNxud8LTI3pl8FPumxt5WVwjUaT1YHWtgHq_E5_u2uiNH_-z494k0yjNh-q8gmDW_nEsOvoce_qqFgXc9zIaqeOYseyQk_FzUcd27GhY9WNPf7JxVzu8J4YK493lcmymyJHqcQwiu0c7GrWqznjZoK7iY-7ouaI7xUAzf3_08CTr2GBlsJqESvC1N",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container rounded-lg overflow-hidden relative"
                >
                  <img
                    alt="Gallery"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    src={src}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-32 px-8 md:px-24 bg-surface-container-low"
          id="consult"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="font-headline text-5xl font-black text-on-surface tracking-tighter mb-6">
                Begin the Narrative
              </h2>
              <p className="font-body text-lg text-on-surface-variant mb-12">
                Schedule an architectural consultation to discuss your vision
                for a tailored residential interior in Jharkhand. Our team
                specializes in translating site-specific identity into luxury
                living spaces.
              </p>
            </div>
            <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-lg shadow-xl">
              <form
                action="#"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {["Full Name", "Email Address"].map((label) => (
                  <div key={label} className="flex flex-col gap-2">
                    <label className="font-headline font-bold text-xs uppercase tracking-widest text-tertiary">
                      {label}
                    </label>
                    <input
                      className="bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 w-full"
                      placeholder={
                        label === "Full Name"
                          ? "Your name"
                          : "email@example.com"
                      }
                      type={label === "Email Address" ? "email" : "text"}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-headline font-bold text-xs uppercase tracking-widest text-tertiary">
                    Project Location
                  </label>
                  <select className="bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 w-full">
                    {["Ranchi", "Jamshedpur", "Bokaro", "Dhanbad"].map(
                      (loc) => (
                        <option key={loc}>{loc}</option>
                      ),
                    )}
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-headline font-bold text-xs uppercase tracking-widest text-tertiary">
                    Design Intent
                  </label>
                  <textarea
                    className="bg-surface-container-low border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 transition-all py-3 px-0 w-full"
                    placeholder="Briefly describe your space..."
                    rows={4}
                  />
                </div>
                <button className="md:col-span-2 w-full bg-primary text-on-primary py-5 rounded-md font-headline font-bold uppercase tracking-[0.2em] hover:bg-primary-container transition-all shadow-lg">
                  Request Architectural Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
