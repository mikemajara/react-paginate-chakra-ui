export interface PaginateProps {
  page: number;
  count: number;
  pageSize: number;
  margin?: number;
  onPageChange: (page: number) => any;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "ghost" | "outline" | "link";
  selectedVariant?: "solid" | "ghost" | "outline" | "link";
  previousIcon?: React.ReactElement;
  nextIcon?: React.ReactElement;
  colorScheme?: string;
  fontWeight:
    | "hairline"
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  borderRadius:
    | "none"
    | "sm"
    | "base"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";
}
