import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";

const site = lume({
  location: new URL("https://quacau-thesphere.github.io/GW-vat-ly-an-du-trong-triet-hoc/"),
});

site.use(wiki());

export default site;
