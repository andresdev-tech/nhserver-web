export default function Roadmap() {
  return (
    <section id="roadmap" className="max-w-[900px] mx-auto px-8 py-20">
      <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
        Roadmap
      </p>
      <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
        Lo que viene.
      </h2>
      <p className="text-[#8892A4] mb-10 max-w-[540px]">
        NHServer v1.0.0 es el punto de partida — construido para crecer sin romper compatibilidad.
      </p>
      <ul className="flex flex-col gap-0 list-none">
        <li className="flex items-start gap-4 py-4.5 border-b border-[#2A2F38]">
          <span className="text-xs font-mono px-2 py-0.75 rounded whitespace-nowrap mt-0.5 bg-[rgba(52,211,153,0.12)] text-[#34D399] border border-[rgba(52,211,153,0.3)]">v1.0.0</span>
          <div>
            <h4 className="text-sm font-medium mb-0.5">Core estable</h4>
            <p className="text-sm text-[#8892A4]">Enrutamiento con parámetros, middleware pipeline, Request/Response API, built-ins (cors, logger, bodyParser, secureHeaders).</p>
          </div>
        </li>
        <li className="flex items-start gap-4 py-4.5 border-b border-[#2A2F38]">
          <span className="text-xs font-mono px-2 py-0.75 rounded whitespace-nowrap mt-0.5 bg-[rgba(251,191,36,0.1)] text-[#FBBF24] border border-[rgba(251,191,36,0.25)]">v1.1.0</span>
          <div>
            <h4 className="text-sm font-medium mb-0.5">TypeScript support</h4>
            <p className="text-sm text-[#8892A4]">Definiciones de tipos .d.ts sin romper compatibilidad con JS existente.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 py-4.5 border-b border-[#2A2F38]">
          <span className="text-xs font-mono px-2 py-0.75 rounded whitespace-nowrap mt-0.5 bg-[rgba(251,191,36,0.1)] text-[#FBBF24] border border-[rgba(251,191,36,0.25)]">v1.2.0</span>
          <div>
            <h4 className="text-sm font-medium mb-0.5">Router modular</h4>
            <p className="text-sm text-[#8892A4]">Sub-routers instanciables para organizar grandes proyectos por dominio.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 py-4.5 border-b border-[#2A2F38]">
          <span className="text-xs font-mono px-2 py-0.75 rounded whitespace-nowrap mt-0.5 bg-[rgba(124,106,255,0.1)] text-[#A78BFA] border border-[rgba(124,106,255,0.25)]">v1.3.0</span>
          <div>
            <h4 className="text-sm font-medium mb-0.5">Static file serving</h4>
            <p className="text-sm text-[#8892A4]">Middleware nhserver.static(dir) para servir carpetas públicas.</p>
          </div>
        </li>
        <li className="flex items-start gap-4 py-4.5">
          <span className="text-xs font-mono px-2 py-0.75 rounded whitespace-nowrap mt-0.5 bg-[rgba(124,106,255,0.1)] text-[#A78BFA] border border-[rgba(124,106,255,0.25)]">v2.0.0</span>
          <div>
            <h4 className="text-sm font-medium mb-0.5">HTTP/2 &amp; WebSocket</h4>
            <p className="text-sm text-[#8892A4]">Soporte nativo para HTTP/2 y conexiones WebSocket.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
