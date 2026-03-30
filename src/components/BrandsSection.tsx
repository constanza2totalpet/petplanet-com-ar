import { PawPrint } from "lucide-react";

const BrandsSection = () => (
  <section id="marcas" className="py-20 bg-muted/40">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-4">
        Nuestras Marcas
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Marcas seleccionadas para garantizar calidad y confianza.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Crystal Cat */}
        <div className="w-56 rounded-xl border bg-card shadow-sm p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <PawPrint className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-heading font-bold text-lg">Crystal Cat</h3>
          <p className="text-sm text-muted-foreground mt-1">Piedras sanitarias de sílica</p>
        </div>

        {/* Placeholder brand */}
        <div className="w-56 rounded-xl border border-dashed bg-muted/50 p-8 flex flex-col items-center text-center opacity-50">
          <div className="w-16 h-16 rounded-full bg-coming-soon/20 flex items-center justify-center mb-4">
            <span className="text-coming-soon font-heading font-bold text-2xl">?</span>
          </div>
          <h3 className="font-heading font-bold text-lg text-coming-soon">Próximamente</h3>
          <p className="text-sm text-muted-foreground mt-1">Nueva marca en camino</p>
        </div>

        <div className="w-56 rounded-xl border border-dashed bg-muted/50 p-8 flex flex-col items-center text-center opacity-50">
          <div className="w-16 h-16 rounded-full bg-coming-soon/20 flex items-center justify-center mb-4">
            <span className="text-coming-soon font-heading font-bold text-2xl">?</span>
          </div>
          <h3 className="font-heading font-bold text-lg text-coming-soon">Próximamente</h3>
          <p className="text-sm text-muted-foreground mt-1">Nueva marca en camino</p>
        </div>
      </div>
    </div>
  </section>
);

export default BrandsSection;
