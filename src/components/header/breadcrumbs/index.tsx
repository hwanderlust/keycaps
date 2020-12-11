import "./Breadcrumbs.css";

interface BreadcrumbsProps {
  history: string;
}
function Breadcrumbs(props: BreadcrumbsProps) {
  const { history } = props;
  const paths = history.split("/").filter(path => !!path.length);

  return (
    <div className="header__breadcrumbs">
      <a href="/" className="breadcrumbs__home">
        <img src="./icon-home.svg" alt="" />
      </a>

      {paths.map((path, index) => {
        if (index === 0) {
          path = path.substring(0, 1).toUpperCase().concat(path.substring(1));
        }
        return (
          <span
            key={`${index}-${path}`}
            className={`breadcrumb ${index === paths.length - 1 ? "breadcrumb--last" : ""}`}>
            <a href={`/${path}`}>
              {path.replace("-", " ")}
            </a>
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;