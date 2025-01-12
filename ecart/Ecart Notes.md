# Lev 2: Context API in E-Cart App

## Overview
In this project, the Context API is used to manage the cart's state (`itemList`) globally, enabling seamless addition and removal of items across different components.



## How Context API is Used

1. **Context Creation**:
   - The context is created using `createContext`.
   - File: `contexts/Cartcontext.jsx`
   - Code:
     ```javascript
     export const Cartcontext = createContext(null);
     ```

2. **Provider Component**:
   - The `CartProvider` wraps the application and provides the state (`itemList` and `setItemList`) to its children.
   - Code:
     ```javascript
     const [itemList, setItemList] = useState([]);
     return (
         <Cartcontext.Provider value={{ itemList, setItemList }}>
             {props.children}
         </Cartcontext.Provider>
     );
     ```

3. **Custom Hook for Context Access**:
   - A custom hook `useCart` is implemented for easier access to the context.
   - Code:
     ```javascript
     export const useCart = () => {
         return useContext(Cartcontext);
     };
     ```

4. **Provider Usage**:
   - The `CartProvider` wraps the application in the `main.jsx` file to make the context globally accessible.
   - Code:
     ```javascript
     <CartProvider>
         <App />
     </CartProvider>
     ```

5. **Accessing Context in Components**:
   - The `useCart` hook is used to access the context in `Item.jsx` and `Cart.jsx`.
   - Example in `Item.jsx`:
     ```javascript
     const cart = useCart();
     ```

6. **State Updates**:
   - The state is updated when items are added or removed from the cart.
   - Example for adding items in `Item.jsx`:
     ```javascript
     function handleAddToCart() {
         cart.setItemList([...cart.itemList, { name: props.name, price: props.price }]);
     }
     ```



## Good Practices in This Project

1. **Separation of Concerns**:
   - The context logic is isolated in `Cartcontext.jsx` to ensure modularity and reusability.

2. **Global State Management**:
   - Context API is used effectively to manage the cart state globally without prop drilling.

3. **Custom Hook**:
   - A custom hook (`useCart`) simplifies context consumption in components.

4. **Dynamic State Handling**:
   - The `setItemList` function ensures dynamic addition and removal of items.



## Bad Practices in This Project

1. **No Prop Validation**:
   - The `props` in `Item.jsx` are not validated, which can lead to runtime errors.

2. **No Error Handling for Context**:
   - The project lacks error handling to ensure `useCart` is not used outside the provider.

## Scope for Betterment

1. **Error Handling**:
   - Add error handling to ensure `useCart` is not accessed without a provider:
     ```javascript
     const useCart = () => {
         const context = useContext(Cartcontext);
         if (!context) {
             throw new Error('useCart must be used within a CartProvider');
         }
         return context;
     };
     ```

2. **Prop Validation**:
   - Use `PropTypes` to validate `props` in `Item.jsx`:
     ```javascript
     Item.propTypes = {
         name: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
     };
     ```

3. **Optimize Provider Value**:
   - Use `useMemo` to optimize the `value` object and prevent unnecessary re-renders:
     ```javascript
     const value = useMemo(() => ({ itemList, setItemList }), [itemList]);
     return <Cartcontext.Provider value={value}>{props.children}</Cartcontext.Provider>;
     ```

4. **Improved UI Design**:
   - Add styling for better alignment and spacing of cart items and buttons.

5. **Reusable Components**:
   - Refactor `Item` and `Cart` to make them more reusable and configurable.



## Final Thoughts
By following best practices and addressing the areas of betterment, You can make project more robust and maintainable.
