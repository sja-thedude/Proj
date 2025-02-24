import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Header({ onSearch, onCategoryChange }) {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isAvatarSubmenuOpen, setAvatarSubmenuOpen] = useState(false);
  const [isFashionSubmenuOpen, setFashionSubmenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category All");
  const [searchQuery, setSearchQuery] = useState(""); // For search input

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Pass the selected category to the parent component
    setCategoryDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery); // Pass search query to parent component
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
            </Link>
          </li>
          <li className="search-bar">
            <input
              type="text"
              placeholder="Keyword"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange} // Update search query state on input change
            />
            <div className="line">|</div>
            <div
              className="category-dropdown-wrapper"
              onClick={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <div className="category-dropdown">{selectedCategory}</div>
              {isCategoryDropdownOpen && (
                <ul className="category-options">
                  <li onClick={() => handleCategorySelection("Category All")}>Category All</li>
                  <li
                    onMouseEnter={() => setAvatarSubmenuOpen(true)}
                    onMouseLeave={() => setAvatarSubmenuOpen(false)}
                  >
                    Category Avatars
                    {isAvatarSubmenuOpen && (
                      <ul className="submenu">
                        <li onClick={() => handleCategorySelection("Human-like")}>Human-like</li>
                        <li onClick={() => handleCategorySelection("Anthro & Furry")}>Anthro & Furry</li>
                        <li onClick={() => handleCategorySelection("Robot & Cyborgs")}>Robot & Cyborgs</li>
                        <li onClick={() => handleCategorySelection("Others in Avatars")}>Others</li>
                        <li onClick={() => handleCategorySelection("All in Avatars")}>All in Avatars</li>
                      </ul>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => setFashionSubmenuOpen(true)}
                    onMouseLeave={() => setFashionSubmenuOpen(false)}
                  >
                    Category Fashion
                    {isFashionSubmenuOpen && (
                      <ul className="submenu">
                        <li onClick={() => handleCategorySelection("Clothes")}>Clothes</li>
                        <li onClick={() => handleCategorySelection("Accessories")}>Accessories</li>
                        <li onClick={() => handleCategorySelection("Others in Fashion")}>Others</li>
                        <li onClick={() => handleCategorySelection("All in Fashion")}>All in Fashion</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>
            <Image src="/images/searchicon.svg" alt="Search Icon" width={50} height={50} onClick={handleSearchClick} />
          </li>
          <li>
            <Image src="/images/filtersearch.svg" alt="Filter Icon" width={50} height={50} />
          </li>
          <li>
            <p>List Your Creation</p>
          </li>

          {/* Language Dropdown */}
          <li className="language-dropdown">
            <Image src="/images/lang.svg" alt="Language Icon" width={40} height={40} />
            <ul className="language-select">
              <li className="lang"> <Image src="/images/english.svg" alt="Language Icon" width={15} height={15} /><p>English</p></li>
              <li className="lang"> <Image src="/images/japan.svg" alt="Language Icon" width={15} height={15} /><p>Japanese</p></li>
            </ul>
          </li>

          {/* User Dropdown */}
          <li className="user-dropdown">
            <Image src="/images/usericon.svg" alt="User Icon" width={70} height={70} />
            <ul className="user-select">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>List Your Item</li>
              <li>Message to Yuta (The Founder)</li>
            </ul>
          </li>
          <li>
            <Link href="/cart">
              <Image src="/images/shoppingcart.svg" alt="Shopping Cart Icon" width={50} height={50} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
