import React from "react";

const UnderContruction = () => {
  return (
    <div class="flex items-center justify-center mt-20">
      <div class="flex flex-col items-center justify-center max-w-2xl">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
          alt="tailwindcss maintenance"
        />
        <h1 class="mb-3 text-3xl font-extrabold text-center text-secondary">
          Under Maintenance
        </h1>
        <p class="text-center text-gray-600">
          The Page you are looking for is currently under maintenance and will
          be back soon :))
        </p>
      </div>
    </div>
  );
};

export default UnderContruction;
