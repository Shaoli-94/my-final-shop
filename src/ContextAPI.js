import { useState, useMemo, createContext } from "react";
import MOCK_DATA from './components/MOCK_DATA.json';

export const ContextAPI = createContext();

function ContextProvider(props) {

  const products= useMemo(()=>MOCK_DATA, [])

  const productColumns = [
    {
      name: "Image",
      cell: (row) => (
        <img height="50px" width="50px" alt={row.title} src={row.image} />
      )
    },
    {
      name: "Title",
      selector: "title"
    },
    {
      name: "Price",
      selector: "price"
    },
    {
        name: "Select",
        cell: (row) => (
            
                  
                  <button onClick={()=>addToCart(row)}>add to cart</button>
                 
              
          )
    }
    
];


    // const [products]=useState([
    //     {
    //       name: 'AA Battery',
    //       cost: '$2.99',
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhBffI02qyHMaMN2agKn_pWo0tza8i1wBjagPMpPGfGdEo94iSqW-F02_u0JPUxxXXKZclE4&usqp=CAc'
    //     },
    //     {
    //       name: 'Blanket',
    //       cost: '$19.99',
    //       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiRXz2r2E7Ph6PaNvjnBsaTi3i8Bq5oq98XR17w7SdV3Rgk_iFuiBQTATmQzYAPnuv1rSkf4&usqp=CAc'
    //     },
        
    //   ])

      const PAGE_PRODUCT='products';
      const PAGE_CART='cart';
  
      const [cart, setCart]=useState([]);
      const [screen,setScreen]=useState(PAGE_PRODUCT);

      const [page, setPage] = useState(1);
      const countPerPage = 5;
  
  
      const addToCart=(product)=>{
     
      setCart([...cart,{ ...product }]);
      };
  
      const removeFromCart=(productToBeRemoved)=>{
     
      setCart(
       cart.filter((product)=>product!==productToBeRemoved)
       );
      };

      const navigateTo=(nextScreen)=>{
        setScreen(nextScreen);
        };
  
    const value = { cart, addToCart, removeFromCart, screen, PAGE_PRODUCT, PAGE_CART, navigateTo, products, productColumns, page, setPage, countPerPage };
    return (
        <ContextAPI.Provider value={value}>
            {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProvider;