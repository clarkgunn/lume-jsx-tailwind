export default function (path = 'assets/css/_critical.css') {
  return async (site) => {
    const css = await Deno.readTextFile(path)
    site.data("critical", css);
  };
};
