// Function to render your items
// We "call" this function once our fetch method is completed below
// (collection) here is a placeholder (usually called a "parameter") that is the json
const renderItems = (collection) => {
	// Step 1: Decide where we will be inserting HTML into the page
	// We'll store `ul` where the items will be inserted in a variable called collectionList
	const collectionList = document.getElementById('collection');
	
	// Step 2: Iterate through the json/payload we get from the fetch method
	// forEach loops through each item/object in the collection/array
	collection.projects.forEach(item => {
		
		// Option 2) Use “template literals” to create a bundnle of HTML all at once
			// notice the tick marks `` wrapped around everything, with ${variable} used for dynamic content = written in HTML 
			const itemDetails =
				`
					<li  class="list-item" data-year="${item.year}">
                    <button class="title">${item.title}</button>
						<div class="list-item-content">
                            <p class="date">${item.date} ${item.year}</p>
                            <img src="${item.posterImage}" class="list-item-image">
                            <p class="caption">Project Description: ${item.description}</p>
						</div>
                        
					</li>
				`;
			
		// Step 4: Insert our new HTML (stored in itemDetails) into the page (before the end the collectionList element )
		collectionList.insertAdjacentHTML('beforeend', itemDetails); 

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

        const buttons = document.querySelectorAll('.title');
    buttons.forEach(button => {
        const toggleContent = () => {
            const content = button.nextElementSibling;
            if (content && content.classList.contains('list-item-content')) {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            }
        };

        button.addEventListener('click', toggleContent);
        button.addEventListener('mouseover', toggleContent);
    });
    
	})

    // add events on click 

// This is where we tie everything together
// Fetch gets your JSON file…

}

fetch('data.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection)
})