const studentEmail = "ravils465@gmail.com";
let length;

fetch(
  `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=`
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      fetch(
        `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=/${element.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    });
  })
  .catch((error) => console.error("Ошибка:", error));
