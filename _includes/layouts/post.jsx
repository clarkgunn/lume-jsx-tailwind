export const title = "Welcome to the Thunderdome";
export const layout = "layouts/base.jsx";

export default ({ title, children }) => (
    <article>
        <h1>{title}</h1>
        <p>{children}</p>
    </article>
);
