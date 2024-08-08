import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume({
  src: "./docs",
  // location: new URL("https://quacau-thesphere.github.io/GW-vat-ly-an-du-trong-triet-hoc/"),
});

site.use(favicon({
  // input: "/favicon.svg",
  input: "/assets/favicon.svg",
}));

site.use(wiki());

export default site;
