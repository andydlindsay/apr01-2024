{/* 
<article class="food-item">
  <header>
    <h2>Name: Tasty Food</h2>
    <h3>Id: 1234</h3>
  </header>

  <p>Soooo tasty</p>

  <footer>
    <h3>Price: $1.99</h3>
    <h3>Calories: 450</h3>
  </footer>
</article> 
*/}

// $('p'); // find these elements
// $('<p>'); // create this element

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.text('hello'); // <h2>hello</h2>
// $h2.addClass('greeting'); // <h2 class="greeting">hello</h2>

$(() => {
  const $container = $('#food-item-container');
  const $form = $('#new-food-item');

  

  const createFoodItem = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItem.name}</h2>
          <h3>Id: ${foodItem.id}</h3>
        </header>

        <p>${foodItem.tagline}</p>

        <footer>
          <h3>Price: $${foodItem.price}</h3>
          <h3>Calories: ${foodItem.calories}</h3>
        </footer>
      </article> 
    `);

    return $foodItem;
  };

  const renderFoodItems = (foodItems) => {
    $container.empty();
    for (const foodItem of foodItems) {
      const $foodItem = createFoodItem(foodItem);
      $container.prepend($foodItem);
    }
  };

  const loadFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items',
      success: (foodItems) => {
        console.log(foodItems);
        
        renderFoodItems(foodItems);
      },
      error: (err) => {
        console.log(err);
      }
    });
  };

  loadFoodItems();

  $form.on('submit', (event) => {
    event.preventDefault();
    
    // grab the data from the form
    const data = $form.serialize();

    // POST the data to the server
    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: data,
      success: () => {
        console.log('food item POST was a success');

        // GET all food-items
        loadFoodItems();
      },
      error: (err) => {
        console.log(err);
      }
    });

   
  });
});
