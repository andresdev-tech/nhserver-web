export default function Middleware() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-20">
      <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
        Middleware
      </p>
      <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
        Incluido en la caja.
      </h2>
      <p className="text-[#8892A4] mb-10 max-w-[540px]">
        Cuatro middlewares listos para usar, con opciones de configuración simples.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-5">
          <h4 className="font-mono text-sm text-[#A78BFA] mb-1.5">nhserver.logger()</h4>
          <p className="text-sm text-[#8892A4]">Log colorizado con método HTTP, path, código de estado y tiempo de respuesta en ms.</p>
        </div>
        <div className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-5">
          <h4 className="font-mono text-sm text-[#A78BFA] mb-1.5">nhserver.cors(options)</h4>
          <p className="text-sm text-[#8892A4]">Headers CORS con soporte para origin, methods y headers configurables. Preflight automático.</p>
        </div>
        <div className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-5">
          <h4 className="font-mono text-sm text-[#A78BFA] mb-1.5">nhserver.bodyParser()</h4>
          <p className="text-sm text-[#8892A4]">Parsea JSON y URL-encoded. El resultado queda en req.data para acceso inmediato.</p>
        </div>
        <div className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-5">
          <h4 className="font-mono text-sm text-[#A78BFA] mb-1.5">nhserver.secureHeaders()</h4>
          <p className="text-sm text-[#8892A4]">Añade X-Content-Type-Options, X-Frame-Options, X-XSS-Protection y Referrer-Policy.</p>
        </div>
      </div>
    </section>
  );
}
