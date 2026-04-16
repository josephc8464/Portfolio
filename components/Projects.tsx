export default function Projects() {
  return (
    <section className="py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="space-y-10">

        <div>
          <h3 className="text-xl font-medium">Bakery Database</h3>
          <p className="text-muted-foreground">
            Designed and implemented a relational database schema using Neon, supporting inventory, orders,
            and customer data. Applied normalization (1NF–3NF) and indexing to improve performance.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Tech: SQL, Neon</p>
        </div>

        <div>
          <h3 className="text-xl font-medium">Two‑Three Tree</h3>
          <p className="text-muted-foreground">
            Implemented a balanced 2‑3 Tree in Java with node‑splitting, key promotion, and recursive algorithms
            to maintain logarithmic performance.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Tech: Java, Data Structures</p>
        </div>

        <div>
          <h3 className="text-xl font-medium">MIPS Assembly Processor</h3>
          <p className="text-muted-foreground">
            Built a custom MIPS processor in Verilog supporting ~30 instructions. Validated using simulation
            and waveform analysis in Vivado and deployed to FPGA hardware.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Tech: Verilog, Vivado, FPGA</p>
        </div>

      </div>
    </section>
  )
}
