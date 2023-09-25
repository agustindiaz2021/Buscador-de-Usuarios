let boton = document.getElementById("buscar");
let input = document.getElementById("buscadorUser");
let contenedor = document.getElementById("resultados");
let usersURL = "https://jsonplaceholder.typicode.com/users";

boton.addEventListener("click", function(){

    // Llama a la función para comenzar la solicitud
    leerJSON(input.value);

});

  async function leerJSON(id) {
    try {
      // Realizar la solicitud fetch
      const respuesta = await fetch(usersURL); 
  
      // Verificar si la solicitud fue exitosa (código de estado HTTP 200)
      if (!respuesta.ok) {
        throw new Error('No se pudo obtener el JSON');
      }
  
      // Convertir la respuesta a JSON y almacenarla en una variable
      const datosJSON = await respuesta.json();
      let usuarioEncontrado = null;
  
      for (var i = 0; i < datosJSON.length; i++) {
        if (id === String(datosJSON[i].id)) {
            usuarioEncontrado = datosJSON[i];
            break; // Sal del bucle una vez que encuentres al usuario
        }
    }
        
    if (usuarioEncontrado) {
            let user = usuarioEncontrado;
            console.log(id);
            contenedor.innerHTML=`
            <p class="text-start"><strong> ID:</strong></p>
            <p class="text-start"> ${user.id}</p>

            <p class="text-start"><strong> Nombre:</strong></p>
            <p class="text-start">${user.name}</p>

            <p class="text-start"><strong> Username:</strong></p>
            <p class="text-start">${user.username}</p>

            <p class="text-start"><strong> Email:</strong></p>
            <p class="text-start">${user.email}</p>
      ` ;
       // Agrega la información del usuario al contenedor de resultados
       contenedor.appendChild(usuarioEncontrado);
       
      
        } else{
        // Muestra un mensaje si no se encontraron usuarios
        contenedor.innerHTML = '<p>No se encontraron usuarios que coincidan con la búsqueda.</p>';
        }

      }
      
      catch (error) {
      console.error('Ocurrió un error:', error);
    }
}
  
  
  
  