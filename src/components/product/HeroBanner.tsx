// HeroBanner Component (inspired by Velvety Beauty & Wellness UI Kit)
// Displays a botanical sage-green hero section and 3 wellness highlights at the top of the Catalog page.
export function HeroBanner() {
  return (
    <div className="rounded-xs overflow-hidden border border-stone-200 bg-white mb-10">
      {/* Top Banner: Sage green split layout */}
      <div className="bg-velvety-sage text-white p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-velvety-mist">
            dm Drogerie-Markt Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl leading-tight">
            Let nature take care of your body and soul
          </h1>
          <p className="text-sm text-velvety-mist/90 max-w-md leading-relaxed">
            Discover gentle daily skincare, nourishing hair care, and soothing
            body essentials crafted for healthy, radiant skin.
          </p>
          <div className="pt-2">
            <a
              href="#catalog-products"
              className="inline-block bg-white text-velvety-green hover:bg-velvety-mist px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Shop now →
            </a>
          </div>
        </div>

        {/* Featured Product Visual */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"
            alt="Featured skincare essentials"
            className="w-full max-w-sm h-64 sm:h-72 object-cover rounded-xs border border-white/20"
          />
        </div>
      </div>

      {/* Bottom Highlights Strip (3 simple wellness pillars) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 bg-velvety-mist/40 p-6 text-left">
        <div className="p-3 space-y-1">
          <h2 className="font-serif text-lg text-velvety-ink">
            Dermatologically Tested
          </h2>
          <p className="text-xs text-stone-600">
            Gentle formulas suitable for sensitive skin and everyday routines.
          </p>
        </div>

        <div className="p-3 space-y-1">
          <h2 className="font-serif text-lg text-velvety-ink">Fits Your Skin</h2>
          <p className="text-xs text-stone-600">
            Balanced hydration with hyaluronic acid, niacinamide, and natural oils.
          </p>
        </div>

        <div className="p-3 space-y-1">
          <h2 className="font-serif text-lg text-velvety-ink">Easy Daily Care</h2>
          <p className="text-xs text-stone-600">
            Thoughtfully organized into Skincare, Hair Care, and Body Care.
          </p>
        </div>
      </div>
    </div>
  )
}
