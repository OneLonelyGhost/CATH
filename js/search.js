async function searchData() {
  const searchTerm = document.getElementById('searchTerm').value;
  const response = await fetch(`http://dedebugger.site//search.php?term=${searchTerm}`);
  const data = await response.json();

  let results = '';
  data.forEach(item => {
    results += `<p>${item.name} - ${item.description}</p>`;
  });

  document.getElementById('results').innerHTML = results;
}
