export const ModalBoostrap = () => {
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
                <form>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label>
                          Nombre:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpNombreEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label >
                          Telefono
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpTelefonoEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label >
                          Celular
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpCelularEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>

                      <div className="form-group">
                        <label >
                          Nombre - Contacto
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpNombreContactoEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label >Observaciones</label>
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="inpObsEditarTransportadora"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label >
                          Direccion
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpDireccionEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label >
                          Telefono Opcional
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inpTelefonoOpcionalEditarTransportadora"
                        />
                        <small className="form-text text-muted">
                          Este campo es obligatorio.
                        </small>
                      </div>
                      <div className="form-group">
                        <label >
                          Nacionalidad
                        </label>
                        <select
                          id="selectProvEditarTransportadora"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option id="selectProvEditarTransportadora" value="1">
                            Paraguayo
                          </option>
                          <option id="selectProvEditarTransportadora" value="2">
                            Argentino
                          </option>
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
              id="btnCerrarModalEditarTransportadora"
              type="button"
              className="btn btn-danger"
            >
              Cerrar
            </button>
            <button
              id="btnGuardarModalEditarTransportadora"
              type="button"
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
