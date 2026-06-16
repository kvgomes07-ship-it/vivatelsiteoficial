import { Monitor, Shield, Zap, Globe, Cpu, Clock } from "lucide-react"

export function IoTTechnicalSpecs() {
  const specs = [
    { icon: Zap, label: "Velocidade Nominal", value: "Até 10 Gbps Dedicados" },
    { icon: Monitor, label: "Upload/Download", value: "1:1 Simétrico" },
    { icon: Clock, label: "Latência Media", value: "< 5ms (Local NOC)" },
    { icon: Shield, label: "Disponibilidade (SLA)", value: "99.9% Garantida" },
    { icon: Cpu, label: "Tecnologia", value: "Fibra Geo-Redundante + IoT Edge" },
    { icon: Globe, label: "Cobertura", value: "Luanda, Lobito, Benguela, Nacional" }
  ]

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specs.map((spec, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-cyan-500/20">
              <spec.icon className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black">{spec.label}</p>
              <p className="text-sm font-bold text-white">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-center">
        <p className="text-xs text-cyan-200 font-medium">
          Infraestrutura 100% Própria baseada em roteamento BGP4 e aneis de fibra ótica de alta resiliência.
        </p>
      </div>
    </div>
  )
}
