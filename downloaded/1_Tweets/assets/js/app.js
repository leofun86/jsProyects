// VARIABLES

const listaTweets = document.getElementById('lista-tweets');

// EVENTOS

    eventListeners();

    function eventListeners() {

        // Cuando se envía el formulario
        document.querySelector('#formulario').addEventListener('submit', agregarTweet);

        // Borrar Tweets
        listaTweets.addEventListener('click', borrarTweet);

        // Contenido cargado
        document.addEventListener('DOMContentLoaded', localStorageListo);

    }   

// FUNCIONES

    // Agrega Tweet del DOM
    function agregarTweet(e) {
        e.preventDefault();
        // Leer el valor del textarea
        const tweet = document.getElementById('tweet').value;
        // Crear botón de eliminar
        const btnBorrar = document.createElement('a');
        btnBorrar.classList = 'borrar-tweet';
        btnBorrar.innerText = 'X';
        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        // Insertar valor de tweet en elemento li
        li.innerText = tweet;
        // Agregar botón de eliminar tweet al elemento li
        li.appendChild(btnBorrar);
        // Insertar elemento li en elemento padre
        listaTweets.appendChild(li);

        //Añadir a Local Storage
        agregarTweetLocalStorage(tweet);
    }

    // Elimina el tweet del DOM
    function borrarTweet(e)  {
        e.preventDefault();
        if (e.target.className === 'borrar-tweet') {
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.innerText);
        }
    }

    // Mostrar datos de Local Storage
    function localStorageListo() {
        let tweets;
        tweets = obtenerTeetsLocalStorage();
        tweets.forEach(function(tweet) {
            const btnBorrar = document.createElement('a');
            btnBorrar.classList = 'borrar-tweet';
            btnBorrar.innerText = 'X';
            const li = document.createElement('li');
            li.innerText = tweet;
            li.appendChild(btnBorrar);
            listaTweets.appendChild(li);
        });
    }

    // Agrega tweet a Local Storage
    function agregarTweetLocalStorage(tweet) {
        let tweets;
        tweets = obtenerTeetsLocalStorage();
        // Añadir nuevo tweet
        tweets.push(tweet);
        // Convertir de arrreglo a string para Local Storage
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    // Comprobar que haya elementos en Local Storage, retorna un arreglo
    function obtenerTeetsLocalStorage() {
        let tweets;
        // Revisamos los valores de Local Storage
        if (localStorage.getItem('tweets') === null) {
            tweets = [];
        } else {
            // Convertir la cadena de texto de Local Storage a Arreglo JSON
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }
        return tweets;
    }

    // Eliminar tweet de Local Storage
    function borrarTweetLocalStorage(tweet) {
        let tweets, tweetBorrar;
        // Eliminar X del tweet
        tweetBorrar = tweet.substring(0, tweet.length -1);

        tweets = obtenerTeetsLocalStorage();
        tweets.forEach(function(tweet, index) {
            if (tweetBorrar === tweet) {
                tweets.splice(index, 1);
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }