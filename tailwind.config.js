module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        minWidth: {
          0: "0",
          "1/4": "25%",
          "1/2": "50%",
          "1/3": "30%",
          "3/4": "75%",
          full: "100%",
        },
        width: {
          0: "0",
          "1/4": "25%",
          "1/2": "50%",
          "1/3": "34%",
          "3/4": "75%",
          "11/12": "95%",
          full: "100%",
        },
        fontFamily: {
          "body" : "Times New Roman"
        },
        // backgroundImage: theme => ({
        //   'hexagon-pattern': "url('./public/Home-bg.jpg')",
        //   'lady-scenario': "url('./public/Home1.png')",
        //   'man-scenario': "url('./public/Home2.png')",
        //  })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  