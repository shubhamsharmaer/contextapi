# Context API Notes

## What is Context API?
- A React feature to share state across components without **prop drilling**.
- Used for global state management.

---

## Key Concepts
1. **Context Creation**:
   - Use `createContext` to create a context.
   - Example: `export const MyContext = createContext(null);`

2. **Provider Component**:
   - Wraps child components and provides state.
   - Example:
     ```javascript
     const MyProvider = ({ children }) => {
         const [state, setState] = useState(initialValue);
         return (
             <MyContext.Provider value={{ state, setState }}>
                 {children}
             </MyContext.Provider>
         );
     };
     ```

3. **useContext Hook**:
   - Access context values directly inside components.
   - Example:
     ```javascript
     const { state, setState } = useContext(MyContext);
     ```

---

## Steps to Use Context API
1. **Create Context**:
   ```javascript
   export const MyContext = createContext(null);
   ```
2. **Create Provider Component**:
   ```javascript
    const MyProvider = (props) => {
        const [state, setState] = useState(initialValue);
        return (
            <MyContext.Provider value={{ state, setState }}>
                {props.children}
            </MyContext.Provider>
        );
    };
   ```
3. **Wrap Your `App/Index` with the Provider**:
   ```javascript
       import { MyProvider } from './MyContext';
            const App = () => (
                <MyProvider>
                    <MyComponent />
                </MyProvider>
            );
        };
   ```
4. **Use Context in Child Components**:
    ```javascript
        import { useContext } from 'react';
        import { MyContext } from './MyContext';
            const MyComponent = () => {
                const { state, setState } = useContext(MyContext);
                return <div>{state}</div>;
            };
    ```