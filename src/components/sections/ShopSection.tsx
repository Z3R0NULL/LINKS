import { ShoppingBag, ExternalLink } from "lucide-react";
import { CyberGrid } from "@/components/CyberGrid";
import { shopProducts } from "@/data/portfolio-data";

export function ShopSection() {
  return (
    <section
      id="shop"
      className="relative border-t border-white/5 bg-[#0d0d0d] py-24"
    >
      <CyberGrid className="opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="scroll-reveal mb-4 flex items-center justify-center gap-3">
          <ShoppingBag className="h-6 w-6 text-red-500" />
          <h2 className="text-center text-3xl font-bold sm:text-4xl text-white">
            Tienda
          </h2>
        </div>

        <p
          className="scroll-reveal mx-auto mb-12 max-w-2xl text-center text-gray-500"
          style={{ transitionDelay: "0.1s" }}
        >
          Proyectos y dispositivos disponibles para comprar en MercadoLibre
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shopProducts.map((product, index) => (
              <div
                key={product.title}
                className="scroll-reveal group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:border-red-500/20 hover:-translate-y-1"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Image area */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] font-medium tracking-wider text-gray-300 border border-white/10 uppercase transition-colors duration-200 group-hover:text-red-400/70 group-hover:border-red-500/15">
                      {product.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-semibold text-gray-200 transition-colors duration-150 group-hover:text-white">
                    {product.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/[0.04]">
                    <a
                      href={product.mercadoLibreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-150 hover:text-red-400"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Ver en MercadoLibre</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="scroll-reveal mt-12 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-gray-600 transition-colors duration-150 hover:text-red-400"
          >
            <span className="font-mono text-sm">
              Ver todos los productos en MercadoLibre
            </span>
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
