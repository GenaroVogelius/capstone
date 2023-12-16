import NavMain from "../nav/NavMain";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import TransitionComponent from "../Transition/TransitionComponent";
import { Toaster } from "sonner";

function CommonComponents({ children }) {
  return (
    <>
      <NavMain style={{ paddingBottom: "4rem" }} />
      <TransitionComponent>{children}</TransitionComponent>
      <Footer />
      <Toaster position="top-center" closeButton richColors />
    </>
  );
}

export default CommonComponents;
