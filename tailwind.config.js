// const withMT = require('@material-tailwind/react/utils/withMT');
 
// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   important: "root",
//   theme: {
//     extend: {
//       fontFamily: {
//       inter: ["Inter", "sans-serif"],
//     },},
//   },
//   plugins: [],
// });
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    colors: {
      black:'#000000',
    },
    extend: {
      fontFamily: {
            inter: ["Inter", "sans-serif"],
            roboto:['Roboto Slab','sans-serif']
          },
      },
    button:{
      valid: {
        variants: ["filled", "outlined", "gradient", "text"],
        sizes: ["sm", "md", "lg"],
        colors: [
          "black",
          "white",
          "blue-gray",
          "gray",
          "brown",
          "deep-orange",
          "orange",
          "amber",
          "yellow",
          "lime",
          "light-green",
          "green",
          "teal",
          "cyan",
          "light-blue",
          "blue",
          "indigo",
          "deep-purple",
          "purple",
          "pink",
          "red",
        ]
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
});