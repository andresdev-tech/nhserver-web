import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-20">
      <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
        Características
      </p>
      <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
        Todo lo que necesitas,<br/>nada que no necesitas.
      </h2>
      <p className="text-[#8892A4] mb-10 max-w-[540px]">
        Diseñado para ser entendido en su totalidad — lo suficientemente simple para leer el código fuente en una tarde.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px bg-[#2A2F38] border border-[#2A2F38] rounded-[10px] overflow-hidden">
        <FeatureCard
          icon="⚡"
          title="Enrutamiento con parámetros"
          description="Rutas /users/:id, wildcards, múltiples handlers por ruta y soporte completo para todos los métodos HTTP."
        />
        <FeatureCard
          icon="🔧"
          title="Middleware integrado"
          description="CORS, logger colorizado, bodyParser y security headers incluidos — sin instalar nada extra."
        />
        <FeatureCard
          icon="📦"
          title="Cero dependencias"
          description="Solo usa módulos nativos de Node.js. Tu node_modules te lo agradecerá."
        />
        <FeatureCard
          icon="✨"
          title="Respuestas estructuradas"
          description="Helpers res.success() y res.error() para envelopes JSON consistentes."
        />
        <FeatureCard
          icon="⚙️"
          title="Async nativo"
          description="Los handlers async y el middleware async son ciudadanos de primera clase. Los errores se propagan automáticamente."
        />
        <FeatureCard
          icon="🛡️"
          title="Manejo de errores"
          description="Los errores lanzados en cualquier handler o middleware se capturan automáticamente con respuesta JSON estructurada."
        />
      </div>
    </section>
  );
}
