const Servicios = () => {
    return (
      <section className="bg-gray-50 min-h-screen pt-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Áreas de Práctica
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Nuestro estudio brinda asesoramiento legal en las siguientes ramas del derecho:
          </p>
  
          <ul className="text-left text-gray-700 text-lg max-w-2xl mx-auto space-y-4">
            <li>⚖️ Derecho Civil: contratos, sucesiones, daños y perjuicios.</li>
            <li>⚖️ Derecho Penal: defensa penal, procesos judiciales.</li>
            <li>⚖️ Derecho Laboral: despidos, accidentes, conflictos gremiales.</li>
            <li>⚖️ Derecho Comercial: sociedades, contratos, concursos.</li>
            <li>⚖️ Derecho Administrativo: trámites y litigios ante el Estado.</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Servicios;
  