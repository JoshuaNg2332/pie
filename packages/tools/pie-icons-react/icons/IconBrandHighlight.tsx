import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getReactSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconBrandHighlight = (props: RegularIconProps) => {
  const {
    className,
    size,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getReactSvgProps("c-pieIcon c-pieIcon--brand-highlight", className, size, "IconBrandHighlight");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="m11.579 8.928-.359-.43v-.157c0-.332 0-.673-.044-.953a6.413 6.413 0 0 0 0-.665.648.648 0 0 0-.56-.56h-.166a.647.647 0 0 0-.726.56v.236A7.49 7.49 0 0 0 8.34 5.734a.875.875 0 0 0-.936 0 11.874 11.874 0 0 0-3.78 3.946.656.656 0 0 0 .411.945l.438.061v.097c.079 1.662.175 2.87.262 3.412a.665.665 0 0 0 .648.551h-.009 4.944a.657.657 0 0 0 .638-.551c.15-1.123.24-2.254.272-3.386v-.105l.429-.079a.665.665 0 0 0 .446-.98 6.603 6.603 0 0 0-.525-.717ZM9.95 10.625v.131c-.078 1.374-.14 2.205-.192 2.695h-3.78c-.07-.621-.131-1.566-.193-2.721v-.105a1.33 1.33 0 0 0-.595-.954A10.579 10.579 0 0 1 7.86 7.046c.219.184.481.473.875.875l.91.954c.093.1.216.167.35.193l.149.218.332.412a1.372 1.372 0 0 0-.525.927Zm-1.295-7H7.344V1h1.312v2.625Zm2.345 1.61-1.023-.823 1.67-2.073 1.024.822-1.67 2.074Zm-5.985 0L3.328 3.161 4.35 2.34 6.04 4.43l-1.024.805Z" /></svg>;
};
export default IconBrandHighlight;