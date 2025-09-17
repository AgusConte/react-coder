function Contacto() {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <form className="contacto-form">
        <label>
          Nombre:
          <input type="text" name="nombre" placeholder="Tu nombre" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="tucorreo@mail.com" required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" placeholder="Escribe tu mensaje..." required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
