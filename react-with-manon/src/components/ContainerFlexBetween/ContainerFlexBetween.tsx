import { Fragment } from "react";
import "./ContainerFlexBetween.css";

interface ContainerFlexBetweenProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const ContainerFlexBetween = (props: ContainerFlexBetweenProps) => {
  const { children, title } = props;
  return (
    <Fragment>
      <section className="ContainerFlexBetween__bg">
        <h2 className="ContainerFlexBetween__title">{title}</h2>
        <div className="ContainerFlexBetween__links">{children}</div>
      </section>
    </Fragment>
  );
};

export default ContainerFlexBetween;
