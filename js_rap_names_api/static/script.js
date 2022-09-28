const button = document.querySelector("button");

button.addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(`/api/${rapperName}`);
    const data = await response.json();

    document.querySelector("span").innerText = data.birthName;
  } catch (error) {
    console.log(error);
  }
}
