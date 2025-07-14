import "../sass/common/_Global.module.scss";
type ChildrenProps = {
  children: React.ReactNode;
};
export const Global = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};
