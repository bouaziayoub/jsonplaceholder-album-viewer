      // crear un elemento table con fetch
      const main = document.querySelector("main");
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      // crear un h1 y añadirle un texto
      const h1 = document.createElement("h1");
      h1.textContent = "Tabla de fotos";
      main.appendChild(h1);
      // crear los th de la tabla con un array de strings y un forEach
      const thList = ["albumId", "id", "thumbnailUrl", "title", "url"];
      thList.forEach((element) => {
        // crear un elemento th y añadirle el texto del array
        const th = document.createElement("th");
        th.textContent = element;
        tr.appendChild(th);
      });

      // añadir el tr al thead y el thead y tbody al table
      thead.appendChild(tr);
      table.appendChild(thead);
      table.appendChild(tbody);
      main.appendChild(table);

      // fetch de la api y añadir los datos a la tabla
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((element) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${element.albumId}</td>
            <td>${element.id}</td>
            <td><img src="${element.thumbnailUrl}" alt="${element.title}" /></td>
            <td>${element.title}</td>
            <td><a href="${element.url}">Link</a></td>
            `;
            tbody.appendChild(tr);
          });
        });



    // crear un elemento ul y li
      const header = document.querySelector("header");
      // crear un elemento nav
      const nav = document.createElement("nav");
      const ul = document.createElement("ul");

      // crear nav y ul
      const navLi = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
      ];
      navLi.forEach((li) => {
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.href = li.href;
        aElement.textContent = li.text;
        liElement.appendChild(aElement);
        ul.appendChild(liElement);
      });
      nav.appendChild(ul);
      header.appendChild(nav);

      // crear un elemento footer y p
      const footer = document.querySelector("footer");
      const p = document.createElement("p");
      // añadir texto al p
      p.textContent = "© 2024 Ayoub Bouazi";
      footer.appendChild(p);