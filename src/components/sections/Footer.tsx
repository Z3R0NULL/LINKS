export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6">
        {/* Logo en fuente Fipps */}
        <p
          className="text-lg tracking-tight mb-4"
          style={{ fontFamily: "'Fipps', monospace", lineHeight: "1.1" }}
        >
          <span style={{ color: "#e20303" }}>Z3RØ</span>
          <span style={{ color: "#737373" }}>NULL</span>
        </p>

        {/* Copyright */}
        <p className="font-mono text-sm text-gray-500">
          <span className="text-red-500/60">&gt;</span> ©{" "}
          {new Date().getFullYear()} Z3R0NULL{" "}
          <span className="text-gray-600">|</span> Developer
        </p>
      </div>
    </footer>
  );
}
