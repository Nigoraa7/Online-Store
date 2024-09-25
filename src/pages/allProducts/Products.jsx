import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import {GetCard,getCategoryById,getProductByBrand} from "../../../api/CardApi";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../api/CardApi";


const Products = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);
  const [filteredCards, setFilteredCards] = useState([]);

  

  const handleApplyPriceFilter = () => {
    const filtered = cards.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    if (id) {
      dispatch(getCategoryById(id));
      dispatch(getProductByBrand(id));
    }
    dispatch(GetCard());
  }, [dispatch, id]);

  const { cards, isLoading } = useSelector((state) => state.cards);
  const { categoryById, isLoading: categoryLoading } = useSelector(
    (state) => state.categoryById
  );

  const handleCategoryClick = (id) => {
    dispatch(getCategoryById(id));
  };

  const handleBrandClick = (brandId) => {
    setSelectedBrand(brandId);
    dispatch(getProductByBrand(brandId));
  };
  const { brand } = useSelector((state) => state.brand);
  // console.log(brand);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  return (
    <div className="p-9 font-[poppins]">
      <div className="flex justify-between items-center">
        <p>
          <span className="text-[grey]">Home / </span>Explore Our Products
        </p>
        <select className="border-[1px] py-2 px-4 rounded-lg">
          <option value="">Popularity</option>
          <option value="">Price</option>
          <option value="">Brand</option>
        </select>
      </div>
      <section className="flex justify-between">
        <div className="text-[#505050]">
          <div className="leading-8 border-y-2">
            <p className="font-bold text-black">Category</p>
            <p>
              <input className="mr-1" type="checkbox" />
              All products
            </p>
            <p onClick={() => handleCategoryClick(12)}>
              <input className="mr-1" type="checkbox" />
              Electronics
            </p>
            <p onClick={() => handleCategoryClick(17)}>
              <input className="mr-1" type="checkbox" />
              Home & Lifestyle
            </p>
            <p onClick={() => handleCategoryClick(28)}>
              <input className="mr-1" type="checkbox" />
              Digital Technology
            </p>
            <p onClick={() => handleCategoryClick(86)}>
              <input className="mr-1" type="checkbox" />
              Sports & Outdoor
            </p>
            <p className="text-[#DB4444]">See all</p>
          </div>
          <div className="leading-8 border-b-2">
            <p className="font-bold text-black">Brands</p>
            <p onClick={() => handleBrandClick(5)}>
              <input className="mr-1" type="checkbox" />
              Samsung
            </p>
            <p onClick={() => handleBrandClick(47)}>
              <input className="mr-1" type="checkbox" />
              Apple
            </p>
            <p onClick={() => handleBrandClick(45)}>
              <input className="mr-1" type="checkbox" />
              Xiaomi
            </p>
            <p>
              <input className="mr-1" type="checkbox" />
              Pocco
            </p>
            <p onClick={() => handleBrandClick(25)}>
              <input className="mr-1" type="checkbox" />
              Lenovo
            </p>
            <p className="text-[#DB4444]">See all</p>
          </div>
          <div className="leading-8 border-b-2">
            <p className="font-bold text-black">Features</p>
            <p>
              <input className="mr-1" type="checkbox" />
              Metallic
            </p>
            <p>
              <input className="mr-1" type="checkbox" />
              Plastic cover
            </p>
            <p>
              <input className="mr-1" type="checkbox" />
              8GB Ram
            </p>
            <p>
              <input className="mr-1" type="checkbox" />
              Super power
            </p>
            <p>
              <input className="mr-1" type="checkbox" />
              Large Memory
            </p>
            <p className="text-[#DB4444]">See all</p>
          </div>
          <div className="leading-8 border-b-2">
            <p>Price range</p>
            <input type="range" />
            <div>
              <TextField
                sx={{ width: "100px" }}
                id="outlined-basic"
                label="Min"
                variant="outlined"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                placeholder="0"
              />
              <TextField
                sx={{ width: "100px", marginLeft: "4px" }}
                id="outlined-basic"
                label="Max"
                variant="outlined"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                placeholder="99999"
              />
            </div>
            <button onClick={handleApplyPriceFilter} className="px-20 py-3 mt-4 border-[red] border-[1px] rounded-md text-[#DB4444]">
              Apply
            </button>
          </div>
          <div className="leading-8 border-b-2">
            <p className="font-bold text-black">Condition</p>
            <p>
              <input className="mr-1" type="radio" />
              Any
            </p>
            <p>
              <input className="mr-1" type="radio" />
              Refurbished
            </p>
            <p>
              <input className="mr-1" type="radio" />
              Brand new
            </p>
            <p>
              <input className="mr-1" type="radio" />
              Old items
            </p>
          </div>
          <div className="leading-10">
            <p className="font-bold text-black">Ratings</p>
            <div className="flex">
              <input className="mr-1" type="checkbox" />
              <Stack spacing={1} className="flex justify-center">
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
              </Stack>
            </div>
            <div className="flex">
              {" "}
              <input className="mr-1" type="checkbox" />
              <Stack spacing={1} className="flex justify-center">
                <Rating name="half-rating" defaultValue={4} precision={0.5} />
              </Stack>
            </div>
            <div className="flex">
              {" "}
              <input className="mr-1" type="checkbox" />
              <Stack spacing={1} className="flex justify-center">
                <Rating name="half-rating" defaultValue={3} precision={0.5} />
              </Stack>
            </div>
            <div className="flex">
              {" "}
              <input className="mr-1" type="checkbox" />
              <Stack spacing={1} className="flex justify-center">
                <Rating name="half-rating" defaultValue={2} precision={0.5} />
              </Stack>
            </div>
          </div>
        </div>

        <div>
        <div className="mb-6 p-4 border ">
  {categoryLoading ? (
    <div>Loading category...</div>
  ) : (
    categoryById && (
      <div className="relative bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-200 rounded-xl border border-gray-200 shadow-lg overflow-hidden max-w-4xl mx-auto flex items-center p-8 space-x-8 font-serif">
        <div className="bg-white p-2 rounded-lg shadow-md transform transition hover:scale-105">
          <img
            src={`http://135.181.152.249:8072/images/${categoryById.categoryImage}`}
            alt={categoryById.categoryName}
            className="w-48 h-48 object-cover rounded-md border border-gray-200"
          />
        </div>
        <div className="flex-1 text-gray-800">
          <h2 className="text-4xl text-gray-900 font-bold mb-4 border-b-2 border-indigo-300 pb-2 inline-block">
            {categoryById.categoryName}
          </h2>
          <ul className="space-y-3">
            {categoryById.subCategories.map((sub) => (
              <li
                key={sub.id}
                className="text-lg py-2 px-4 border border-gray-200 bg-white rounded-lg hover:bg-indigo-200 hover:text-indigo-800 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {sub.subCategoryName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  )}
</div>

<div className="space-y-4">
  {brand &&
    brand.map((product) => {
      return (
        <div
          key={product.id}
          className="flex items-center border border-gray-200 rounded-lg bg-white text-gray-800 shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden"
        >
          <img
            src={`http://135.181.152.249:8072/images/${product.image}`}
            alt={product.productName}
            className="w-48 h-48 object-cover rounded-l-lg"
          />
          <div className="flex flex-col justify-between p-4 w-full">
            <div>
              <p className="text-xl font-semibold mb-2">{product.productName}</p>
              <p className="text-sm text-gray-500">Color: {product.color}</p>
            </div>
            <p className="text-lg font-bold text-indigo-600">${product.price}</p>
          </div>
        </div>
      );
    })}
</div>

          <div className="flex justify-evenly flex-wrap gap-8 py-8  ml-10">
  {cards &&
    cards.map((product) => {
      return (
        <div key={product.id} className="transform transition duration-300 hover:scale-105 mx-auto">
          <div
            className="relative border rounded-lg p-4 bg-no-repeat bg-cover h-64 w-64 bg-opacity-100 shadow-lg hover:shadow-xl"
            style={{
              backgroundImage: `url('http://135.181.152.249:8072/images/${product.image}')`,
            }}
          >
            <div className="absolute top-2 left-2 w-16 h-8 rounded-md bg-red-600 flex items-center justify-center text-white font-semibold">
              <p>-40%</p>
            </div>
          </div>

          <div className="mt-4 text-center">
          <Button
          style={{ backgroundColor: "black", color: "white", marginTop: "10px" }}
          onClick={() => handleAddToCart(product.id)}
          className="hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          Add To Cart
        </Button>
            <p className="font-bold text-lg mt-3">{product.productName}</p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="text-gray-600 text-md">{product.price}$</p>
              <Stack spacing={1} className="flex justify-center">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
          </div>
        </div>
      );
    })}
</div>
        </div>
      </section>
      <div className="text-center">
        <Button
          sx={{
            backgroundColor: "#DB4444",
            color: "white",
            fontSize: "10px",
            fontFamily: "poppins",
            paddingBlock: "10px",
            paddingInline: "15px",
          }}
        >
          More Products
        </Button>
      </div>
    </div>
  );
};

export default Products;
