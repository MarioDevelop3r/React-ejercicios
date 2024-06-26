import { useState } from "react"

const initialCart = [
    { id: 1, title: "Product 1", description: "Description 1" },
    { id: 2, title: "Product 2", description: "Description 2" },
    { id: 3, title: "Product 3", description: "Description 3" },

]

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId);
        setCart(changedCart);

    }
    const AddProduct = (newProduct) => {
        newProduct.id = Date.now();
    
        const changedCart = [
            newProduct,
            ...cart,];

        setCart(changedCart);

    }
    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => product.id === editProduct.id ?
            editProduct : product
        );
        setCart(changedCart);
    }

    return (
        <div>
            <button onClick={() => AddProduct({title:"nuevo titulo", description: "nueva descripcion"})}>
                Add
            </button>

            {cart.map(product => (
                <div key={product.id}>
                    <h1>{product.id} {product.title}</h1>
                    <p>{product.description}</p>
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
            <button onClick={() => updateProduct({ id: product.id ,title:"Edit Titulo",description:"Edit descipcion"})}>
                Update
            </button>

                </div>
            ))}
            <pre>{ JSON.stringify(cart, null, 2) }
            </pre>

        </div>
    )
}

export default ShoppingCart
