import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { CardContent, Card, CardActionArea } from "@material-ui/core";

export default function Layout() {
  const [categories, setCategories] = useState([]);
  const [mockups, setMockups] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/allcategories");
        const jsonData = await response.json();
        setCategories(jsonData); // Set data to state

        const response1 = await fetch("/api/allmockups");
        const jsonData1 = await response1.json();
        const mockupsInfo = jsonData1.results;
        setMockups(mockupsInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
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
                  <a
                    className="block hover:bg-gray-200 p-2"
                    href={category.slug}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-4">Mockup Templates</h1>
        <div className="flex flex-wrap gap-4 mb-4 block md:hidden">
          {categories.map((category) => (
            <Button
              className="bg-blue-500 text-white"
              key={category.id}
              href={category.slug}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((mockup) => (
            <Card className="w-full">
              <CardActionArea href={mockup.slug}>
                <CardContent>
                  <img
                    key={mockup.id}
                    alt="T-Shirt"
                    className="w-full h-auto mb-2"
                    height="200"
                    src={mockup.image}
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
