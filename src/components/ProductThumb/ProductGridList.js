import { Fragment, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { addToCart } from "../../store/slices/cart-slice";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
}) => {
  const [colorImage, setColorImage] = useState("");
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="product-grid">
        <div className="product-grid__image">
          <Link href={"/product/" + product.slug}>
            <img
              src={colorImage ? colorImage : product.thumbImage[1]}
              alt="product_img1"
            />
          </Link>

          <div className="product-grid__action-box">
            <ul>
              <li>
                {product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={
                      cartItem !== undefined &&
                      cartItem.quantity >= cartItem.stock
                    }
                    className={cartItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-basket-loaded" />
                  </button>
                ) : (
                  <button disabled>
                    <i className="icon-basket-loaded" />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-grid__info">
          <h6 className="product-title">
            <Link href={"/product/" + product.slug}>
              {product.name}
            </Link>
          </h6>
          <div className="product-price">
            {product.discount ? (
              <Fragment>
                <span className="price">${discountedPrice}</span>
                <del>${productPrice}</del>
                <span className="on-sale">{product.discount}% Off</span>
              </Fragment>
            ) : (
              <span className="price">${productPrice}</span>
            )}
          </div>
          <div className="rating-wrap">
            <ProductRating ratingValue={product.rating} />
            <span className="rating-num">({product.ratingCount})</span>
          </div>

          {product.variation ? (
            <div className="product-switch-wrap">
              <ul>
                {product.variation.map((single, key) => {
                  return (
                    <li key={key}>
                      <button
                        style={{ backgroundColor: `${single.colorCode}` }}
                        onClick={() => setColorImage(single.image)}
                        className={colorImage === single.image ? "active" : ""}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    
    </Fragment>
  );
};

export default ProductGridList;
