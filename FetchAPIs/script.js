let newPost = {
  userId: 1,
  id: 101,
  title: "foo",
  body: "bar",
};

async function fetchApi() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  let options = {
    method: "GET",
  };

  let response = await fetch(url, options);
  let data = await response.json();
  console.log(response);
  console.log(data);
}

fetchApi();
