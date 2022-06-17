import type React from "react";

export type DefaultProps<T = {}> = React.FC<T & { classNames?: string }>;
