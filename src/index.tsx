import * as React from "react";
import { Button, HStack, IconButton, Stack } from "@chakra-ui/react";

import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { PaginateProps } from "./types/paginate";

export const Paginate = (props: PaginateProps) => {
  const {
    count,
    pageSize,
    page,
    onPageChange,
    margin = 1,
    size = "md",
    selectedVariant = "solid",
    variant = "outline",
    previousIcon = <ChevronLeftIcon />,
    nextIcon = <ChevronRightIcon />,
    colorScheme = "gray",
    fontWeight = "regular",
    borderRadius = "md",
    ...rest
  } = props;

  const numberOfPages = Math.ceil(count / pageSize);

  const handlePageClick = (i: number) => {
    let newPage = i;
    if (i >= numberOfPages - 1) {
      newPage = numberOfPages - 1;
    } else if (i <= 0) {
      newPage = 0;
    }
    onPageChange(newPage);
  };

  const shouldRender = (idx: number) =>
    idx == page ||
    Math.abs(idx - page) <= margin ||
    idx === numberOfPages - 1 ||
    idx === 0;

  const shouldRenderEllipsis = (idx: number) =>
    idx == page || Math.abs(idx - page) === margin + 1;

  return (
    <Stack p={5}>
      <div>internal: {page}</div>
      <HStack>
        <IconButton
          {...rest}
          fontWeight={fontWeight}
          borderRadius={borderRadius}
          size={size}
          variant={variant}
          aria-label="previous"
          icon={previousIcon}
          onClick={e => {
            e.preventDefault();
            handlePageClick(page - 1);
          }}
          colorScheme={colorScheme}
        />
        {Array(numberOfPages)
          .fill(0)
          .map((_, i) => {
            return shouldRender(i) ? (
              <Button
                key={i}
                {...rest}
                fontWeight={fontWeight}
                borderRadius={borderRadius}
                size={size}
                variant={page == i ? selectedVariant : variant}
                onClick={e => {
                  e.preventDefault();
                  handlePageClick(i);
                }}
                colorScheme={colorScheme}
              >
                {i + 1}
              </Button>
            ) : shouldRenderEllipsis(i) ? (
              <Button
                key={i}
                {...rest}
                fontWeight={fontWeight}
                borderRadius={borderRadius}
                size={size}
                variant={variant}
                pointerEvents="none"
                colorScheme={colorScheme}
              >
                ...
              </Button>
            ) : (
              <React.Fragment key={i}></React.Fragment>
            );
          })}
        <IconButton
          {...rest}
          fontWeight={fontWeight}
          borderRadius={borderRadius}
          aria-label="next"
          icon={nextIcon}
          onClick={e => {
            e.preventDefault();
            handlePageClick(page + 1);
          }}
          size={size}
          variant={variant}
          colorScheme={colorScheme}
        />
      </HStack>
    </Stack>
  );
};
