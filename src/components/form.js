export function Form() {
  return (
    <form id="formulario">
      <p>1- Personal Data</p>
      <br />
      <p>Datos de contacto</p>
      <input type="text" placeholder="name" id="nombre" size="15" />
      <input type="text" placeholder="Last Name" id="apellidos" size="36" />
      <br />
      <label htmlFor="birthdate"></label>
      Birthdate:
      <input type="date" id="birthdate" name="birthdate"></input>
      <br />
      <input type="radio" name="sex" value="male" checked /> Male
      <input type="radio" name="sex" value="female" /> Female
      <br />
      <input type="email" placeholder="E-mail" id="email" />
      <br />
      <input type="checkbox" id="dominio" onClick="calcular()" />
      <label>¿desea recibir información de nuestra newsletter?</label> <br />
      <br />
      <p>2- Access Data</p>
      <input type="text" placeholder="Username" id="username" size="15" />
      <input type="password" placeholder="Password" id="password" size="15" />
      <input
        type="password"
        placeholder="Repeat Password"
        id="repeat-password"
        size="15"
      />
      <br />
      <select id="account" onChange="calcular()">
        <option value="">--Account type--</option>
        <option value="basica">Personal</option>
        <option value="avanzada">Pro</option>
        <option value="tienda">Business</option>
      </select>
      <p>Aceptación de condiciones y envío del presupuesto</p> <br />
      <input type="checkbox" id="privacidad" />
      <label> He leído y acepto la política de privacidad </label>
      <br />
      <input
        type="submit"
        value="Enviar información"
        onClick="validar(this.form);return false"
      />
      <input type="reset" value="Borrar" />
    </form>
  );
}
