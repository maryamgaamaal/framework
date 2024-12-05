// const flowbite = require("flowbite-react/tailwind");
// import { flowbite } from 'flowbite-react/tailwind';
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}


// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ]

// }

// module.exports = {

//   content: [
//       "./node_modules/flowbite/**/*.js"
//   ]

// }

