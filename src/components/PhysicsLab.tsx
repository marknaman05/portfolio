import { useEffect, useRef, useState } from "react";
import { Sliders, ArrowCounterClockwise } from "@phosphor-icons/react";

export function PhysicsLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [amplitude, setAmplitude] = useState(40);
  const [frequency, setFrequency] = useState(0.015);
  const [speed, setSpeed] = useState(0.04);
  const [showParticleMode, setShowParticleMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += speed;

      const halfHeight = canvas.height / 2;

      // Draw Grid Lines (Scope Oscilloscope style)
      ctx.strokeStyle = "rgba(63, 63, 70, 0.2)";
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines
      for (let y = 20; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 20; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw center axis
      ctx.strokeStyle = "rgba(113, 113, 122, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, halfHeight);
      ctx.lineTo(canvas.width, halfHeight);
      ctx.stroke();

      if (showParticleMode) {
        // Quantum Particle Representation: Discrete states
        ctx.fillStyle = "#00e5ff";
        const dotSpacing = 8;
        for (let x = 0; x < canvas.width; x += dotSpacing) {
          const y = halfHeight + Math.sin(x * frequency + time) * amplitude;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();

          // Draw Probability Density clouds (Quantum superposition)
          ctx.fillStyle = "rgba(0, 229, 255, 0.05)";
          ctx.beginPath();
          ctx.arc(x, y + Math.cos(x * 0.05) * 8, 4, 0, Math.PI * 2);
          ctx.arc(x, y - Math.cos(x * 0.05) * 8, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#00e5ff";
        }
      } else {
        // Continuous Wave Representation
        ctx.strokeStyle = "#00e5ff";
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let x = 0; x <= canvas.width; x++) {
          const y = halfHeight + Math.sin(x * frequency + time) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => cancelAnimationFrame(animId);
  }, [amplitude, frequency, speed, showParticleMode]);

  const resetControls = () => {
    setAmplitude(40);
    setFrequency(0.015);
    setSpeed(0.04);
    setShowParticleMode(false);
  };

  return (
    <section id="lab" className="py-24 border-t border-zinc-800/60 relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Interactive Physics Lab
          </h2>
          <p className="font-sans text-sm text-zinc-400">
            Experiment with wave parameters to visualize the wave-particle duality. See how changing amplitude, wavelength, and velocity affects probability wave functions.
          </p>
        </div>

        {/* Lab Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 backdrop-blur-sm">
          
          {/* Controls Column (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sliders size={20} className="text-quantum-cyan" />
                <span className="font-display font-bold text-sm tracking-wider text-white uppercase">
                  Wave Controls
                </span>
              </div>
              <button
                onClick={resetControls}
                className="text-zinc-500 hover:text-quantum-cyan transition-colors p-1 cursor-pointer"
                title="Reset lab settings"
              >
                <ArrowCounterClockwise size={16} />
              </button>
            </div>

            {/* Slider 1: Amplitude */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>AMPLITUDE (A)</span>
                <span className="text-quantum-cyan">{amplitude}px</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-quantum-cyan"
              />
            </div>

            {/* Slider 2: Frequency */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>FREQUENCY (f)</span>
                <span className="text-quantum-cyan">{(frequency * 1000).toFixed(1)} Hz</span>
              </div>
              <input
                type="range"
                min="0.005"
                max="0.04"
                step="0.001"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-quantum-cyan"
              />
            </div>

            {/* Slider 3: Speed */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>VELOCITY (v)</span>
                <span className="text-quantum-cyan">{(speed * 100).toFixed(0)} m/s</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.10"
                step="0.01"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-quantum-cyan"
              />
            </div>

            {/* Mode Switch: Duality Toggle */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                DUALITY MODEL:
              </span>
              <div className="flex rounded-full bg-zinc-950 p-1 border border-zinc-800">
                <button
                  onClick={() => setShowParticleMode(false)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                    !showParticleMode
                      ? "bg-quantum-cyan text-black font-semibold"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  WAVE
                </button>
                <button
                  onClick={() => setShowParticleMode(true)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                    showParticleMode
                      ? "bg-quantum-cyan text-black font-semibold"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  PARTICLE
                </button>
              </div>
            </div>
          </div>

          {/* Oscilloscope View Column (col-span-7) */}
          <div className="lg:col-span-7 relative border border-zinc-800 rounded-xl bg-zinc-950/80 p-4">
            
            {/* Oscilloscope Header details */}
            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 border-b border-zinc-900 pb-2 mb-4">
              <span>MODEL: DUALITY-SCOPE v1.0.5</span>
              <span className="text-quantum-cyan animate-pulse">● LIVE CHANNEL</span>
            </div>

            {/* Canvas Container */}
            <div className="relative w-full h-[180px] bg-zinc-950 rounded flex items-center justify-center overflow-hidden">
              <canvas
                ref={canvasRef}
                width={450}
                height={180}
                className="w-full h-full block"
              />
            </div>

            {/* Oscilloscope Footer details */}
            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-3 border-t border-zinc-900 mt-2">
              <span>TIME / DIV: 10ms</span>
              <span>TRIG: AUTO</span>
              <span>VOLTS / DIV: 5V</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
