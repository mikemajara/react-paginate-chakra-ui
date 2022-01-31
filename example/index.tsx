import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Paginate } from "../.";
import { Providers } from "./Providers";
import { useState } from "react";
import { chakra } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const App = () => {
  const [page, setPage] = useState(0);
  const handlePageClick = (p: number) => setPage(p);

  return (
    <Providers>
      <Paginate
        page={page}
        margin={1}
        shadow="sm"
        fontWeight="bold"
        variant="outline"
        selectedVariant="solid"
        count={100}
        pageSize={10}
        onPageChange={handlePageClick}
      />
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
