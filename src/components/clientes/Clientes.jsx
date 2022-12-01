import { useEffect, useState } from "react";
import { getAllClientes } from "../../apis/getAllClientes";
import { NavBar } from "../../layout/NavBar";
import { ModalBoostrap } from "./ModalBoostrap";

export const Clientes = () => {
  const [transportadora, settransportadora] = useState([]);
  useEffect(() => {
    const fetchClientes = async () => {
      const { result } = await getAllClientes();
      // console.log(result);

      settransportadora(result);
    };
    fetchClientes();
  }, []);

  const editarTransporte = (id) => {
    console.log(id);
    const modal = document.getElementById("modalEditarTransporte");
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    let transpor2 = [...transportadora];
    let result = transpor2.filter((item) => item.id_transporte === id);
    console.log(result);
  };

  return (
    <>
      <NavBar />
      <br />
      <table className="table table-striped table-bordered table-hover table-sortable animate__animated animate__fadeIn">
        <thead className="formBG text-center ">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Celular</th>
            <th scope="col">Nombre-Contacto</th>
            <th scope="col">Direccion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody
          id="tablaTransportes"
          className="text-center animate__animated animate__fadeIn"
        >
          {transportadora.map((transportadora, index) => {
            return (
              <tr key={transportadora.id_transporte}>
                <td>{transportadora.id_transporte}</td>
                <td>{transportadora.nombre}</td>
                <td>{transportadora.telefono}</td>
                <td>{transportadora.celular}</td>
                <td>{transportadora.nombre_contacto}</td>
                <td>{transportadora.direccion}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#modalEditarTransporte"
                    onClick={() =>
                      editarTransporte(transportadora.id_transporte)
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    // onClick={() => eliminarTransporte(transportadora.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalBoostrap />;
    </>
  );
};