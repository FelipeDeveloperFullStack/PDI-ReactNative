export type ButtonProps = {
  label: string;
  navigationType?: NavigationType | undefined;
  isGoBack?: boolean;
};

export type NavigationType = "Profile" | "Search" | "Home" | undefined;
