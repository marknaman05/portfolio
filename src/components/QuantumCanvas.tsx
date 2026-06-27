import { useEffect, useRef } from "react";

export function QuantumCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle responsiveness
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Particle representation
    interface Particle {
      x: number;
      y: number;
      baseY: number;
      phase: number;
      speed: number;
      amplitude: number;
      size: number;
    }

    const particles: Particle[] = [];

    // Initialize particles across the horizontal axis
    const initParticles = () => {
      particles.length = 0;
      const currentWidth = canvas.width;
      const count = Math.min(100, Math.max(40, Math.floor(currentWidth / 25)));
      const currentSpacing = currentWidth / (count - 1);

      for (let i = 0; i < count; i++) {
        const x = i * currentSpacing;
        const baseY = canvas.height * 0.55; // centered/slightly lowered
        particles.push({
          x,
          y: baseY,
          baseY,
          phase: i * 0.15,
          speed: 0.015 + Math.random() * 0.01,
          amplitude: 40 + Math.random() * 20,
          size: 1.5 + Math.random() * 1.5,
        });
      }
    };
    initParticles();
    window.addEventListener("resize", initParticles);

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse coordinates interpolation for momentum
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Update time factor
      if (!prefersReducedMotion) {
        time += 0.02;
      }

      // Draw mathematical wave lines in the background
      ctx.strokeStyle = "rgba(0, 229, 255, 0.04)";
      ctx.lineWidth = 1;

      // Draw 3 overlay wave equations
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const offset = j * 40;
        const freqMultiplier = 0.003 + j * 0.001;
        const ampMultiplier = 30 - j * 5;
        const phaseOffset = j * Math.PI * 0.3;

        for (let x = 0; x <= canvas.width; x += 10) {
          // Sine + Cosine interference wave
          let waveY =
            canvas.height * 0.55 +
            offset +
            Math.sin(x * freqMultiplier + time + phaseOffset) * ampMultiplier +
            Math.cos(x * 0.0015 - time * 0.5) * 15;

          // Mouse distortion on lines
          const dx = x - mouse.x;
          const dy = waveY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push wave away from cursor
            const pushDir = dy > 0 ? 1 : -1;
            waveY += force * 25 * pushDir;
          }

          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
      }

      // Draw and update particle points representing discrete states
      particles.forEach((p) => {
        // Base physics wave motion
        const baseOffset = Math.sin(p.phase + time) * p.amplitude;
        let targetY = p.baseY + baseOffset;

        // Mouse interaction: Particle behavior (Observer Effect)
        const dx = p.x - mouse.x;
        const dy = targetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Particles repel and enter an excited state (move/jitter)
          p.x += Math.cos(angle) * force * 3;
          targetY += Math.sin(angle) * force * 3;
        } else {
          // Return to original horizontal grid line
          const targetX = particles.indexOf(p) * (canvas.width / (particles.length - 1));
          p.x += (targetX - p.x) * 0.05;
        }

        p.y += (targetY - p.y) * 0.1;

        // Render particle
        ctx.fillStyle = dist < mouse.radius
          ? `rgba(0, 229, 255, ${0.4 + (mouse.radius - dist) / mouse.radius * 0.6})` // brighter on hover
          : "rgba(0, 229, 255, 0.25)";
        
        ctx.beginPath();
        // Hover particles look slightly larger (energized)
        const activeSize = dist < mouse.radius ? p.size * 1.5 : p.size;
        ctx.arc(p.x, p.y, activeSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby energized particles with threads
        if (dist < mouse.radius) {
          particles.forEach((other) => {
            if (other === p) return;
            const odx = other.x - p.x;
            const ody = other.y - p.y;
            const odist = Math.sqrt(odx * odx + ody * ody);
            if (odist < 50) {
              ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - odist / 50)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          });
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", initParticles);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#09090b]"
      style={{ mixBlendMode: "screen", opacity: 0.4 }}
    />
  );
}
