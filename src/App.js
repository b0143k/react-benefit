import './App.css';
import {FirstCard} from './components/Card';

function App() {
  const productDetails= [
    {
      productId: 1,
      productPic: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=400&h=400q=80",
      productName: "Casual Shoe",
      productBrand: "Nike",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia..",
      productPrice:"10$", 
      cart: "Congratulations, You have added this Item 1 in the cart , please proceed to pay !!! "
    },
    {
      productId: 2,
      productPic: "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=croph=400&w=400&q=80",
      productName: "Sports Shoe",
      productBrand: "Adidas",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      productPrice:"8$", 
      cart: "Congratulations, You have added this Item 1 in the cart , please proceed to pay !!! "
    },
    {
      productId: 3,
      productPic: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      productName: "Running Shoe",
      productBrand: "Puma",
      productDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      productPrice:"12$", 
      cart: "Congratulations, You have added this Item 1 in the cart , please proceed to pay !!! "
    },
   
  ]
  return (
    <div className="App">
      {
        productDetails.map((product)=>(
          <FirstCard
          productId={product.productId}
          productPic={product.productPic}
          productName={product.productName}
          productBrand={product.productBrand}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          cart={product.cart}
          />
        ))
      }
      
    </div>
  );
}

export default App;