# D3 Tree Map

This project visualizes video game sales data using a tree map. The interactive visualization allows users to explore video game sales by category and individual titles, providing a clear hierarchical representation.

## Features

- **Tree Map Visualization**: Displays video game sales data in a hierarchical, rectangular tree map.
- **Interactive Tooltips**: Hover over any rectangle to see details about the specific game or category.
- **Dynamic Color Coding**: Different categories are visually distinguished with unique colors.
- **Legend**: A legend explains the color mapping of categories.

## Technologies Used

- **D3.js**: For creating the tree map, handling hierarchical data, and adding interactive features.
- **JavaScript (ES6)**: For data handling and logic implementation.
- **HTML5**: For rendering the tree map within the browser.
- **CSS**: For styling the visualization and legend.

## Getting Started

### Prerequisites

- **Web Browser**: Any modern browser (e.g., Chrome, Firefox, Edge, Safari).
- **Text Editor/IDE**: Optional, for editing the project files.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/D3-Tree-Map.git
   ```
2. Navigate to the project directory: 
   ```bash 
   cd d3-tree-map
   ```
3. Open the `index.html` file in your browser to view the tree map.
4. Alternatively, you can access the live site [here](https://abelgideon.github.io/D3-Tree-Map/).

## Usage

1. Hover over rectangles to view details about the game or category, such as the name and sales value.
2. Refer to the legend to identify the category corresponding to each color.

## Customizing the Tree Map

You can modify the following parameters in `script.js` to customize the visualization:

- **Width and Height**: Adjust the `width` and `height` variables to resize the tree map.
- **Data Source**: Replace the current data URL with your own JSON file to visualize other hierarchical data.
- **Color Scheme**: Modify the `d3.schemeCategory10` or use a custom color scale for different color themes.

## Project Highlights

### Interactive Visualization

- Each rectangle in the tree map represents a video game title, sized proportionally to its sales value.

### Dynamic Hierarchical Data

- The project uses D3's hierarchy and treemap layout to parse and render hierarchical data dynamically.

### Color-Coded Categories

- Categories are visually distinguished using a unique color for each category, making it easy to interpret.

### Legend Integration

- A dynamically generated legend provides an overview of the color mapping for the categories.

## File Structure

- `index.html`: The main HTML file that includes the tree map visualization and legend.
- `script.js`: Contains the JavaScript code for creating the tree map and adding interactivity.
- `styles.css`: (Optional) Add custom styles to enhance the tree map and legend appearance.

## Data Source

The data for this project is sourced from freeCodeCamp:

- **Tree Map Data**: [Video Game Sales Data](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json)

## Contributing

Contributions are welcome! Fork the repository and submit a Pull Request with your improvements.