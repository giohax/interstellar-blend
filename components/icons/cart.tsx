import ShoppingBagIcon from './shopping-bag';

export default function CartIcon() {
    let quantity = 5;
    return (
        <div className="relative">
            <ShoppingBagIcon
                className={'h-6 transition-all ease-in-out hover:scale-110 hover:text-gray-300'}
            />
            {quantity ? (
                <div className="absolute bottom-0 left-0 -mb-3 -ml-3 flex h-5 w-5 items-center justify-center rounded-full text-xs border-2 border-black bg-red-500 text-white">
                    {quantity}
                </div>
            ) : null}
        </div>
    )
}