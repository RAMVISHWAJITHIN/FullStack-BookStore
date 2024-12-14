import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utilis/getImgUrl';
import { Link } from 'react-router-dom';



const BookCard = ({ book }) => {
    return (
        <div className="rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-4">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                {/* Image Section */}
                <div className="sm:flex-shrink-0 border rounded-md overflow-hidden">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={getImgUrl(book.coverImage)}
                            alt={`Cover of ${book.title}`}
                            className="w-auto h-full sm:h-72 cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between sm:w-full">
                    <div>
                        <Link to={`/books/${book._id}`}>
                            <h3 className="text-xl font-semibold hover:text-blue-600 transition-colors mb-3">
                                {book.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 mb-4">
                            {book.description.length > 80
                                ? `${book.description.slice(0, 80)}...`
                                : book.description}
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-lg mb-5">
                            ${book?.newPrice}{' '}
                            <span className="line-through text-gray-500 text-base ml-2">
                                ${book?.oldPrice}
                            </span>
                        </p>
                        <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                            <FiShoppingCart className="" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
