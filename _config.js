import lume from "https://deno.land/x/lume/mod.js";
import jsx from "https://deno.land/x/lume/plugins/jsx.js";
import css from "https://deno.land/x/lume/plugins/css.js";
import critical from './_plugins/critical.js';

const site = lume();

site.use(jsx());
site.use(css());
site.use(critical());

export default site;
