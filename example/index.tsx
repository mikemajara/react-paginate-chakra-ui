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

  return (
    <Providers>
      <chakra.div>Page: {page}</chakra.div>
      <Paginate
        margin={3}
        size="sm"
        fontWeight="regular"
        variant="ghost"
        selectedVariant="outline"
        count={100}
        pageSize={10}
        onClick={(page: number) => setPage(page)}
      />
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
