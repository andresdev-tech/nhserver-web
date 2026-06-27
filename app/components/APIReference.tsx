export default function APIReference(): JSX.Element {
  return (
    <section id="api" className="max-w-[900px] mx-auto px-8 py-20">
      <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
        API Reference
      </p>
      <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
        Request &amp; Response
      </h2>
      <p className="text-[#8892A4] mb-10 max-w-[540px]">
        Todo lo que necesitas, sin sorpresas.
      </p>

      <h3 className="text-sm text-[#8892A4] mb-3 font-medium">Request <code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req</code></h3>
      <div className="border border-[#2A2F38] rounded-[10px] overflow-hidden mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left text-[#8892A4] font-medium text-xs uppercase tracking-[0.06em] px-3 py-2 border-b border-[#2A2F38]">Propiedad / Método</th>
              <th className="text-left text-[#8892A4] font-medium text-xs uppercase tracking-[0.06em] px-3 py-2 border-b border-[#2A2F38]">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.method</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Método HTTP de la solicitud</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.path</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Ruta URL (sin query string)</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.params</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Parámetros de ruta {`{ id: '42' }`}</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.query</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Query string como objeto</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.headers</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Todos los headers de la solicitud</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.ip</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">IP del cliente (respeta X-Forwarded-For)</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.data</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Body parseado (requiere bodyParser())</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.body()</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Promise — parsea el body manualmente</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.header(name)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Obtiene un header por nombre (case-insensitive)</td></tr>
            <tr><td className="px-3 py-2.5"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">req.accepts(...types)</code></td><td className="px-3 py-2.5 text-[#8892A4]">Negociación de contenido via Accept</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm text-[#8892A4] mb-3 font-medium">Response <code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res</code></h3>
      <div className="border border-[#2A2F38] rounded-[10px] overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left text-[#8892A4] font-medium text-xs uppercase tracking-[0.06em] px-3 py-2 border-b border-[#2A2F38]">Método</th>
              <th className="text-left text-[#8892A4] font-medium text-xs uppercase tracking-[0.06em] px-3 py-2 border-b border-[#2A2F38]">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.status(code)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Establece el código de estado HTTP (chainable)</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.json(data)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Envía respuesta JSON</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.send(text)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Envía texto plano</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.html(markup)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Envía HTML</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.sendFile(path)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Envía un archivo del sistema de archivos</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.redirect(url)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Redirección 302</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.set(name, value)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Establece un header de respuesta</td></tr>
            <tr><td className="px-3 py-2.5 border-b border-[#2A2F38]"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.success(data)</code></td><td className="px-3 py-2.5 border-b border-[#2A2F38] text-[#8892A4]">Envelope {`{ ok: true, data }`}</td></tr>
            <tr><td className="px-3 py-2.5"><code className="font-mono text-xs text-[#A78BFA] bg-[rgba(124,106,255,0.1)] px-1.5 py-0.5 rounded">res.error(msg, status)</code></td><td className="px-3 py-2.5 text-[#8892A4]">Envelope {`{ ok: false, error }`}</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
