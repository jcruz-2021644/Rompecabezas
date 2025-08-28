<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Men� de Puzzles</title>
        <link rel="icon" type="image/x-icon" href="${pageContext.request.contextPath}/Images/LogoR.png">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/Styles/index.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    </head>
    <body>
        <div class="menu-container">
            <h1 class="title">PUZZLES �PICOS</h1>
            <p class="subtitle">Elige tu desaf�o y demuestra tus habilidades</p>

            <div class="puzzles-grid">
                <div class="puzzle-card jesus">
                    <span class="puzzle-icon"><i class="fa-solid fa-cross"></i></span>
                    <h2 class="puzzle-title">Puzzle de Jes�s</h2>
                    <p class="puzzle-description">Un desaf�o espiritual que pondr� a prueba tu paciencia y concentraci�n.</p>
                    <a  href="${pageContext.request.contextPath}/Index/rompecabezas3.jsp"
                        class="play-button">Jugar Ahora</a>
                </div>

                <div class="puzzle-card gallo">  <span class="puzzle-icon"><i class="fa-solid fa-shield-halved"></i></span>
                    <h2 class="puzzle-title">Puzzle del Gallo Gladeador</h2>
                    <p class="puzzle-description">�Une los chakras del pollo m�s �pico! Una aventura llena de diversi�n.</p>
                    <a  href="${pageContext.request.contextPath}/Index/rompecabezas.jsp" class="play-button">Jugar Ahora</a>
                </div>

                <div class="puzzle-card gato">
                    <span class="puzzle-icon"><i class="fa-solid fa-fish-fins"></i></span>
                    <h2 class="puzzle-title">Puzzle del Gato Misterioso</h2>
                    <p class="puzzle-description">Desentra�a el misterio felino en este adorable y desafiante puzzle.</p>
                    <a href="${pageContext.request.contextPath}/Index/rompecabezas2.jsp" class="play-button">Jugar Ahora</a>
                </div>
            </div>
        </div>
    </body>
</html>
