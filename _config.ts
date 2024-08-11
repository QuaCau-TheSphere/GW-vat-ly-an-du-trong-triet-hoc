import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import metas from "lume/plugins/metas.ts";
import ogImages from "lume/plugins/og_images.ts";

const site = lume({
  src: "./docs",
  location: new URL("https://vậtlý.quảcầu.cc"),
  server: {
    open: true,
  },
});

site.use(wiki({
  favicon: {
    input: "assets/favicon.svg"
  }
}));
site.use(metas());
site.use(ogImages());


export default site;
