import lume from "https://deno.land/x/lume/mod.js";
import jsx from "https://deno.land/x/lume/plugins/jsx.js";
import css from "https://deno.land/x/lume/plugins/css.js";

const site = lume();

site.use(jsx());
site.use(css());

export default site;
