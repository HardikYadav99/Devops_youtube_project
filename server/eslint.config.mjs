export default [
    { 
        files: ["**/*.js"], // check all the .js file in the server directory 
        rules: {
            semi: "error", //force semicolons 
            "no-unused-vars": "warn", // warns is variable is unused
        },
    },
];
