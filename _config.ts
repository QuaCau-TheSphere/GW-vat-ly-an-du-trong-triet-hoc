import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";

const site = lume({
  src: "./docs",
});
site.use(wiki());

export default site;
