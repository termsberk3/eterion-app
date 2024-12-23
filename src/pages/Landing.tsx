import Cart from "../components/Cart"
import Filters from "../components/Filters"
import Header from "../components/Header"
import Products from "../components/Products"



const Landing = () => {
    return (
        <>
            <Header/>
            <div className="flex justify-start">
                <div className="w-[15%] p-4 ml-7">
                    <Filters />
                </div>
                <div className="w-[70%] p-4 ml-5">
                    <Products />
                </div>
                <div className="w-[15%] p-4">
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default Landing