export default function QuickStart(): JSX.Element {
  return (
    <section id="quickstart" className="max-w-[900px] mx-auto px-8 py-20">
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
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1E24] border-b border-[#2A2F38]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
          <span className="font-mono text-xs text-[#8892A4] ml-2">index.js</span>
        </div>
        <pre className="p-6 overflow-x-auto font-mono text-sm leading-[1.7]">
          <code>
            <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">nhserver</span> <span className="text-[#8892a4]">=</span> <span className="text-[#61afef]">require</span><span className="text-[#8892a4]">(</span><span className="text-[#98c379]">'nhserver'</span><span className="text-[#8892a4]">);</span>
            {'\n'}
            {'\n'}
            <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">app</span> <span className="text-[#8892a4]">=</span> <span className="text-[#61afef]">nhserver</span><span className="text-[#8892a4]">();</span>
            {'\n'}
            {'\n'}
            <span className="text-[#5c6370] italic">// Middleware integrado</span>
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">use</span><span className="text-[#8892a4]">(</span><span className="text-[#e5c07b]">nhserver</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">logger</span><span className="text-[#8892a4]">());</span>
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">use</span><span className="text-[#8892a4]">(</span><span className="text-[#e5c07b]">nhserver</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">cors</span><span className="text-[#8892a4]">({ </span><span className="text-[#e5c07b]">origin</span><span className="text-[#8892a4]">:</span> <span className="text-[#98c379]">'*'</span> <span className="text-[#8892a4]">&rbrace;));</span>
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">use</span><span className="text-[#8892a4]">(</span><span className="text-[#e5c07b]">nhserver</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">bodyParser</span><span className="text-[#8892a4]">());</span>
            {'\n'}
            {'\n'}
            <span className="text-[#5c6370] italic">// Rutas</span>
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">get</span><span className="text-[#8892a4]">(</span><span className="text-[#98c379]">'/'</span><span className="text-[#8892a4]">, (</span><span className="text-[#e5c07b]">req</span><span className="text-[#8892a4]">,</span> <span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">) =&gt; {</span>
            {'\n'}
            {'  '}<span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">json</span><span className="text-[#8892a4]">({ </span><span className="text-[#e5c07b]">message</span><span className="text-[#8892a4]">:</span> <span className="text-[#98c379]">'Hello from NHServer!'</span> <span className="text-[#8892a4]">&rbrace;);</span>
            {'\n'}
 <span className="text-[#8892a4]">{"}"});</span>
            {'\n'}
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">get</span><span className="text-[#8892a4]">(</span><span className="text-[#98c379]">'/users/:id'</span><span className="text-[#8892a4]">, (</span><span className="text-[#e5c07b]">req</span><span className="text-[#8892a4]">,</span> <span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">) =&gt; {</span>
            {'\n'}
            {'  '}<span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">success</span><span className="text-[#8892a4]">({</span><span className="text-[#e5c07b]">id</span><span className="text-[#8892a4]">:</span> <span className="text-[#e5c07b]">req</span><span className="text-[#8892a4]">.</span><span className="text-[#e5c07b]">params</span><span className="text-[#8892a4]">.</span><span className="text-[#e5c07b]">id</span> <span className="text-[#8892a4]">&rbrace;);</span>
            {'\n'}
 <span className="text-[#8892a4]">&rbrace;);</span>
            {'\n'}
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">post</span><span className="text-[#8892a4]">(</span><span className="text-[#98c379]">'/users'</span><span className="text-[#8892a4]">,</span> <span className="text-[#c678dd]">async</span> <span className="text-[#8892a4]">(</span><span className="text-[#e5c07b]">req</span><span className="text-[#8892a4]">,</span> <span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">) =&gt; {</span>
            {'\n'}
            {'  '}<span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">body</span> <span className="text-[#8892a4]">=</span> <span className="text-[#e5c07b]">req</span><span className="text-[#8892a4]">.</span><span className="text-[#e5c07b]">data</span><span className="text-[#8892a4]">;</span>
            {'\n'}
            {'  '}<span className="text-[#e5c07b]">res</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">status</span><span className="text-[#8892a4]">(</span><span className="text-[#d19a66]">201</span><span className="text-[#8892a4]">).</span><span className="text-[#61afef]">json</span><span className="text-[#8892a4]">({ </span><span className="text-[#e5c07b]">created</span><span className="text-[#8892a4]">:</span> <span className="text-[#d19a66]">true</span><span className="text-[#8892a4]">,</span> <span className="text-[#e5c07b]">user</span><span className="text-[#8892a4]">:</span> <span className="text-[#e5c07b]">body</span> <span className="text-[#8892a4]">&rbrace;);</span>
            {'\n'}
 <span className="text-[#8892a4]">&rbrace;);</span>
            {'\n'}
            {'\n'}
            <span className="text-[#5c6370] italic">// Iniciar servidor</span>
            {'\n'}
            <span className="text-[#e5c07b]">app</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">listen</span><span className="text-[#8892a4]">(</span><span className="text-[#d19a66]">3000</span><span className="text-[#8892a4]">, () =&gt; {</span>
            {'\n'}
            {'  '}<span className="text-[#e5c07b]">console</span><span className="text-[#8892a4]">.</span><span className="text-[#61afef]">log</span><span className="text-[#8892a4]">(</span><span className="text-[#98c379]">'🚀 http://localhost:3000'</span><span className="text-[#8892a4]">);</span>
            {'\n'}
 <span className="text-[#8892a4]">&rbrace;);</span>
          </code>
        </pre>
      </div>
    </section>
  );
}
