import './novedades.css'
export const Novedades = () => {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="colaborador">COLABORADOR</label>
            <input type="text" id="colaborador" name="colaborador" />
          </div>
          <div>
            <label htmlFor="ciudad">CIUDAD</label>
            <input type="text" id="ciudad" name="ciudad" />
          </div>
          <div>
            <label htmlFor="novedad">NOVEDAD</label>
            <input type="text" id="novedad" name="novedad" />
          </div>
          <div>
            <label htmlFor="activoDevuelto">ACTIVO DEVUELTO</label>
            <input type="text" id="activoDevuelto" name="activoDevuelto" />
          </div>
          <div>
            <label htmlFor="activoNuevo">ACTIVO NUEVO</label>
            <input type="text" id="activoNuevo" name="activoNuevo" />
          </div>
          <div>
            <label htmlFor="fechaRetiroIngreso">FECHA RETIRO O INGRESO</label>
            <input type="text" id="fechaRetiroIngreso" name="fechaRetiroIngreso" />
          </div>
          <div>
            <label htmlFor="fechaReportaGreen">FECHA REPORTA GREEN</label>
            <input type="text" id="fechaReportaGreen" name="fechaReportaGreen" />
          </div>
          <div>
            <label htmlFor="despachoTransportadora">DESPACHO TRASNPORTADORA</label>
            <input type="text" id="despachoTransportadora" name="despachoTransportadora" />
          </div>
          <div>
            <label htmlFor="fechaEfectiva">FECHA EFECTIVA</label>
            <input type="text" id="fechaEfectiva" name="fechaEfectiva" />
          </div>
          <div>
            <label htmlFor="recibidoIT">RECIBIDO IT</label>
            <input type="text" id="recibidoIT" name="recibidoIT" />
          </div>
          <div>
            <label htmlFor="novedades">NOVEDADES</label>
            <input type="text" id="novedades" name="novedades" />
          </div>
          <div>
            <label htmlFor="valor">VALOR</label>
            <input type="text" id="valor" name="valor" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  };
