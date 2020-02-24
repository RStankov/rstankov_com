import * as React from 'react';

type IProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default React.forwardRef(function LinkExternal(props: IProps, ref: any) {
  return <a {...props} ref={ref} rel="noopener" target="_blank" />;
});
