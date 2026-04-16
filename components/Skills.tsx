export default function Skills() {
  return (
    <section className="py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium">Languages</h3>
          <ul className="text-muted-foreground">
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
            <li>SQL</li>
            <li>Verilog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Tools</h3>
          <ul className="text-muted-foreground">
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Neon</li>
            <li>Spring Boot</li>
            <li>Xilinx Vivado</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Concepts</h3>
          <ul className="text-muted-foreground">
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Design</li>
            <li>Memory Management</li>
            <li>Relational Database Design</li>
            <li>Digital Logic Design</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
