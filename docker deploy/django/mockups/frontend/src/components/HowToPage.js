import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-3/4 lg:mr-8">
            <h1 className="text-3xl font-bold mb-4">
              How to use mockup generator
            </h1>
            <div className="prose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod justo id mi aliquet consequat. Duis convallis neque ac
                nisi consequat eleifend. Nulla facilisi. Duis ultrices enim id
                est facilisis, nec consequat arcu efficitur. In vel diam ut eros
                fringilla condimentum. Curabitur vestibulum ligula ut ligula
                accumsan, ut fermentum ex pulvinar. Cras vestibulum, risus at
                tristique mollis, velit est scelerisque libero, et placerat nisl
                massa sit amet velit. Aliquam erat volutpat. Integer quis massa
                ac ligula tempor feugiat. Mauris vel purus vel augue tempus
                facilisis vel ac mi.
              </p>
              <p>
                Donec rutrum odio sit amet libero luctus, nec eleifend dolor
                feugiat. Phasellus eget mauris ac felis lacinia venenatis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Phasellus in fermentum
                ligula. Fusce nec semper mauris, et euismod nisi. Vestibulum at
                augue consectetur, finibus massa et, dapibus nunc. Aliquam erat
                volutpat. Donec rutrum metus vitae mi cursus, nec aliquam dolor
                efficitur. Integer nec erat nec lacus posuere hendrerit eget in
                lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
