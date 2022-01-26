import * as React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

type ITagName = 'div' | 'header' | 'h1';

interface ISubProps {
  tag?: ITagName;
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  gap?: 's' | 'm';
  responsive?: true;
  expand?: true;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface IProps extends ISubProps {
  direction: 'column' | 'row';
}

const Stack = React.forwardRef(function Stack(
  {
    tag,
    className,
    direction,
    align,
    justify,
    gap,
    responsive,
    expand,
    ...props
  }: IProps,
  ref: any,
) {
  const combinedClassName = classNames(
    className,
    styles.stack,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    gap && styles[`gap${responsive ? '-reponsive' : ''}-${direction}-${gap}`],
    expand && styles.expand,
    responsive
      ? styles[`responsive-direction-${direction}`]
      : styles[`direction-${direction}`],
  );

  const Component = tag || 'div';
  return <Component ref={ref} className={combinedClassName} {...props} />;
});

const Component = {
  Column: React.forwardRef(function Column(props: ISubProps, ref) {
    return (
      <Stack
        direction="column"
        align="start"
        justify="center"
        ref={ref}
        {...props}
      />
    );
  }),
  Row: React.forwardRef(function Row(props: ISubProps, ref) {
    return (
      <Stack
        direction="row"
        align="center"
        justify="start"
        ref={ref}
        {...props}
      />
    );
  }),
  ResponsiveRow: React.forwardRef(function ResponsiveRow(
    props: ISubProps,
    ref,
  ) {
    return (
      <Stack
        direction="row"
        align="center"
        justify="start"
        responsive={true}
        ref={ref}
        {...props}
      />
    );
  }),
  Expand: ({
    tag,
    className,
    ...props
  }: {
    tag?: ITagName;
    className?: string;
    children: React.ReactNode;
    onClick?: any;
  }) => {
    const Component = tag || 'div';
    return (
      <Component className={classNames(styles.expand, className)} {...props} />
    );
  },
};

export default Component;
