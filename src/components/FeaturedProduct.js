// import React, { useState } from 'react';
// import './FeaturedProduct.css';
// import product from '../images/product.webp';

// const FeaturedProduct = () => {
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedAccessories, setSelectedAccessories] = useState([]);

//   const sizes = ['S', 'M', 'L', 'XL'];
//   const colors = ['Red', 'Blue', 'Green', 'Yellow'];
//   const accessories = ['Case', 'Charger', 'Screen Protector'];

//   const handleSizeChange = (event) => {
//     setSelectedSize(event.target.value);
//   };

//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   const handleAccessoryChange = (event) => {
//     const accessory = event.target.value;
//     if (selectedAccessories.includes(accessory)) {
//       setSelectedAccessories(selectedAccessories.filter(a => a !== accessory));
//     } else {
//       setSelectedAccessories([...selectedAccessories, accessory]);
//     }
//   };

//   return (
//     <div className="product">
//       <div className="product-image">
//         <img src={product} alt="Product Image" />
//       </div>
//       <div className="product-details">
//         <h1>Product Name</h1>
//         <div className="product-size">
//           <h2>Select Size:</h2>
//           {sizes.map(size => (
//             <label key={size}>
//               <input type="radio" name="size" value={size} checked={selectedSize === size} onChange={handleSizeChange} />
//               {size}
//             </label>
//           ))}
//         </div>
//         <div className="product-color">
//           <h2>Select Color:</h2>
//           {colors.map(color => (
//             <label key={color}>
//               <input type="radio" name="color" value={color} checked={selectedColor === color} onChange={handleColorChange} />
//               {color}
//             </label>
//           ))}
//         </div>
//         <div className="product-accessories">
//           <h2>Select Accessories:</h2>
//           {accessories.map(accessory => (
//             <label key={accessory}>
//               <input type="checkbox" name="accessory" value={accessory} checked={selectedAccessories.includes(accessory)} onChange={handleAccessoryChange} />
//               {accessory}
//             </label>
//           ))}
//         </div>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;
