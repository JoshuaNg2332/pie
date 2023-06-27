import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCaretUpFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--caret-up-filled-large", className, size, "IconCaretUpFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32"    {...allProps}><path d="M17.269 8.125a1.68 1.68 0 0 0-2.844 0l-8.671 14a1.68 1.68 0 0 0 1.426 2.564h17.64a1.68 1.68 0 0 0 1.409-2.625l-8.96-13.939Z" /></svg>;
};
export default IconCaretUpFilledLarge;