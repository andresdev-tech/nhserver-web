
interface code {
    code: string
}

export default function Conslole(codes: code) {
  return (
    <main>
    <div className="bg-[#111318] min-w-max min-h-auto m-2 p-4 border-2 border-[#2A2F38] rounded-3xl font-mono text-lg text-emerald-600">
        {codes.code}
    </div>
    </main>
  )
}
