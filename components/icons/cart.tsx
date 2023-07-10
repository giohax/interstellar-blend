import ShoppingBagIcon from './shopping-bag';

export default function CartIcon() {
    return (
        <div className="relative">
            <ShoppingBagIcon
                className={'h-6 transition-all ease-in-out hover:scale-110 hover:text-gray-300'}
            />
        </div>
    )
}