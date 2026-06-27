export default function Stats(): JSX.Element {
  return (
    <div className="flex justify-center gap-12 py-10 px-8 border-t border-b border-[#2A2F38]">
      <div className="text-center">
        <span className="block text-[1.8rem] font-semibold text-[#A78BFA] font-mono">0</span>
        <span className="text-sm text-[#8892A4]">dependencias</span>
      </div>
      <div className="text-center">
        <span className="block text-[1.8rem] font-semibold text-[#A78BFA] font-mono">~5kb</span>
        <span className="text-sm text-[#8892A4]">tamaño</span>
      </div>
      <div className="text-center">
        <span className="block text-[1.8rem] font-semibold text-[#A78BFA] font-mono">Node 18+</span>
        <span className="text-sm text-[#8892A4]">requerido</span>
      </div>
      <div className="text-center">
        <span className="block text-[1.8rem] font-semibold text-[#A78BFA] font-mono">MIT</span>
        <span className="text-sm text-[#8892A4]">licencia</span>
      </div>
    </div>
  );
}
