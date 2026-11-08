const products = [
  {
    name: "Wireless Headphones",
    category: "AUDIO",
    price: "PKR 12,499",
    oldPrice: "PKR 15,999",
    emoji: "🎧",
    background: "from-stone-200 to-stone-300",
    tag: "BESTSELLER",
  },
  {
    name: "Smart Watch Pro",
    category: "WEARABLES",
    price: "PKR 18,999",
    oldPrice: "PKR 22,999",
    emoji: "⌚",
    background: "from-amber-100 to-stone-200",
    tag: "POPULAR",
  },
  {
    name: "Portable Speaker",
    category: "AUDIO",
    price: "PKR 8,499",
    oldPrice: "",
    emoji: "🔊",
    background: "from-slate-200 to-slate-300",
    tag: "NEW ARRIVAL",
  },
  {
    name: "Wireless Earbuds",
    category: "AUDIO",
    price: "PKR 6,999",
    oldPrice: "",
    emoji: "🎵",
    background: "from-orange-100 to-amber-200",
    tag: "TRENDING",
  },
];

const categories = [
  { name: "Smartphones", image: "/phone.png", count: "Explore mobiles" },
  { name: "Audio", emoji: "🎧", count: "Explore sound" },
  { name: "Wearables", emoji: "⌚", count: "Explore watches" },
  { name: "Accessories", emoji: "⚡", count: "Everyday essentials" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#171714]">
      {/* Announcement bar */}
      <div className="bg-[#171714] px-4 py-2.5 text-center text-[10px] font-medium tracking-[0.2em] text-white sm:text-xs">
        YOUR EVERYDAY UPGRADE STARTS HERE
        <span className="mx-2 text-[#d4af37]">✦</span>
        SHOP CARTLAY
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f3]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
          {/* Logo Image */}
          <a href="#" className="flex items-center group py-1">
            <img 
              src="/logo.png" 
              alt="Cartlay Logo" 
              className="h-16 sm:h-20 w-auto object-contain transition group-hover:scale-105" 
            />
          </a>

          <nav className="hidden items-center gap-9 text-xs font-semibold tracking-[0.12em] text-[#55544f] md:flex">
            <a href="#home" className="transition hover:text-[#d4af37]">HOME</a>
            <a href="#categories" className="transition hover:text-[#d4af37]">CATEGORIES</a>
            <a href="#products" className="transition hover:text-[#d4af37]">SHOP</a>
            <a href="#about" className="transition hover:text-[#d4af37]">ABOUT</a>
          </nav>

          <a
            href="#products"
            className="rounded-xl border border-[#171714] bg-white px-5 py-3 text-[10px] font-bold tracking-[0.15em] shadow-sm transition hover:bg-[#171714] hover:text-white hover:shadow-md"
          >
            EXPLORE SHOP
          </a>
        </div>
      </header>

      {/* Hero section */}
      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#b8972e]">
              THE CARTLAY EDIT
            </p>
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-7xl">
            Everyday,
            <br />
            <span className="font-light italic text-[#b8972e]">elevated.</span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#77756e] sm:text-base">
            Discover technology that makes life better. Thoughtfully selected
            electronics, everyday essentials and products worth bringing home.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#products"
              className="rounded-xl bg-[#171714] px-8 py-4 text-[10px] font-bold tracking-[0.18em] text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#b8972e] hover:shadow-xl"
            >
              SHOP THE COLLECTION <span className="ml-3">→</span>
            </a>
            <a
              href="#categories"
              className="text-xs font-semibold text-[#55544f] underline decoration-[#d4af37] underline-offset-8 transition hover:text-[#b8972e]"
            >
              Discover categories
            </a>
          </div>

          <div className="mt-16 flex gap-10 border-t border-black/10 pt-7">
            <div>
              <p className="text-xl font-semibold tracking-tight">Curated</p>
              <p className="mt-1 text-[9px] tracking-[0.18em] text-[#8b8981]">PRODUCT SELECTION</p>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Everyday</p>
              <p className="mt-1 text-[9px] tracking-[0.18em] text-[#8b8981]">USEFUL INNOVATION</p>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Cartlay</p>
              <p className="mt-1 text-[9px] tracking-[0.18em] text-[#8b8981]">EVERYDAY, SORTED.</p>
            </div>
          </div>
        </div>

        {/* Hero artwork with 3D Depth */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl border border-[#d4af37]/40 sm:-right-5 sm:-top-5" />
          <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#e9e4d9] via-[#d7cdbb] to-[#b6a68c] shadow-2xl">
            <div className="absolute left-8 top-8 text-[9px] font-bold tracking-[0.25em] text-[#62594b]">
              CARTLAY / 001
            </div>
            <div className="absolute bottom-8 right-8 text-[9px] tracking-[0.2em] text-[#62594b]">
              EVERYDAY, SORTED.
            </div>
            <div className="absolute h-64 w-64 rounded-full border border-white/40 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rounded-full border border-white/40 sm:h-64 sm:w-64" />
            <div className="relative flex h-40 w-40 rotate-[-12deg] items-center justify-center rounded-[2.5rem] border border-white/50 bg-gradient-to-br from-[#33332f] to-[#10100f] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition duration-500 hover:scale-105 sm:h-52 sm:w-52">
              <div className="absolute inset-3 rounded-[2rem] border border-white/10" />
              <span className="text-8xl drop-shadow-2xl sm:text-9xl">🎧</span>
            </div>
            <div className="absolute bottom-12 left-8 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-[9px] font-semibold tracking-[0.15em] text-[#514a3e] shadow-md backdrop-blur-md">
              TECHNOLOGY, REIMAGINED
            </div>
          </div>
        </div>
      </section>

      {/* Category section with 3D depth cards */}
      <section id="categories" className="border-y border-black/5 bg-[#f0eee8] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#b8972e]">EXPLORE CARTLAY</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Shop by category</h2>
            </div>
            <span className="hidden text-xs text-[#858279] sm:block">Find your everyday essentials →</span>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#products"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/60 bg-white p-6 shadow-md shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/15 sm:p-8"
              >
                {/* 3D Inner Lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex h-20 items-center">
                  {category.image ? (
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#f8f7f3] p-2 shadow-inner transition-transform duration-300 group-hover:scale-110">
                      <img src={category.image} alt={category.name} className="h-full w-full object-contain drop-shadow-sm" />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#f8f7f3] text-4xl shadow-inner transition-transform duration-300 group-hover:scale-110">
                      {category.emoji}
                    </div>
                  )}
                </div>

                <div className="relative z-10 mt-6">
                  <h3 className="text-base font-semibold text-[#171714]">{category.name}</h3>
                  <p className="mt-1 text-[11px] text-[#858279]">{category.count}</p>
                </div>

                <div className="relative z-10 mt-6 flex justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f8f7f3] text-xs text-[#b8972e] shadow-sm transition duration-300 group-hover:bg-[#d4af37] group-hover:text-white group-hover:shadow-md">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with 3D Depth Cards */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#b8972e]">THE GOOD STUFF</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Featured products
            </h2>
            <p className="mt-3 text-sm text-[#858279]">A little something for every day.</p>
          </div>
          <span className="text-xs font-semibold text-[#b8972e]">THE CARTLAY COLLECTION ↗</span>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {products.map((product) => (
            <article key={product.name} className="group relative rounded-2xl border border-white/60 bg-white p-4 shadow-md shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]/60 hover:shadow-2xl hover:shadow-[#d4af37]/15 sm:p-5">
              <div className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${product.background} shadow-inner`}>
                <span className="absolute left-3 top-3 rounded-md bg-white/80 px-2.5 py-1.5 text-[8px] font-bold tracking-[0.12em] shadow-sm backdrop-blur-sm">
                  {product.tag}
                </span>
                <span className="text-7xl drop-shadow-xl transition duration-500 group-hover:scale-110 sm:text-8xl">
                  {product.emoji}
                </span>
                <span className="absolute bottom-3 right-3 text-[9px] font-semibold tracking-widest text-black/40">
                  CARTLAY
                </span>
              </div>
              <div className="pt-5">
                <p className="text-[9px] font-bold tracking-[0.18em] text-[#b8972e]">{product.category}</p>
                <h3 className="mt-1 text-xs font-semibold sm:text-sm">{product.name}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#171714]">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-[10px] text-[#99958b] line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-[10px] text-[#99958b]">
          Illustrative products and prices for the initial storefront design.
        </p>
      </section>

      {/* Brand statement */}
      <section id="about" className="bg-[#171714] px-5 py-20 text-center text-white sm:py-28">
        <p className="text-[10px] font-bold tracking-[0.3em] text-[#d4af37]">A BETTER WAY TO SHOP</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">
          Good choices.
          <br />
          <span className="font-light italic text-[#d4af37]">Every single day.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/50">
          We're building a destination for products that earn their place in
          your everyday life.
        </p>
        <a
          href="#products"
          className="mt-9 inline-block rounded-xl border border-[#d4af37] px-8 py-4 text-[10px] font-bold tracking-[0.18em] text-[#e3c995] shadow-lg transition duration-300 hover:bg-[#d4af37] hover:text-[#171714] hover:shadow-xl"
        >
          DISCOVER CARTLAY
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f7f3] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-b border-black/10 pb-9 sm:flex-row sm:items-center">
          <div>
            <img 
              src="/logo.png" 
              alt="Cartlay Logo" 
              className="h-16 sm:h-20 w-auto object-contain" 
            />
          </div>
          <div className="flex flex-wrap gap-6 text-[10px] font-semibold tracking-[0.12em] text-[#77756e]">
            <a href="#home" className="hover:text-[#d4af37]">HOME</a>
            <a href="#categories" className="hover:text-[#d4af37]">CATEGORIES</a>
            <a href="#products" className="hover:text-[#d4af37]">SHOP</a>
            <a href="#about" className="hover:text-[#d4af37]">ABOUT</a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 pt-6 text-[10px] text-[#99958b] sm:flex-row">
          <p>© 2026 Cartlay. All rights reserved.</p>
          <p>Made for everyday living.</p>
        </div>
      </footer>
    </main>
  );
}