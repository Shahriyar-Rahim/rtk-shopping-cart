import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";

const AddPro = () => {

    // Using react-hook-form for form handling
    // You can install it using npm install react-hook-form
        const { register, handleSubmit, watch, formState: { errors } } = useForm();

        const dispatch = useDispatch();
        const onSubmit = data => {
            dispatch(addProduct(data))
        }


        return (
            <div className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-xl capitalize font-semibold mb-4 text-black'>Add new product</h2>

                <form 
                onSubmit={handleSubmit(onSubmit)}
                className=' space-y-4'>
                    <div>
                        {/* name */}
                        <label className=' tabs-sm font-medium block text-gray-600'>Product Name:</label>
                        <input
                        {...register("name", { required: true })} 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='Enter Product Name' className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ' />
                    </div>

                    <div>
                        {/* category */}
                        <label className=' tabs-sm font-medium block text-gray-600'>Category</label>
                        <select
                         className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 '
                            
                         id='category'
                         {...register("category", { required: true })}   
                        name="category">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home-appliances">Home Appliances</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                            <option value="sports">Sports</option>
                            <option value="beauty">Beauty</option>
                            <option value="automotive">Automotive</option>
                            <option value="health">Health</option>
                            <option value="bags">Grocery</option>
                            <option value="shirt">Furniture</option>
                            <option value="shoes">Shoes</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                    <div>
                        {/* image */}
                        <label className=' tabs-sm font-medium block text-gray-600'>Image URL:</label>
                        <input 
                        {...register("image", { required: true })}
                        type="text" name="image" id="image" placeholder='http://' className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ' />
                    </div>

                    <div>
                        {/* description */}
                        <label className=' tabs-sm font-medium block text-gray-600'>Description:</label>
                        <textarea
                        {...register("description", { required: true })}
                        name="description" id="description" rows="4" placeholder='Enter Product Description' className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 overflow-y-scroll '></textarea>
                    </div>

                    {/* price and date */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            {/* image */}
                            <label className=' tabs-sm font-medium block text-gray-600'>Price:</label>
                            <input 
                            {...register("price", { required: true })}
                            type="number" name="price" id="price" placeholder='Enter Your Price' className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ' />
                        </div>
                        <div>
                            {/* image */}
                            <label className=' tabs-sm font-medium block text-gray-600'>Upload Date:</label>
                            <input 
                            {...register("date", { required: true })}
                            type="date" name="date" id="date" className=' w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 ring-indigo-500 ' />
                        </div>
                    </div>

                    {/* button */}
                    <button type="submit" className=' cursor-pointer w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition duration-300'>Add Product</button>
                </form>
            </div>
        )
    }

    export default AddPro;