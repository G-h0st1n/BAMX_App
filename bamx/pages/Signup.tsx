import "./../styles/Signup"

function Signup(){
    return(
        <div>
            <h1> SIGN UP </h1>
            <form>

                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre"/>    

                <label>Apellido</label>
                <input type="text" placeholder="Ingrese su apellido"/>

                <label>Correo</label>
                <input type="text" placeholder="Ingrese su correo"/>    

                <label>Usuario</label>
                <input type="text" placeholder="Ingrese su usuario"/>

                <label>Contraseña</label>
                <input type="text" placeholder="Ingrese su contraseña"/>           
                
            </form>
        </div>

    )

}

export default Signup;