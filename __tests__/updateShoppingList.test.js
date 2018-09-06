const fs = require("fs");
const path = require("path");
const httpMocks = require("httpMocks");
const updateShoppingList = require("../controllers/updateShoppingList");

it("updates a shopping list", done => {
  expect.assertions(1);

  const filename = Date.now().toString();

  const filePath = path.join(
    __dirname,
    "../controllers/shoppingLists",
    filename
  );

  const body = {
    items: ["carrots", "crunchies", "cornflakes"]
  };

  fs.writeFile(filePath, JSON.stringify(body), err => {
    const request = httpMocks.createRequest({
      method: "PUT",
      url: "/shopping-list/:filename",
      params: {
        filename: filename
      },
      body: body
    });
  });

  const response = httpMocks.createResponse({
    eventEmitter: require("events").EventEmitter
  });

  updateShoppingList(response, request);

  response.on("end", () => {
      fs.readFile(filePath, "utf8", (error, data) => {
          expect(data).toBe(JSON.stringify(request.body));
      })

      

});
