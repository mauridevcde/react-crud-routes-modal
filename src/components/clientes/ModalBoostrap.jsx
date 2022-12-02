import { useEffect, useState } from "react";
import { useForm } from "../../customHooks/useForm";

export const ModalBoostrap = ({ contenido, idTran }) => {
  // console.log("contenido", contenido);
  // console.log("id", idTran);

  const [transportadoras, setTransportadoras] = useState([
    {
      celular: "",
      direccion: "",
      estado: "",
      horario_atn: "",
      id_pais: "",
      id_transporte: "",
      nombre: "",
      nombre_contacto: "",
      observaciones: "",
      puerta_puerta: "",
      tel_opcional: "",
      telefono: "",
    }
  ]
  );

  useEffect(() => {
    contenido.map((contenido) => {
      if (contenido.id_transporte === idTran) {
        setTransportadoras(contenido);
      }
      console.log("contenido", contenido);
    });
  }, [idTran]);

  //escuchar los cambios del formulario
  const handleInputChange = ({ target }) => {
    setTransportadoras({
      ...transportadoras,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("transportadoras", transportadoras);
  }

  return (
    <div
      className="modal fade"
      id="modalEditarTransporte"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="productoNuevoModalLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title  m-auto" id="transportadoraModalLabel">
              EDITAR TRANSPORTADORA
            </h5>
          </div>

          <div className="modal-body">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label>Nombre:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpNombreEditarTransportadora"
                          name="nombre"
                          defaultValue={transportadoras.nombre}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Telefono</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpTelefonoEditarTransportadora"
                          name="telefono"
                          defaultValue={transportadoras.telefono}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Celular</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpCelularEditarTransportadora"
                          name="celular"
                          defaultValue={transportadoras.celular}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Nombre - Contacto</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpNombreContactoEditarTransportadora"
                          name="nombre_contacto"
                          defaultValue={transportadoras.nombre_contacto}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label>Observaciones</label>
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="inpObsEditarTransportadora"
                          name="observaciones"
                          defaultValue={transportadoras.observaciones}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label>Direccion</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpDireccionEditarTransportadora"
                          name="direccion"
                          defaultValue={transportadoras.direccion}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label>Telefono Opcional</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpTelefonoOpcionalEditarTransportadora"
                          name="tel_opcional"
                          defaultValue={transportadoras.tel_opcional}
                          onChange={handleInputChange}
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label>Nacionalidad</label>
                        <select
                          id="selectProvEditarTransportadora"
                          name="id_pais"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">Paraguayo</option>
                          <option value="2">Argentino</option>
                        </select>
                      </div>
                      <div className="form-group"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-danger"
            >
              Cerrar
            </button>
            <button
              onClick={onSubmit}
              id="btnGuardarModalEditarTransportadora"
              type="submit"
              className="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
