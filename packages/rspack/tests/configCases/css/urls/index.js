const fs = require("fs");
const path = require("path");

it("css urls should works", async () => {
	await import("./urls.css");
	const css = await fs.promises.readFile(
		path.resolve(__dirname, "bundle.css"),
		"utf-8"
	);
	expect(css).toMatchSnapshot();
});
