import React from "react";
import courses from "../data/courses.json";

const DisplayUniqueCategories = () => {
  const pluck = (array, key) => {
    var pluckedArray = [];
    array.forEach((item) => {
      if (item.hasOwnProperty(key)) {
        pluckedArray.push(item[key]);
      }
    });
    return pluckedArray;
  };

  let uniqueCategories = pluck(courses, "category");

  const categoryListItem = uniqueCategories.map((category, index) => {
    return (
      <li key={index} className="capitalized bold">
        {category}
      </li>
    );
  });

  return (
    <ul data-cy="categories" className="center">
      {categoryListItem}
    </ul>
  );
};

export default DisplayUniqueCategories;
