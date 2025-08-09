// components/common/CartModal.tsx
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { RootState } from '../../redux/store';
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../interfaces';
import { UI_TEXT } from '../../constants';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: FC<CartModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const handleQuantityUpdate = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const freeShippingThreshold = 939;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercentage = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">{UI_TEXT.CART}</h2>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-400 hover:text-gray-600"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
                <p className="text-gray-500">{UI_TEXT.NO_PRODUCTS}</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  {UI_TEXT.ITEMS} ({cartItems.length})
                </div>
                {cartItems.map((item) => (
                  <div key={item.product.id} className="mb-4 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-medium">${item.product.price.toFixed(2)}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityUpdate(item.product.id, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityUpdate(item.product.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                            <span className="ml-2 text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mb-6 rounded-lg border border-gray-200 p-4">
                  <div className="mb-2 text-sm">
                    {UI_TEXT.SPEND} <span className="font-medium">${remainingForFreeShipping.toFixed(2)}</span> {UI_TEXT.FOR} <span className="font-medium text-green-600">Free Shipping</span>
                  </div>
                  <div className="relative h-2 rounded-full bg-gray-200">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-green-500 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-medium text-white">
                      ${cartTotal.toFixed(0)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4">
              <div className="mb-4 flex justify-between text-lg font-semibold">
                <span>{UI_TEXT.TOTAL}:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-50"
                  aria-label="View cart"
                >
                  {UI_TEXT.VIEW_CART}
                </Link>
                <button
                  onClick={onClose}
                  className="w-full rounded-lg bg-gray-300 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-400"
                >
                  {UI_TEXT.CONTINUE_SHOPPING}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;