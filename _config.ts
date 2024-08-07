import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";

const site = lume({
  location: new URL("https://quacau-thespher.github.io/BW-ton-tai-trong-the-gioi-tu-ban"),
});

site.use(wiki());

export default site;
