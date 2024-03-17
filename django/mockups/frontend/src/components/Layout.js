import React, { useState, useEffect } from "react";
import { CardContent, Card, CardActionArea } from "@mui/material";


export default function Layout() {
  const [categories, setCategories] = useState([]);
  const [mockups, setMockups] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = async (categorySlug) => {
    setSelectedCategory(categorySlug);
    try {
      const response = await fetch(`/api/category/${categorySlug}`);
      const jsonData = await response.json();
      setMockups(jsonData.results);
    } catch (error) {
      console.error("Error fetching mockups:", error);
    }
  };

  useEffect(() => {
    // Function to fetch all mockups initially
    const fetchAllMockups = async () => {
      try {
        const response = await fetch("/api/category/allmockups");
        const jsonData = await response.json();
        setMockups(jsonData.results);
      } catch (error) {
        console.error("Error fetching all mockups:", error);
      }
    };

    fetchAllMockups();
  }, []);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/allcategories");
        const jsonData = await response.json();
        setCategories(jsonData); // Set data to state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <nav className="w-full md:w-60 bg-gray-100 p-5 hidden md:block">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2 space-y-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className={`block hover:bg-gray-200 p-2 ${
                      selectedCategory === category.slug
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-4">Mockup Templates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((mockup) => (
            <Card key={mockup.id} className="w-full">
              <CardActionArea href={mockup.slug}>
                <CardContent>
                  <img
                    alt="T-Shirt"
                    className="w-full h-auto mb-2"
                    height="200"
                    src={mockup.image.replace("upload", "upload/w_500,q_auto")}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-lg font-semibold">{mockup.name}</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
