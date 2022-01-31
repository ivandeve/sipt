import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Sistem Informasi Pengadaan Tanah</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
