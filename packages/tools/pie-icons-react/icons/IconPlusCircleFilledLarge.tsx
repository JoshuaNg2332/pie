import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconPlusCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--plus-circle-filled-large", className, size, "IconPlusCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M24.663 7.338A12.25 12.25 0 1 0 7.339 24.663 12.25 12.25 0 0 0 24.663 7.338Zm-2.477 9.537h-5.31v5.311h-1.75v-5.311H9.813v-1.75h5.311V9.814h1.75v5.311h5.311v1.75Z" /></svg>;
};
export default IconPlusCircleFilledLarge;