import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Crown,
  ShieldCheck,
  Truck,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import almonds from "@/assets/almonds.jpg";
import cashews from "@/assets/cashews.jpg";
import pistachios from "@/assets/pistachios.jpg";
import seeds from "@/assets/seeds.jpg";
import dates from "@/assets/dates.jpg";
import walnuts from "@/assets/walnuts.jpg";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr Delights — Premium Dry Fruits & Seeds" },
      {
        name: "description",
        content:
          "Royal-grade almonds, cashews, pistachios, dates and seeds. Hand-picked, hygienically packed and delivered fresh to your door.",
      },
      { property: "og:title", content: "Mr Delights — Premium Dry Fruits & Seeds" },
      {
        property: "og:description",
        content:
          "Royal-grade almonds, cashews, pistachios, dates and seeds. Hand-picked and delivered fresh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Kashmiri Mamra Almonds", note: "Slow-grown, oil-rich", price: "₹1,240", img: almonds },
  { name: "Jumbo W180 Cashews", note: "Whole, ivory-white", price: "₹1,480", img: cashews },
  { name: "Iranian Pistachios", note: "Lightly salted", price: "₹1,690", img: pistachios },
  { name: "Royal Seed Medley", note: "Pumpkin · Sunflower · Chia", price: "₹720", img: seeds },
  { name: "Medjool Dates", note: "Soft, caramel-sweet", price: "₹980", img: dates },
  { name: "Chilean Walnut Halves", note: "Cold-cracked kernels", price: "₹1,150", img: walnuts },
];

const features = [
  { icon: Leaf, title: "100% Natural", copy: "No additives, no polish, no preservatives — ever." },
  { icon: Crown, title: "Premium Grade", copy: "Only the top harvest lot from each origin makes the box." },
  { icon: ShieldCheck, title: "Hygienically Packed", copy: "Nitrogen-flushed, sealed within hours of grading." },
  { icon: Truck, title: "Fast Delivery", copy: "Dispatched in 24 hours, chilled-safe across India." },
];

const testimonials = [
  {
    quote:
      "The mamra almonds arrived tasting like they were picked that morning. The packaging alone felt like a gift I didn't want to open.",
    name: "Ananya Rao",
    place: "Bengaluru",
  },
  {
    quote:
      "I've bought dry fruits for our family store for twenty years. Mr Delights is the first brand where every single box has been consistent.",
    name: "Vikram Shah",
    place: "Ahmedabad",
  },
  {
    quote:
      "Sent the seed medley and dates as a Diwali hamper to fourteen clients. Every one of them called to ask where it came from.",
    name: "Priya Menon",
    place: "Mumbai",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs uppercase tracking-[0.42em] text-gold">{children}</p>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-6 sm:flex sm:justify-between">
          <span className="min-w-0 truncate font-display text-xl tracking-[0.3em] text-gold">
            MR DELIGHTS
          </span>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground sm:flex">
            <a href="#collection" className="transition-colors hover:text-gold">Collection</a>
            <a href="#story" className="transition-colors hover:text-gold">Our Story</a>
            <a href="#reviews" className="transition-colors hover:text-gold">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-gold">Contact</a>
          </div>
          <Menu className="h-5 w-5 shrink-0 text-gold sm:hidden" aria-hidden />
        </nav>
      </header>

      {/* Hero */}
      <section className="veil relative overflow-hidden px-5 pb-24 pt-32 text-center sm:pt-40">
        <div className="mx-auto max-w-3xl animate-rise">
          <img
            src={logo.url}
            alt="Mr Delights crest — crown and laurel wreath"
            width={320}
            height={320}
            className="mx-auto h-44 w-44 rounded-full object-cover sm:h-60 sm:w-60"
          />
          <p className="mt-8 font-script text-3xl text-gold-soft sm:text-4xl">
            Premium Dry Fruits &amp; Seeds
          </p>
          <div className="rule-gold mx-auto mt-8 w-40" />
          <h1 className="mt-8 font-display text-4xl leading-[1.1] sm:text-6xl">
            Purity worthy of a
            <span className="text-gold-gradient"> royal table</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Sourced from single-origin orchards, hand-graded kernel by kernel, and sealed
            at peak freshness. Nothing added — because nothing needs to be.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#collection"
              className="btn-gold inline-flex items-center rounded-sm px-9 py-3.5 text-xs font-medium uppercase tracking-[0.28em]"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="collection" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>The Collection</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Featured Selections</h2>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="card-lux group rounded-sm p-4">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-display text-xl text-gold">{p.price}</span>
                    <button
                      type="button"
                      className="rounded-sm border border-border px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section id="story" className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={story}
              alt="Hand-packing premium dry fruits into a gold gift box"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-sm border border-gold/40" />
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Three generations of
              <span className="font-script text-gold"> selecting well</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mr Delights began at a single grading table, where a family learned that the
              difference between good and exceptional is patience. We still buy direct from
              the orchards of Kashmir, Kerman and the Jordan Valley — and we still refuse
              lots that don't meet the mark, however good the price.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every kernel is sun-cured, hand-sorted and sealed the same week it is graded.
              What reaches you is simply the best of the harvest, untouched.
            </p>
            <div className="rule-gold mt-8 w-32" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionLabel>Why Mr Delights</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">The Standard We Keep</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="card-lux rounded-sm p-8 text-center">
                <f.icon className="mx-auto h-8 w-8 text-gold" strokeWidth={1.2} aria-hidden />
                <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="veil px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Kind Words</SectionLabel>
          <div className="mt-8 flex justify-center gap-1.5" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
            ))}
          </div>
          <blockquote className="mt-8 min-h-[9rem] font-display text-2xl leading-relaxed sm:text-3xl">
            “{testimonials[slide].quote}”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-gold">
            {testimonials[slide].name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{testimonials[slide].place}</p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setSlide((s) => (s - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-border p-2.5 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    i === slide ? "bg-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setSlide((s) => (s + 1) % testimonials.length)}
              className="rounded-full border border-border p-2.5 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1.4fr]">
            <div>
              <p className="font-display text-2xl tracking-[0.3em] text-gold">MR DELIGHTS</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Premium dry fruits &amp; seeds, hand-graded and sealed at peak freshness.
              </p>
              <div className="mt-6 flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social profile"
                    className="rounded-full border border-border p-2.5 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
              <p className="mt-4">12 Orchard Row, Bandra West</p>
              <p>Mumbai 400050, India</p>
              <p className="mt-3">+91 98200 41200</p>
              <p>care@mrdelights.com</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Newsletter</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Harvest notes and private drops, once a month.
              </p>
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                  setEmail("");
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-sm border border-input bg-secondary px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                />
                <button
                  type="submit"
                  className="btn-gold shrink-0 rounded-sm px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em]"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="mt-3 text-sm text-gold">Thank you — you're on the list.</p>
              )}
            </div>
          </div>

          <div className="rule-gold mt-14" />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mr Delights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
