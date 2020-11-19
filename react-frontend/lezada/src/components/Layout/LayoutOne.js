import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";

const LayoutOne = ({ children, aboutOverlay }) => {
  return (
    <div>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne />
    </div>
  );
};

export default LayoutOne;
