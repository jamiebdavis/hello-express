const fs = require("fs");
const path = require("path");
const httpMocks = require("httpMocks");
const getShoppingList = require("../controllers/getShoppingList");

it("gets an existing shopping list", done => {
  expect.assertions(1);

  const filename = Date.now().toString();

  const filePath = path.join(
    __dirname,
    "../controllers/shoppingLists",
    filename
  );

  const body = JSON.stringify({
    items: ["carrots", "crunchies", "cornflakes"]
  });

  fs.writeFile(filePath, JSON.stringify(body), err => {
      const request = httpMocks.createRequest({
          method: "GET",
          url: "/shopping-lists/:filename",
          params: {
              filename: filename
          }
      })
  }

const response = httpMocks.createResponse({
    eventEmitter: require("events").EventEmitter
})

getShoppingList(request, response)

response.on


done()

});
