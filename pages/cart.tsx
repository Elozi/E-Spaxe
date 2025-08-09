// pages/cart.tsx
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { UI_TEXT } from '../constants';
import { Product } from '../interfaces';

const CartPage: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const [agreeToTerms] = useState(false); // Placeholder, not used yet

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

  const freeShippingThreshold = 1000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const isEligibleForFreeShipping = cartTotal >= freeShippingThreshold;

  return (
    <>
      <Head>
        <title>{UI_TEXT.CART} | {UI_TEXT.BRAND_NAME}</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{UI_TEXT.CART}</h1>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">
                {UI_TEXT.HOME}
              </Link>
              <span>•</span>
              <span>{UI_TEXT.CART}</span>
            </div>
          </div>
          {cartItems.length === 0 ? (
            <div className="mx-auto max-w-md text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-gray-300" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                {UI_TEXT.NO_PRODUCTS}
              </h2>
              <p className="mt-2 text-gray-600">
                {UI_TEXT.WELCOME_MESSAGE.split('.')[0]} added any items to your cart yet.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4" />
                {UI_TEXT.CONTINUE_SHOPPING}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-white shadow-sm">
                  <div className="grid grid-cols-12 gap-4 border-b border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                    <div className="col-span-1"></div>
                    <div className="col-span-5">{UI_TEXT.PRODUCT}</div>
                    <div className="col-span-2 text-center">{UI_TEXT.PRICE}</div>
                    <div className="col-span-2 text-center">{UI_TEXT.QTY}</div>
                    <div className="col-span-2 text-center">{UI_TEXT.TOTAL}</div>
                  </div>
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="grid grid-cols-12 gap-4 border-b border-gray-200 px-6 py-6 last:border-b-0"
                    >
                      <div className="col-span-1 flex justify-center">
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="col-span-5 flex items-center gap-4">
                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-center">
                        <span className="font-medium">${item.product.price.toFixed(2)}</span>
                      </div>
                      <div className="col-span-2 flex items-center justify-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityUpdate(item.product.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityUpdate(item.product.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center justify-center">
                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 text-sm text-gray-600">
                    {UI_TEXT.ITEMS} ({cartItems.length})
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{UI_TEXT.TOTAL}:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{UI_TEXT.SHIPPING}:</span>
                      <span className="text-orange-600">
                        {UI_TEXT.SHIPPING_CALCULATED_AT_CHECKOUT}
                      </span>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-4">
                      <div className="mb-2 text-sm font-medium text-green-600">
                        {UI_TEXT.SPEND} ${remainingForFreeShipping.toFixed(2)} {UI_TEXT.FOR} {UI_TEXT.FREE_SHIPPING}
                      </div>
                      <div className="relative h-2 rounded-full bg-gray-200">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full bg-green-500 transition-all duration-300"
                          style={{ width: `${Math.min(100, (cartTotal / freeShippingThreshold) * 100)}%` }}
                        />
                      </div>
                      <div className="mt-2 flex justify-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-medium text-white">
                          ${cartTotal.toFixed(0)}
                        </div>
                      </div>
                      {isEligibleForFreeShipping && (
                        <div className="mt-2 text-center text-sm font-medium text-green-600">
                          {UI_TEXT.FREE_SHIPPING_ELIGIBLE}
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <Link
                        href="/checkout"
                        className="block w-full rounded-lg border-2 border-gray-300 bg-white py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {UI_TEXT.PROCEED_TO_CHECKOUT}
                      </Link>
                      <button
                        onClick={() => window.history.back()}
                        className="w-full rounded-lg bg-black py-3 text-center text-sm font-medium text-white hover:bg-gray-800"
                      >
                        {UI_TEXT.CONTINUE_SHOPPING}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;