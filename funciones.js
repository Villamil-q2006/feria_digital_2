document.addEventListener("DOMContentLoaded", function(){

  // --- VALIDACIÓN DE INSCRIPCIÓN ---
  const formulario = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");

  if(formulario){
    formulario.addEventListener("submit", function(e){
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const edad = document.getElementById("edad").value;
      const contacto = document.getElementById("contacto").value;

      if(nombre === "" || edad === "" || contacto === ""){
        resultado.textContent = "Por favor complete todos los campos";
        resultado.style.color = "red";
        return;
      }

      if(edad < 18){
        resultado.textContent = "Debes ser mayor de edad para inscribirte";
        resultado.style.color = "red";
        return;
      }

      if(!contacto.match(/^[0-9]{10}$/)){
        resultado.textContent = "El contacto debe ser un número de 10 dígitos";
        resultado.style.color = "red";
        return;
      }

      resultado.textContent = "Inscripción enviada correctamente";
      resultado.style.color = "lightgreen";
      formulario.reset();
    });
  }

  // --- LOGIN Y VERIFICACIÓN CON FIREBASE ---
  import("https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js").then(({ initializeApp }) => {
    import("https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js").then(({ 
      getAuth, 
      createUserWithEmailAndPassword, 
      signInWithEmailAndPassword, 
      sendEmailVerification 
    }) => {

      const firebaseConfig = {
        apiKey: "AIzaSyAwcDaYFEdMX9QpJMoKA1pBGJog3_uM6e4",
        authDomain: "correos-de-verificacion.firebaseapp.com",
        projectId: "correos-de-verificacion",
        storageBucket: "correos-de-verificacion.firebasestorage.app",
        messagingSenderId: "395918603660",
        appId: "1:395918603660:web:7183abd472984f060012a9",
        measurementId: "G-QQ6KTDYPDF"
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

      const loginForm = document.getElementById("loginForm");
      const loginMessage = document.getElementById("loginMessage");
      const contenido = document.getElementById("contenido");

      if(loginForm){
        loginForm.addEventListener("submit", async function(e){
          e.preventDefault();

          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          if(email === "" || password === ""){
            loginMessage.textContent = "Todos los campos son obligatorios";
            loginMessage.style.color = "red";
            return;
          }

          if(!email.includes("@")){
            loginMessage.textContent = "Correo inválido";
            loginMessage.style.color = "red";
            return;
          }

          if(password.length < 6){
            loginMessage.textContent = "La contraseña debe tener al menos 6 caracteres";
            loginMessage.style.color = "red";
            return;
          }

          try {
            // Intentar crear usuario nuevo
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await sendEmailVerification(user);
            loginMessage.textContent = "Se envió un correo de verificación. Revisa tu bandeja.";
            loginMessage.style.color = "lightgreen";
          } catch (error) {
            // Si ya existe, intentar iniciar sesión
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;

              if(user.emailVerified){
                loginMessage.textContent = "Acceso concedido.";
                loginMessage.style.color = "lightgreen";
                contenido.style.display = "block";
                document.getElementById("login").style.display = "none";
              } else {
                loginMessage.textContent = "Debes verificar tu correo antes de entrar.";
                loginMessage.style.color = "red";
              }
            } catch (err) {
              loginMessage.textContent = "Error: " + err.message;
              loginMessage.style.color = "red";
            }
          }
        });
      }
    });
  });
});
