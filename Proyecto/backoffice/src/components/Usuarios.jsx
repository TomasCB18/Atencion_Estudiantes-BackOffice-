import React, { Component } from 'react';
import './Formulario.css';
import './Usuarios.css';

class Usuarios extends Component {
  constructor(props) {
    super(props);

    const storedUsuarios = localStorage.getItem('usuarios');
    const usuarios = storedUsuarios ? JSON.parse(storedUsuarios) : [];

    this.state = {
      usuarios: usuarios,
      nuevoUsuario: { nombre: '', prio: '' },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.usuarios !== this.state.usuarios) {
      localStorage.setItem('usuarios', JSON.stringify(this.state.usuarios));
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      nuevoUsuario: {
        ...prevState.nuevoUsuario,
        [name]: value,
      },
    }));
  };

  handleAgregarUsuario = () => {
    this.setState((prevState) => ({
      usuarios: [...prevState.usuarios, { ...prevState.nuevoUsuario, id: prevState.usuarios.length + 1 }],
      nuevoUsuario: { nombre: '', prio: '' },
    }));
  };

  handleEliminarUsuario = (id) => {
    this.setState((prevState) => ({
      usuarios: prevState.usuarios.filter((usuario) => usuario.id !== id),
    }));
  };

  render() {
    const { usuarios, nuevoUsuario } = this.state;

    return (
      <div className="usuarios-container">
        <h1 className='text'>Gestión de alumnos</h1>

        <form className='usuarios-form'>
          <label>
            Nombre:
            <input type="text" name="nombre" value={nuevoUsuario.nombre} onChange={this.handleInputChange} />
          </label>
          <label>
            Prioridad:
            <input type="text" name="prio" value={nuevoUsuario.prio} onChange={this.handleInputChange} />
          </label>
          <button type="button" className='usuarios-button' onClick={this.handleAgregarUsuario}>
            Agregar Usuario
          </button>
        </form>

        <table className="usuarios-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Prioridad(1-10)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.prio}</td>
                <td>
                  <button type="button" className='usuarios-button' onClick={() => this.handleEliminarUsuario(usuario.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Usuarios;
