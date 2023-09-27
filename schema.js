const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList, GraphQLSchema } = require('graphql');

const menuItems = [
    // Appetizers
    { id: '1', name: 'Iceberg Wedge Salad with House Cured Bacon', description: 'tomato salsa gorgonzola', price: 7.50, category: 'Appetizers' },
    { id: '2', name: 'Sautéed Shredded Brussels Sprouts', description: 'bacon hazelnuts gorgonzola', price: 6.95, category: 'Appetizers' },
    { id: '3', name: 'Kale Salad', description: 'parmesan crisp corn radish garlic-lemon vinaigrette', price: 7.50, category: 'Appetizers' },
    { id: '4', name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto', description: 'grilled tomato salsa crostini', price: 6.95, category: 'Appetizers' },
    { id: '5', name: 'Chicken and Cabbage Eggrolls', description: 'hot & sour dipping sauce', price: 6.95, category: 'Appetizers' },
  
    // Entrees
    { id: '6', name: 'Farfalle Pasta with Braised Pork in Tomato Cream', description: 'capers butternut squash kale', price: 12.95, category: 'Entrees' },
    { id: '7', name: 'Stout Braised Bratwurst', description: 'horseradish mashed potatoes roasted root veggies grilled onion', price: 13.95, category: 'Entrees' },
    { id: '8', name: 'Salmon & Crispy Tofu in Yellow Curry Sauce', description: 'vegetable sauté golden raisin chutney', price: 15.95, category: 'Entrees' },
    { id: '9', name: 'Sesame Shrimp', description: 'udon noodles ramen broth shiitake mushrooms bean sprouts scallions', price: 13.95, category: 'Entrees' },

    // Sandwiches
  { id: '10', name: 'Turkey Club Sandwich', description: 'Bacon, lettuce, tomato, and mayo on toasted white bread', price: 9.95, category: 'SANDWICHES' },
  { id: '11', name: 'Grilled Veggie Panini', description: 'Zucchini, red pepper, red onion, tomato, pesto, and mozzarella on ciabatta', price: 8.95, category: 'SANDWICHES' },
  { id: '12', name: 'BLT Sandwich', description: 'Bacon, lettuce, tomato, and mayo on toasted whole wheat bread', price: 7.95, category: 'SANDWICHES' },

   // Sandwiches - COLD
   { id: '13', name: 'Turkey & Avocado', description: 'with tomato', price: 7.95, category: 'COLD' },
   { id: '14', name: 'Pub Club', description: 'turkey, bacon, lettuce, tomato', price: 9.25, category: 'COLD' },
   { id: '15', name: 'Rare Roast Beef & Swiss', description: 'sweet-hot mustard, lettuce, red onion', price: 9.25, category: 'COLD' },
   { id: '16', name: 'Veggie', description: 'pepper jack, avocado, sprout, tomato', price: 7.95, category: 'COLD' },

   // Sandwiches - HOT
  { id: '17', name: 'Southwest Chicken Breast', description: 'Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese', price: 9.50, category: 'HOT' },
  { id: '18', name: 'Portobello Fresh Mozzarella', description: 'Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli', price: 9.50, category: 'HOT' },
  { id: '19', name: 'Chipotle BBQ Pork Sandwich', description: 'with Pickled Jalapeño Slaw', price: 9.50, category: 'HOT' },
  { id: '20', name: 'Bacon Burger*', description: 'Swiss, Lettuce, Tomato', price: 9.25, category: 'HOT' },
  { id: '21', name: 'Mexi Burger*', description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole', price: 9.25, category: 'HOT' },
  { id: '22', name: 'Herb Marinated Top Sirloin*', description: 'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia', price: 10.95, category: 'HOT' },
  { id: '23', name: 'Roast Beef with Ancho Au Jus', description: 'Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette', price: 9.75, category: 'HOT' },
  { id: '24', name: 'Blackened Catfish', description: 'Creole Peppers & Onions, Fresh Herb Aioli, Served on house-made Sourdough', price: 9.75, category: 'HOT' },

  // Soup & Salad Combos
  { id: '25', name: 'French Onion Soup', description: '', price: 4.95, category: 'SOUP & SALAD COMBOS' },
  { id: '26', name: 'Soup of the Day', description: '', price: 4.95, category: 'SOUP & SALAD COMBOS' },
  { id: '27', name: 'French Onion Soup Combo', description: 'with small green salad, fresh fruit, or house pasta', price: 7.25, category: 'SOUP & SALAD COMBOS' },
  { id: '28', name: 'Soup of the Day Combo', description: 'with small green salad, fresh fruit, or house pasta', price: 7.25, category: 'SOUP & SALAD COMBOS' },
  { id: '29', name: 'French Onion Soup Combo', description: 'with half pasta of the day', price: 8.75, category: 'SOUP & SALAD COMBOS' },
  { id: '30', name: 'Soup of the Day Combo', description: 'with half pasta of the day', price: 8.75, category: 'SOUP & SALAD COMBOS' },

  // Fajitas
  { id: '31', name: 'Chicken Fajitas', description: 'Onions, Poblano and Bell Peppers, Guacamole, Two Salsas', price: 10.95, category: 'FAJITAS' },
  { id: '32', name: 'Sirloin Steak Fajitas', description: 'Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas', price: 10.95, category: 'FAJITAS' },

  // Tacos
  { id: '33', name: 'Beer Battered Fish Tacos', description: 'with Jalapeño Remoulade, Roasted Salsa, Cabbage', price: 9.95, category: 'TACOS' },
  { id: '34', name: 'Carne Asada Tacos', description: 'marinated sirloin with Guacamole, Tomatillo Salsa', price: 9.95, category: 'TACOS' },
  { id: '35', name: 'Citrus Marinated Chicken Tacos', description: 'with Guacamole, Tomatillo Salsa', price: 9.95, category: 'TACOS' },
  { id: '36', name: 'Grilled Veggie Tacos', description: 'with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa', price: 9.95, category: 'TACOS' },

   // Enchiladas
   { id: '37', name: 'Beef Enchiladas', description: 'with Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, category: 'ENCHILADAS' },
   { id: '38', name: 'Chicken Enchiladas', description: 'with Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, category: 'ENCHILADAS' },
   { id: '39', name: 'Cheese Enchiladas', description: 'with Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, category: 'ENCHILADAS' },
   { id: '40', name: 'Veggie Enchiladas', description: 'with Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, category: 'ENCHILADAS' },
   { id: '41', name: 'Uno Enchiladas', description: '', price: 8.50, category: 'ENCHILADAS' },
   { id: '42', name: 'Dos Enchiladas', description: '', price: 9.95, category: 'ENCHILADAS' },
   { id: '43', name: 'Tres Enchiladas', description: '', price: 11.50, category: 'ENCHILADAS' },
   { id: '44', name: 'Chili Relleno', description: 'Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce', price: 9.95, category: 'ENCHILADAS' },
   { id: '45', name: 'Pepita Crusted Salmon', description: 'with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce', price: 10.95, category: 'ENCHILADAS' },

   // Quiche
  { id: '46', name: 'Bacon, Swiss, Mushroom, Zucchini Quiche', description: 'Choice of Fresh Fruit or Green Salad', price: 8.95, category: 'QUICHE' },

  // Green Salads
  { id: '47', name: 'Grilled Red Trout Salad', description: 'Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette', price: 10.95, category: 'GREEN SALADS' },
  { id: '48', name: 'Smoked Turkey Salad', description: 'Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado', price: 9.95, category: 'GREEN SALADS' },
  { id: '49', name: 'Asian Grilled Chicken Salad', description: 'Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing', price: 10.50, category: 'GREEN SALADS' },
  { id: '50', name: 'Southwest Grilled Chicken Salad', description: 'Tomato, Guacamole, Pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette', price: 10.50, category: 'GREEN SALADS' },
  { id: '51', name: 'Mediterranean Salad', description: 'Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette', price: 9.95, category: 'GREEN SALADS' },
  { id: '52', name: 'Grilled Salmon Salad', description: 'Artichoke Tapenade, Shredded Kale, Corn, Radish, Parmesan Crisps', price: 11.50, category: 'GREEN SALADS' },

  
  ];
  
  // Define a MenuItemType
  const MenuItemType = new GraphQLObjectType({
    name: 'MenuItem',
    fields: () => ({
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLFloat },
      category: { type: GraphQLString },
    }),
  });
  
  // Root Query
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // Query for all menu items
      allMenuItems: {
        type: new GraphQLList(MenuItemType),
        resolve(parent, args) {
          return menuItems;
        },
      },
  
      // Query for menu items by category (Appetizers or Entrees)
      menuItemsByCategory: {
        type: new GraphQLList(MenuItemType),
        args: { category: { type: GraphQLString } },
        resolve(parent, args) {
          return menuItems.filter((item) => item.category === args.category);
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({
    query: RootQuery,
  });