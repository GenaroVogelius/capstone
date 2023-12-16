
import StyledLayout from "./StyledLayout";




function Layout({ children }) {
    return (
      <StyledLayout>
        <div className="container-fluid">{children}</div>
      </StyledLayout>
    );
}

export default Layout;