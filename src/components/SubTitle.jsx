import React from "react";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SubTitle = ({ subTitle }) => {
  const theme = useTheme();
  return (
          <Typography
          
            component="span"
            sx={{
                mx: 'auto',
              ...theme.subTitle,
            }}
          >
            {subTitle}
          </Typography>
  );
};

SubTitle.propTypes = {
  subTitle: PropTypes.string.isRequired,
};

export default SubTitle;
