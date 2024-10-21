const outerContainer = document.getElementById('outerContainer');
const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');
const gridWidthTotal = 800;

// Function to create the grid
function createGrid(gridSize) {
    // Clear the outer container
    outerContainer.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const container = document.createElement('div');
        container.className = 'container';

        for (let j = 0; j < gridSize; j++) {
            const childDiv = document.createElement('div');
            childDiv.style.width = `${gridWidthTotal / gridSize}px`; // Set width
            childDiv.style.height = `${gridWidthTotal / gridSize}px`; // Set height

            childDiv.addEventListener("mouseenter", () => {
                childDiv.style.backgroundColor = 'black';
            });

            container.appendChild(childDiv);
        }
        outerContainer.appendChild(container);
    }
}

// Initial grid creation
createGrid(rangeInput.value);

// Update the displayed value and recreate the grid when the input changes
rangeInput.addEventListener('input', () => {
    const gridSize = rangeInput.value; // Get the current value from the slider
    rangeValue.textContent = gridSize; // Update the displayed value
    createGrid(gridSize); // Create a new grid based on the current value
});

