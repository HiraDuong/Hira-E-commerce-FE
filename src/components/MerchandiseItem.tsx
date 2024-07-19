import { Merchandise } from "../types/types";

const MerchandiseItem = ({ merchandise }: { merchandise: Merchandise }) => {
    return (
        <div className="flex flex-col items-center border-2 border-solid border-gray-500 rounded-lg p-2">
            <img className="size-full" src={merchandise.merchandise_img} alt={merchandise.merchandise_name} />
            <h3 className="w-full text-left">{merchandise.merchandise_name}</h3>
            <p className="w-full text-left">{merchandise.merchandise_description}</p>
            <p className="w-full text-left">Price: ${merchandise.merchandise_price}</p>
            <button className="h-16 w-32 border-2 border-dotted border-red-700 rounded-lg">Add to Cart</button>
        </div>
    )
}

export default MerchandiseItem;