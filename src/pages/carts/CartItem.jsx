import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/features/carts/cartSlice';

const CartItem = ({product}) => {

    const { id, name, price, image, category, quantity } = product || {};
    const dispatch = useDispatch();

    // increase button function
    const handleIncreaseQuantity = ( ) => {
        dispatch(increaseQuantity(id));
    }


    // Function to handle removing the item from the cart
    const handleDecreaseQuantity = () => {
        if( quantity > 1) {
            dispatch(decreaseQuantity(id));
        } else {
            handleRemoveFromCart();
        }
    }

    // remove from cart
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    }

    return (
        <div>
            <div className="rounded-lg">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    {/* Product Image */}
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-28 rounded-lg sm:w-40 object-cover"
                    />

                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        {/* Product Details */}
                        <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">{name}</h2>
                            <p className="mt-1 text-sm text-gray-700">Price: ${price}</p>
                            <p className="mt-1 text-sm text-gray-700">Category: {category}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                                {/* Decrease Quantity Button */}
                                <span
                                    className="cursor-pointer rounded-l bg-gray-100 text-black text-xl py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </span>

                                {/* Quantity Display */}
                                <input
                                    className="h-8 w-8 bg-white text-black text-xl text-center outline-none"
                                    type="number"
                                    value={quantity}
                                    readOnly
                                />

                                {/* Increase Quantity Button */}
                                <span
                                    className="cursor-pointer rounded-r text-black text-xl bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </span>
                            </div>

                            {/* Price and Remove Button */}
                            <div className="flex items-center space-x-4">
                                <p className="text-sm text-gray-700">${(price * quantity).toFixed(2)}</p>
                                <button
                                    className="lws-removeFromCart text-red-500 cursor-pointer"
                                    onClick={handleRemoveFromCart}
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItem