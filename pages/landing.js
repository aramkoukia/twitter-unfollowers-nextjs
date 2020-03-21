import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons/Button';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax/Parallax';

import styles from '../assets/jss/nextjs-material-kit/pages/landingPage';

// Sections for this page
import ProductSection from '../pages-sections/LandingPage-Sections/ProductSection';
import TeamSection from '../pages-sections/LandingPage-Sections/TeamSection';
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Twitter Unfollowers"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter responsive image={require('assets/img/nextjs_header.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>More insights into your Twitter network!</h1>
              <h4>
                Do you want to know who stopped following you?
                <br />
                How about a list of everyone who is not following you?
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
