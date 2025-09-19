import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-page-title";

const content = html`
    <ilw-page-title>
        <img src="https://picsum.photos/1200/300" alt="Background Image" slot="background">
        <h1>Graduate Programs</h1>
    </ilw-page-title>
`;

test("image should be displayed", async () => {
    const screen = render(content);
    const element = screen.getByRole("img");
    await expect.element(element).toBeVisible();
});
