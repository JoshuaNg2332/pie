import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconChevronLeft = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--chevron-left", className, size, "IconChevronLeft");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M10.96 2.82 5.605 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z" /></svg>;
};
export default IconChevronLeft;