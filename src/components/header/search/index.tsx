import React from "react";
import "./Search.css";

interface SearchProps {
  search: (query: string) => void;
}

function Search(props: SearchProps) {
  const { search } = props;
  const [query, updateQuery] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    updateQuery(event.target.value);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    search(query);
  }

  return (
    <form className="header__search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Looking for something specific? Like rubber keycaps?"
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        <svg
          className={`${!!query.length ? "search--active" : "search--inactive"}`}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9479 17.5313L19.7917 15.3229C19.3279 14.882 18.7428 14.5899 18.1117 14.4841C17.4806 14.3783 16.8322 14.4636 16.25 14.7292L15.3125 13.7917C16.4173 12.3155 16.9218 10.4757 16.7245 8.64254C16.5273 6.80937 15.6429 5.11898 14.2494 3.91167C12.8559 2.70435 11.0568 2.06975 9.21424 2.13561C7.37167 2.20147 5.62246 2.96291 4.31873 4.26663C3.015 5.57036 2.25356 7.31958 2.1877 9.16215C2.12184 11.0047 2.75644 12.8038 3.96376 14.1973C5.17108 15.5908 6.86146 16.4752 8.69463 16.6724C10.5278 16.8697 12.3676 16.3652 13.8438 15.2604L14.7708 16.1875C14.4741 16.7705 14.3677 17.4318 14.4667 18.0785C14.5658 18.7251 14.8653 19.3243 15.3229 19.7917L17.5313 22C18.1172 22.5852 18.9115 22.9139 19.7396 22.9139C20.5677 22.9139 21.362 22.5852 21.9479 22C22.2456 21.709 22.4821 21.3614 22.6435 20.9777C22.805 20.594 22.8882 20.1819 22.8882 19.7656C22.8882 19.3493 22.805 18.9373 22.6435 18.5536C22.4821 18.1699 22.2456 17.8223 21.9479 17.5313ZM13.1146 13.1146C12.3857 13.8417 11.4576 14.3364 10.4477 14.5363C9.4377 14.7362 8.39115 14.6323 7.44022 14.2377C6.48929 13.8431 5.67664 13.1755 5.10492 12.3193C4.5332 11.4631 4.22807 10.4566 4.22807 9.42708C4.22807 8.39753 4.5332 7.39108 5.10492 6.53486C5.67664 5.67864 6.48929 5.01106 7.44022 4.61647C8.39115 4.22188 9.4377 4.11797 10.4477 4.31787C11.4576 4.51776 12.3857 5.0125 13.1146 5.73958C13.5996 6.22339 13.9844 6.79814 14.247 7.4309C14.5096 8.06366 14.6447 8.74201 14.6447 9.42708C14.6447 10.1122 14.5096 10.7905 14.247 11.4233C13.9844 12.056 13.5996 12.6308 13.1146 13.1146ZM20.4792 20.4792C20.3823 20.5768 20.2671 20.6543 20.1402 20.7072C20.0133 20.7601 19.8771 20.7873 19.7396 20.7873C19.6021 20.7873 19.4659 20.7601 19.339 20.7072C19.2121 20.6543 19.0968 20.5768 19 20.4792L16.7917 18.2708C16.694 18.174 16.6166 18.0588 16.5637 17.9319C16.5108 17.8049 16.4836 17.6688 16.4836 17.5313C16.4836 17.3937 16.5108 17.2576 16.5637 17.1307C16.6166 17.0037 16.694 16.8885 16.7917 16.7917C16.8885 16.694 17.0037 16.6165 17.1307 16.5637C17.2576 16.5108 17.3937 16.4835 17.5313 16.4835C17.6688 16.4835 17.8049 16.5108 17.9319 16.5637C18.0588 16.6165 18.174 16.694 18.2708 16.7917L20.4792 19C20.5768 19.0968 20.6543 19.212 20.7072 19.339C20.7601 19.4659 20.7873 19.6021 20.7873 19.7396C20.7873 19.8771 20.7601 20.0132 20.7072 20.1402C20.6543 20.2671 20.5768 20.3823 20.4792 20.4792Z" fill="black" />
        </svg>
      </button>
    </form>
  );
}

export default Search;