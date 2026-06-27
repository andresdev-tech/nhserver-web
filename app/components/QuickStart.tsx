export default function QuickStart() {
  const code = `const nhserver = require('nhserver');

const app = nhserver();

// Middleware integrado
app.use(nhserver.logger());
app.use(nhserver.cors({ origin: '*' }));
app.use(nhserver.bodyParser());

// Rutas
app.get('/', (req, res) => {
  res.json({ message: 'Hello from NHServer!' });
});

app.get('/users/:id', (req, res) => {
  res.success({
    id: req.params.id
  });
});

app.post('/users', async (req, res) => {
  const body = req.data;

  res.status(201).json({
    created: true,
    user: body
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('🚀 http://localhost:3000');
});
`;

  return (
    <section
      id="quickstart"
      className="max-w-[900px] mx-auto px-8 py-20"
    >
      <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
        Quick Start
      </p>

      <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
        De cero a servidor en 10 líneas.
      </h2>

      <p className="text-[#8892A4] mb-10 max-w-[540px]">
        Sin configuración, sin scaffolding. Solo instala y escribe.
      </p>

      <div className="bg-[#111318] border border-[#2A2F38] rounded-[10px] overflow-hidden">
        
        {/* Header ventana */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1E24] border-b border-[#2A2F38]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />

          <span className="font-mono text-xs text-[#8892A4] ml-2">
            index.js
          </span>
        </div>

        {/* Código */}
        <pre className="p-6 overflow-x-auto text-sm leading-7 font-mono text-gray-200">
          <code>{code}</code>
        </pre>

      </div>
    </section>
  );
}
