import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. VALIDACIÓN DE INSCRIPCIÓN (TU LÓGICA ORIGINAL) ---
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const edad = document.getElementById("edad").value;
            const contacto = document.getElementById("contacto").value;

            if (nombre === "" || edad === "" || contacto === "") {
                resultado.textContent = "Por favor complete todos los campos";
                resultado.style.color = "red";
                return;
            }

            if (parseInt(edad) < 18) {
                resultado.textContent = "Debes ser mayor de edad para inscribirte";
                resultado.style.color = "red";
                return;
            }

            if (!contacto.match(/^[0-9]{10}$/)) {
                resultado.textContent = "El contacto debe ser un número de 10 dígitos";
                resultado.style.color = "red";
                return;
            }

            resultado.textContent = "Inscripción enviada correctamente";
            resultado.style.color = "lightgreen";
            formulario.reset();
        });
    }

    // --- 2. LÓGICA DE LA IA (INTELIGENTE Y SIN ERRORES) ---
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");

    // Solo ejecutamos la IA si los elementos del chat existen en la página
    if (chatForm && chatInput && chatBody) {
        
        // Llave confirmada del proyecto 395918603660
        const API_KEY = "AIzaSyBkhqOd5fJKUbE6Dx4kvhZR2Hj9jikRykw";
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: "Eres el experto del Portal Rural El Progreso. Ayuda a campesinos con consejos técnicos claros."
        });

        let chatSession = model.startChat({ history: [] });

        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const prompt = chatInput.value.trim();
            if (!prompt) return;

            // Mostrar mensaje del usuario
            const uDiv = document.createElement("div");
            uDiv.className = "msg user"; // Asegúrate de tener esta clase en tu CSS
            uDiv.textContent = prompt;
            chatBody.appendChild(uDiv);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight;

            try {
                const result = await chatSession.sendMessage(prompt);
                const response = await result.response;
                
                const iDiv = document.createElement("div");
                iDiv.className = "msg ia"; // Asegúrate de tener esta clase en tu CSS
                
                // Usamos 'marked' si lo tienes en el HTML, si no, usa textContent
                if (window.marked) {
                    iDiv.innerHTML = marked.parse(response.text());
                } else {
                    iDiv.textContent = response.text();
                }
                
                chatBody.appendChild(iDiv);
            } catch (error) {
                console.error("Error de IA:", error);
                const eDiv = document.createElement("div");
                eDiv.className = "msg ia";
                eDiv.style.color = "#ff4d4d";
                eDiv.textContent = "La IA está tomando un descanso. Intenta en un minuto.";
                chatBody.appendChild(eDiv);
            } finally {
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        });
    }
});