"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useCart } from "@/storage/cartContext";
import { FormData, DeliveryMethod } from "@/interfaces/interfaces";
import Link from "next/link";

const deliveryOptions = [
  { value: "nova-poshta", label: "New Poshta" },
  { value: "ukrposhta", label: "Ukrposhta" },
  { value: "courier", label: "Courier" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState<FormData>({
    name: "",
    secondName: "",
    phone: "",
    email: "",
    delivery: "nova-poshta",
    city: "",
    address: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleDelivery(value: DeliveryMethod) {
    setForm({ ...form, delivery: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearCart();
    router.push("/checkout/confirmation");
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Checkout", href: "/checkout" }]} />
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400 text-lg mb-4">Cart empty</p>
          <Link href="/products" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-colors">
            Shop now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumbs items={[{ label: "Checkout", href: "/checkout" }]} />
      <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Mykola"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Surname</label>
                  <input
                    name="secondName"
                    value={form.secondName}
                    onChange={handleChange}
                    required
                    placeholder="Petrenko"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+380991234567"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="mykola@email.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Delivery</h2>
              <div className="flex gap-3 mb-4">
                {deliveryOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleDelivery(option.value as DeliveryMethod)}
                    className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                      form.delivery === option.value
                        ? "border-orange-400 bg-orange-50 text-orange-500"
                        : "border-gray-200 text-gray-600 hover:border-orange-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Kyiv"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    {form.delivery === "courier" ? "Address" : "Departmen"}
                  </label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder={form.delivery === "courier" ? "Chreschtschatyk street" : "Department №1"}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">By credit card</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Card number</label>
                  <input
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Card name</label>
                  <input
                    name="cardName"
                    value={form.cardName}
                    onChange={handleChange}
                    required
                    placeholder="MYKOLA PETRENKO"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Experation date</label>
                    <input
                      name="cardExpiry"
                      value={form.cardExpiry}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">CVV</label>
                    <input
                      name="cardCvv"
                      value={form.cardCvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      maxLength={3}
                      type="password"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-80 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Your orders</h2>

              <div className="flex flex-col gap-3 mb-4">
                {items.map((item) => (
                  <div key={item.good.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                      <Image
                        src={item.good.imageUrl}
                        alt={item.good.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 truncate">{item.good.title}</p>
                      <p className="text-xs text-gray-400">{item.quantity} ps.</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900 shrink-0">
                      {(item.good.price * item.quantity).toLocaleString("uk-UA")} ₴
                    </span>
                  </div>
                ))}
              </div>
              <hr className="border-gray-100 mb-4" />
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total:</span>
                <span className="text-xl font-bold text-gray-900">
                  {totalPrice.toLocaleString("uk-UA")} ₴
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}