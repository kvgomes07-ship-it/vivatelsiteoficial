"use client"

export function MeshBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none select-none bg-[#020403]">
      {/* 1. Neon Blue Radial Central Glow - Pure CSS animation */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] rounded-full opacity-40 blur-[100px] animate-pulse"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
        }}
      />

      {/* 2. Minimal Tech Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
        }}
      />

      {/* 3. Subtle Luminous Waves (Static - no animation) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] opacity-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] border-t-[1px] border-blue-500/15 blur-[20px]" />
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[1000px] h-[200px] rounded-[100%] border-t-[2px] border-blue-400/10 blur-[40px]" />
      </div>

      {/* 4. Particles Layer (Single gradient layer) */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 15% 25%, #3B82F6 100%, transparent 0),
                            radial-gradient(1.5px 1.5px at 45% 65%, #3B82F6 100%, transparent 0),
                            radial-gradient(1.5px 1.5px at 85% 15%, #3B82F6 100%, transparent 0),
                            radial-gradient(2px 2px at 30% 90%, #3B82F6 100%, transparent 0),
                            radial-gradient(2px 2px at 70% 40%, #3B82F6 100%, transparent 0)`,
          backgroundSize: '300px 300px',
        }}
      />
      
      {/* 5. Deep Dark Vignette for Backdrop Blend */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020403_95%)]" />
    </div>
  )
}
