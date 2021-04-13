import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Visual from "../components/Home/Visual";
import { homeActions } from "../../redux/ActionCreators";
import PropTypes from "prop-types";

function VisualContainer() {
  const { features = [] } = useSelector(state => state.home);

  useEffect(() => {
    homeActions.getFeatures();
  }, []);

  return <Visual data={features} />;
}

VisualContainer.propTypes = {
  features: PropTypes.array
};

export default VisualContainer;
