export const ModalBoostrap = () => {
  return (
    <div
      className="modal fade"
      id="modalEditarTransporte"
      tabindex="-1"
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
                        <label for="inpNombreEditarTransportadora">
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
                        <label for="inpTelefonoEditarTransportadora">
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
                        <label for="inpCelularEditarTransportadora">
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
                        <label for="inpNombreContactoEditarTransportadora">
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
                        <label for="lblObs">Observaciones</label>
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="inpObsEditarTransportadora"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label for="inpDireccionEditarTransportadora">
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
                        <label for="inpTelefonoOpcionalEditarTransportadora">
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
                        <label for="inpNacionalidadEditarTransportadora">
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
