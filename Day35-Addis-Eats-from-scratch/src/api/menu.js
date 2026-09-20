
export async function getDishes() {
  
  await new Promise((resolve) => setTimeout(resolve, 800));

 
//   throw new Error("Failed to connect to the menu server.");

  return [
    { 
      id: '1', 
      name: 'Doro Wat', 
      category: 'Wats', 
      price: 350, 
      description: 'Spicy chicken stew simmered in rich berbere sauce with a hard-boiled egg.' 
    },
    { 
      id: '2', 
      name: 'Injera with Shiro', 
      category: 'Vegetarian', 
      price: 200, 
      description: 'Smooth chickpea puree cooked with onions, garlic, and traditional spices.' 
    },
    { 
      id: '3', 
      name: 'Beef Tibs', 
      category: 'Tibs', 
      price: 400, 
      description: 'Juicy sautéed cubed beef cooked with onions, garlic, rosemary, and jalapeños.' 
    },
    { 
      id: '4', 
      name: 'Kitfo', 
      category: 'Special', 
      price: 450, 
      description: 'Minced lean beef warmed in spiced clarified butter and fiery mitmita.' 
    },
    { 
      id: '5', 
      name: 'Beyaynetu', 
      category: 'Vegetarian', 
      price: 250, 
      description: 'A colorful assortment of vegetarian stews served over a bed of soft injera.' 
    },
    { 
      id: '6', 
      name: 'Injera Firfir', 
      category: 'Breakfast', 
      price: 180, 
      description: 'Torn pieces of injera soaked in a flavorful, spicy berbere and tomato sauce.' 
    },
    { 
      id: '7', 
      name: 'Tibs Firfir', 
      category: 'Tibs', 
      price: 480, 
      description: 'A rich combination of shredded injera mixed with sizzling spicy beef tibs.' 
    },
    { 
      id: '8', 
      name: 'Chechebsa', 
      category: 'Breakfast', 
      price: 220, 
      description: 'Shredded flatbread pieces tossed in spiced butter and berbere sauce.' 
    },
    { 
      id: '9', 
      name: 'Asa Goulash', 
      category: 'Fish', 
      price: 500, 
      description: 'Crispy fried fish chunks simmered in a rich, spicy tomato-based sauce.' 
    },
    { 
      id: '10', 
      name: 'Dulet', 
      category: 'Special', 
      price: 320, 
      description: 'Finely chopped tripe, liver, and lean beef cooked with onions, garlic, and herbs.' 
    }
  ];
}
