const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll(`li.item`);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoriesTitle = item.querySelector(`h2`).textContent;
  console.log(`Categories: ${categoriesTitle} `);
  const categoriesItemList = item.querySelectorAll(`ul > li`);
  console.log(`Elements: ${categoriesItemList.length}`);
});
