"use client";

import {useState} from "react";
import Image from "next/image";
import {AnimatedButton, AnimatedElement, AnimatedPage} from "@/components/common/AnimatedPage";
import {getCategories, getProductsByCategory} from "@/services/healthy-products";
import {Product, ProductCategory} from "@/types/healthy-products";

export default function CoinHealthy() {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const categories = getCategories();
    const filteredProducts = getProductsByCategory(selectedCategory);

    return (
        <AnimatedPage>
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-8 p-6">
                {/* Header */}
                <AnimatedElement delay={0.1}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl sm:text-4xl font-bold uppercase text-gray-800">
                                Healthy Corner
                            </h1>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Discover our healthy and nutritious products for your well-being
                            </p>
                        </div>
                    </div>
                </AnimatedElement>

                {/* Category Filter */}
                <AnimatedElement delay={0.2}>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <AnimatedButton
                                key={category.key}
                                onClick={() => setSelectedCategory(category.key as ProductCategory)}
                                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                                    selectedCategory === category.key
                                        ? 'bg-[#FFD600] text-black shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                                }`}
                            >
                                {category.label}
                            </AnimatedButton>
                        ))}
                    </div>
                </AnimatedElement>

                {/* Products Grid */}
                <AnimatedElement delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product, index) => (
                            <AnimatedElement key={product.id} delay={0.1 * (index + 1)}>
                                <div
                                    className="bg-white rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors shadow-lg border border-gray-100"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#FFD600] font-bold">{product.price}</span>
                                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">{product.calories} cal</span>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </AnimatedElement>

                {/* Product Modal */}
                {selectedProduct && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <AnimatedElement>
                            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="text-gray-400 hover:text-gray-600 text-xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                                {/* Ingredients */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Ingredients</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProduct.ingredients.map((ingredient, index) => (
                                            <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Benefits</h3>
                                    <ul className="space-y-2">
                                        {selectedProduct.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700">
                                                <span className="text-[#FFD600]">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Nutritional Information */}
                                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Nutritional Information</h3>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Calories:</span>
                                            <span className="text-gray-800 font-medium">{selectedProduct.calories} cal</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Protein:</span>
                                            <span className="text-gray-800 font-medium">{selectedProduct.protein}g</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Carbs:</span>
                                            <span className="text-gray-800 font-medium">{selectedProduct.carbs}g</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Fat:</span>
                                            <span className="text-gray-800 font-medium">{selectedProduct.fat}g</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Fiber:</span>
                                            <span className="text-gray-800 font-medium">{selectedProduct.fiber}g</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-[#FFD600] font-bold text-xl">{selectedProduct.price}</span>
                                    <AnimatedButton className="bg-[#FFD600] text-black px-6 py-2 rounded-md font-bold shadow-lg hover:shadow-xl transition-shadow">
                                        Order
                                    </AnimatedButton>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                )}
            </div>
        </AnimatedPage>
    );
} 