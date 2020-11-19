import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/decor"
                    as={process.env.PUBLIC_URL + "/home/decor"}
                  >
                    <a>Decor</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/decor.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/creative"
                    as={process.env.PUBLIC_URL + "/home/creative"}
                  >
                    <a>Creative</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/creative.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/perfumes"
                    as={process.env.PUBLIC_URL + "/home/perfumes"}
                  >
                    <a>Perfumes</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/perfumes.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/trending"
                    as={process.env.PUBLIC_URL + "/home/trending"}
                  >
                    <a>Trending</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/trending.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/essentials"
                    as={process.env.PUBLIC_URL + "/home/essentials"}
                  >
                    <a>Essentials</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/essentials.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/accessories"
                    as={process.env.PUBLIC_URL + "/home/accessories"}
                  >
                    <a>Accessories</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/accessories.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/lookbook"
                    as={process.env.PUBLIC_URL + "/home/lookbook"}
                  >
                    <a>Lookbook</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/lookbook.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/furniture"
                    as={process.env.PUBLIC_URL + "/home/furniture"}
                  >
                    <a>Furniture</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/furniture.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/smart-design"
                    as={process.env.PUBLIC_URL + "/home/smart-design"}
                  >
                    <a>Smart Design</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/smart-design.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/collection"
                    as={process.env.PUBLIC_URL + "/home/collection"}
                  >
                    <a>Collection</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/collection.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Shop</a>
          </Link>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Group One</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/right-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/no-sidebar"}
                  >
                    <a>No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-space"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-no-space"}
                  >
                    <a>Full Width No Space</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-no-sidebar"}
                  >
                    <a>Full Width No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-left-sidebar"}
                  >
                    <a>Full Width Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-right-sidebar"
                    as={
                      process.env.PUBLIC_URL + "/shop/fullwidth-right-sidebar"
                    }
                  >
                    <a>Full Width Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Group Two</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-basic/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Basic</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-fullwidth/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-fullwidth/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-fullwidth-right-thumb/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width Right Thumb</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/product-sticky/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-sticky/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Sticky Details</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/cart"
                    as={process.env.PUBLIC_URL + "/other/cart"}
                  >
                    <a>Shopping Cart</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/wishlist"
                    as={process.env.PUBLIC_URL + "/other/wishlist"}
                  >
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/compare"
                    as={process.env.PUBLIC_URL + "/other/compare"}
                  >
                    <a>Compare</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Shop Pages</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/other/checkout"
                    as={process.env.PUBLIC_URL + "/other/checkout"}
                  >
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/order-tracking"
                    as={process.env.PUBLIC_URL + "/other/order-tracking"}
                  >
                    <a>Order Tracking</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/my-account"
                    as={process.env.PUBLIC_URL + "/other/my-account"}
                  >
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/login-register"
                    as={process.env.PUBLIC_URL + "/other/login-register"}
                  >
                    <a>Login Register</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/megamenu-shop.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Elements</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Group One</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Product Categories</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Product Sliders</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Product Tabs</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Product Widget</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/recent-products"
                    as={process.env.PUBLIC_URL + "/element/recent-products"}
                  >
                    <a>Recent Products</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Group Two</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/sale-products"
                    as={process.env.PUBLIC_URL + "/element/sale-products"}
                  >
                    <a>Sale Products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/featured-products"
                    as={process.env.PUBLIC_URL + "/element/featured-products"}
                  >
                    <a>Featured products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/top-rated-products"
                    as={process.env.PUBLIC_URL + "/element/top-rated-products"}
                  >
                    <a>Top Rated products</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/best-selling-products"
                    as={
                      process.env.PUBLIC_URL + "/element/best-selling-products"
                    }
                  >
                    <a>Best Selling</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-attributes"
                    as={process.env.PUBLIC_URL + "/element/product-attributes"}
                  >
                    <a>Product Attributes</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Group Three</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/blog-posts"
                    as={process.env.PUBLIC_URL + "/element/blog-posts"}
                  >
                    <a>Blog Posts</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/mailchimp-forms"
                    as={process.env.PUBLIC_URL + "/element/mailchimp-forms"}
                  >
                    <a>Mailchimp Form</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/icon-boxes"
                    as={process.env.PUBLIC_URL + "/element/icon-boxes"}
                  >
                    <a>Icon Box</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/team-members"
                    as={process.env.PUBLIC_URL + "/element/team-members"}
                  >
                    <a>Team Member</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/faqs"
                    as={process.env.PUBLIC_URL + "/element/faqs"}
                  >
                    <a>FAQs / Toggles</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Group Four</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/countdown-timers"
                    as={process.env.PUBLIC_URL + "/element/countdown-timers"}
                  >
                    <a>Countdown Timer</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/buttons"
                    as={process.env.PUBLIC_URL + "/element/buttons"}
                  >
                    <a>Buttons</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/testimonials"
                    as={process.env.PUBLIC_URL + "/element/testimonials"}
                  >
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/google-maps"
                    as={process.env.PUBLIC_URL + "/element/google-maps"}
                  >
                    <a>Google Maps</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Pages</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/other/about"
                as={process.env.PUBLIC_URL + "/other/about"}
              >
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/about-two"
                as={process.env.PUBLIC_URL + "/other/about-two"}
              >
                <a>About Us Two</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/contact"
                as={process.env.PUBLIC_URL + "/other/contact"}
              >
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/faq"
                as={process.env.PUBLIC_URL + "/other/faq"}
              >
                <a>F.A.Q</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/coming-soon"
                as={process.env.PUBLIC_URL + "/other/coming-soon"}
              >
                <a>Coming Soon</a>
              </Link>
            </li>
            <li>
              <Link
                href="/other/not-found"
                as={process.env.PUBLIC_URL + "/other/not-found"}
              >
                <a>Not Found</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="position-relative">
          <Link
            href="/blog/standard-left-sidebar"
            as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
          >
            <a>Blog</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link
                href="/blog/standard-left-sidebar"
                as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
              >
                <a>Standard Layout</a>
              </Link>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link
                    href="/blog/standard-left-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/standard-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/standard-right-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/standard-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/standard-fullwidth"
                    as={process.env.PUBLIC_URL + "/blog/standard-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/blog/grid-left-sidebar"
                as={process.env.PUBLIC_URL + "/blog/grid-left-sidebar"}
              >
                <a>Grid Layout</a>
              </Link>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link
                    href="/blog/grid-left-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/grid-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/grid-right-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/grid-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/grid-fullwidth"
                    as={process.env.PUBLIC_URL + "/blog/grid-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/blog/list-left-sidebar"
                as={process.env.PUBLIC_URL + "/blog/list-left-sidebar"}
              >
                <a>List Layout</a>
              </Link>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link
                    href="/blog/list-left-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/list-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/list-right-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/list-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/list-fullwidth"
                    as={process.env.PUBLIC_URL + "/blog/list-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/blog/post-left-sidebar"
                as={process.env.PUBLIC_URL + "/blog/post-left-sidebar"}
              >
                <a>Single Post Layout</a>
              </Link>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link
                    href="/blog/post-left-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/post-left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post-right-sidebar"
                    as={process.env.PUBLIC_URL + "/blog/post-right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post-fullwidth"
                    as={process.env.PUBLIC_URL + "/blog/post-fullwidth"}
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
