import React from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import { Link } from 'react-router-dom';

// Styling for App
import '../../App.css';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button, Input, TextField, List, ListItem, Grid, Paper, Card, CardActions, CardContent } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const HomePageView = () => {
  const styles = {
    pageSelected: {
      color: '#1E201F'
    },
    textInput: {
      color: '#B4B4B4',
      fontSize: '20px',
      fontFamily: 'Overpass',
      fontWeight: '600'
    },
    gridItem: {
      textAlign: 'center',
      align: 'center',
      verticalAlign: 'center'
    }
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 220,
    },
    icons: {
      height: 50,
      width: 50,
    },
    control: {
      padding: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    }
  }));

  const classes = useStyles();

  return (
    <div className="container">
      <div className="nav-bar">
        <ul>
          <li><Link className="nav-link" to="/">
            <svg width="158" height="24" viewBox="0 0 316 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.976 47.768C16.648 47.768 13.6827 47.128 11.08 45.848C8.47733 44.5253 6.408 42.7547 4.872 40.536C3.336 38.3173 2.16267 35.864 1.352 33.176C0.584 30.488 0.2 27.6293 0.2 24.6C0.2 21.784 0.605333 19.0533 1.416 16.408C2.22667 13.72 3.4 11.2453 4.936 8.984C6.51467 6.72267 8.60533 4.90933 11.208 3.544C13.8107 2.136 16.7333 1.432 19.976 1.432C23.944 1.432 27.1867 2.34933 29.704 4.184C32.264 6.01866 34.5253 8.51466 36.488 11.672L27.976 16.472C25.5867 12.6747 22.92 10.776 19.976 10.776C17.672 10.776 15.752 11.544 14.216 13.08C12.68 14.5733 11.6347 16.3013 11.08 18.264C10.568 20.2267 10.312 22.3387 10.312 24.6C10.312 28.4827 11.1013 31.768 12.68 34.456C14.3013 37.1013 16.7333 38.424 19.976 38.424C21.8107 38.424 23.4107 37.8267 24.776 36.632C26.1413 35.4373 26.824 34.0507 26.824 32.472V32.152H19.528V22.872H36.808V29.912C36.808 35.5013 35.2293 39.8747 32.072 43.032C28.9573 46.1893 24.9253 47.768 19.976 47.768ZM48.9735 11.16C47.5228 11.16 46.2642 10.648 45.1975 9.624C44.1308 8.55733 43.5975 7.29867 43.5975 5.848C43.5975 4.39733 44.1095 3.16 45.1335 2.136C46.2002 1.112 47.4802 0.599998 48.9735 0.599998C50.4668 0.599998 51.7255 1.112 52.7495 2.136C53.7735 3.11733 54.2855 4.35467 54.2855 5.848C54.2855 7.29867 53.7735 8.55733 52.7495 9.624C51.7255 10.648 50.4668 11.16 48.9735 11.16ZM44.3015 47V14.296H53.5815V47H44.3015ZM72.0055 47L60.0375 14.296H69.7015L76.1655 32.536C76.4215 33.176 76.7202 34.2 77.0615 35.608C77.4028 34.2 77.7015 33.176 77.9575 32.536L84.3575 14.296H94.0215L82.0535 47H72.0055ZM113.377 47.768C108.556 47.768 104.758 46.2533 101.985 43.224C99.2117 40.1947 97.825 35.992 97.825 30.616C97.825 25.368 99.2117 21.208 101.985 18.136C104.801 15.064 108.598 13.528 113.377 13.528C117.729 13.528 121.27 14.8507 124.001 17.496C126.732 20.1413 128.097 23.9813 128.097 29.016C128.097 31.1067 128.012 32.7067 127.841 33.816H106.913C106.998 35.864 107.638 37.4 108.833 38.424C110.028 39.4053 111.542 39.896 113.377 39.896C116.364 39.896 118.817 38.744 120.737 36.44L126.113 41.816C122.828 45.784 118.582 47.768 113.377 47.768ZM106.977 26.84H119.201C118.732 23.2133 116.662 21.4 112.993 21.4C111.329 21.4 109.964 21.8907 108.897 22.872C107.83 23.8107 107.19 25.1333 106.977 26.84ZM153.912 3.352L169.144 38.296C169.827 39.9173 170.403 41.1547 170.872 42.008C171.384 42.8187 171.875 43.416 172.344 43.8C172.856 44.1413 173.432 44.3547 174.072 44.44C174.243 44.9947 174.349 45.464 174.392 45.848C174.435 46.232 174.456 46.68 174.456 47.192C174.029 47.1493 173.368 47.1067 172.472 47.064C171.576 47.064 170.637 47.0427 169.656 47C168.675 47 167.843 47 167.16 47C166.648 47 166.051 47 165.368 47C164.685 47.0427 163.981 47.064 163.256 47.064C162.531 47.1067 161.869 47.128 161.272 47.128C160.717 47.1707 160.269 47.192 159.928 47.192C159.928 46.68 159.949 46.1893 159.992 45.72C160.035 45.2507 160.163 44.824 160.376 44.44C162.125 44.2693 163.149 43.8853 163.448 43.288C163.747 42.6907 163.491 41.4107 162.68 39.448L153.784 18.648C153.187 17.3253 152.675 16.152 152.248 15.128C151.821 14.104 151.331 12.8027 150.776 11.224H151.096C150.584 12.8453 150.115 14.232 149.688 15.384C149.304 16.4933 148.92 17.56 148.536 18.584L141.24 37.592C140.301 40.1093 140.003 41.8587 140.344 42.84C140.728 43.7787 141.795 44.312 143.544 44.44C143.715 44.824 143.821 45.2507 143.864 45.72C143.949 46.1893 143.992 46.68 143.992 47.192C143.523 47.1493 142.947 47.1067 142.264 47.064C141.581 47.064 140.856 47.0427 140.088 47C139.32 47 138.595 47 137.912 47C136.845 47 135.843 47.0213 134.904 47.064C133.965 47.1067 133.197 47.1493 132.6 47.192C132.6 46.7653 132.621 46.3173 132.664 45.848C132.749 45.336 132.877 44.888 133.048 44.504C133.816 44.376 134.456 44.0987 134.968 43.672C135.48 43.2027 135.971 42.4987 136.44 41.56C136.909 40.5787 137.485 39.256 138.168 37.592L151.416 3.608C151.843 3.52267 152.227 3.45867 152.568 3.416C152.952 3.37333 153.4 3.352 153.912 3.352ZM159.736 30.04L160.312 32.92C157.411 32.92 154.339 32.9413 151.096 32.984C147.853 33.0267 144.909 33.0907 142.264 33.176L143.288 30.04H159.736ZM223.231 47H213.503V24.792C213.503 24.3653 213.524 23.896 213.567 23.384C213.353 23.896 213.161 24.3227 212.991 24.664L202.111 47.768L191.103 24.792C190.975 24.4933 190.804 24.024 190.591 23.384V24.792V47H180.863V2.2H190.783L201.215 25.048C201.513 25.7307 201.876 26.6693 202.303 27.864C202.729 26.6693 203.092 25.7307 203.391 25.048L214.143 2.2H223.231V47ZM246.752 47.768C241.931 47.768 238.133 46.2533 235.36 43.224C232.587 40.1947 231.2 35.992 231.2 30.616C231.2 25.368 232.587 21.208 235.36 18.136C238.176 15.064 241.973 13.528 246.752 13.528C251.104 13.528 254.645 14.8507 257.376 17.496C260.107 20.1413 261.472 23.9813 261.472 29.016C261.472 31.1067 261.387 32.7067 261.216 33.816H240.288C240.373 35.864 241.013 37.4 242.208 38.424C243.403 39.4053 244.917 39.896 246.752 39.896C249.739 39.896 252.192 38.744 254.112 36.44L259.488 41.816C256.203 45.784 251.957 47.768 246.752 47.768ZM240.352 26.84H252.576C252.107 23.2133 250.037 21.4 246.368 21.4C244.704 21.4 243.339 21.8907 242.272 22.872C241.205 23.8107 240.565 25.1333 240.352 26.84ZM287.671 47V44.568C285.708 46.7013 282.999 47.768 279.543 47.768C275.916 47.768 272.951 46.8507 270.647 45.016C268.386 43.1387 267.255 40.472 267.255 37.016C267.255 33.6453 268.578 31.064 271.223 29.272C273.868 27.4373 276.962 26.52 280.503 26.52C283.575 26.52 285.964 26.904 287.671 27.672V25.88C287.671 24.3867 287.202 23.256 286.263 22.488C285.324 21.6773 284.023 21.272 282.359 21.272C278.818 21.272 275.319 22.424 271.863 24.728L268.983 17.624C272.994 14.8933 277.666 13.528 282.999 13.528C292.258 13.528 296.887 17.7947 296.887 26.328V47H287.671ZM281.335 39.96C283.639 39.96 285.751 39.192 287.671 37.656V34.712C285.964 34.2 284.108 33.944 282.103 33.944C278.263 33.944 276.343 34.9893 276.343 37.08C276.343 39 278.007 39.96 281.335 39.96ZM306.183 47V5.144L315.463 0.791996V47H306.183Z" fill="white" />
            </svg>
          </Link></li>
          <li><Link className="nav-link" style={styles.pageSelected} to="/">HOME</Link></li>
          <li><Link className="nav-link" to="/mission">OUR MISSION</Link></li>
          <li><a className="nav-link" href="http://gam-covid-assistant.mybluemix.net/">HELP</a></li>
        </ul>
      </div>
      <br />
      <Grid container className='content-grid' spacing={2}>
        <Grid item xs={12}>
          <p className='home-font'>Support restaurants, healthcare workers, and people in need due to the pandemic by donating meals, coffees, and desserts!</p>
        </Grid>
      </Grid>

      <Grid container className='content-grid' spacing={2}>
        <Grid item xs={12}>
          <form onSubmit='' className="zip-input">
            <Input id="input-zip" placeholder="Enter zip code"/>
						<Link to={`/restaurants`}>
            <button type="submit" variant="contained" className='the-button' onClick=''>Search</button><br />
						</Link>
          </form><br />
        </Grid>
      </Grid>

      <Grid container className='content-grid' spacing={2} >
        <Grid item xs={6}>
          <img style={{position:'relative', left:'170px', width:'800px'}} src='diagram.svg'></img>
        </Grid>
      </Grid>

      <Grid container className='content-grid' justify='space-evenly' spacing={2} style={{position:'relative', left: '-10px', bottom:'20px'}}>
        <Grid className={styles.gridItem} item xs={2} s={10}>
          <p className={styles.homeSubtitles} style={{fontSize: '20px', textAlign:'center'} }><b>Donate to a restaurant</b></p>
        </Grid>
        <Grid className="styles.gridItem" item xs={2} s={10}>
          <p className={styles.homeSubtitles} style={{fontSize: '20px', textAlign:'center'}}><b>Food is sent to those in need</b></p>
        </Grid>
        <Grid className="styles.gridItem" item xs={2} s={10}>
          <p className={styles.homeSubtitles} style={{fontSize: '20px', textAlign:'center'}}><b>Restaurants and recipients are happy</b></p>
        </Grid>
      </Grid>
    </div>
  );
}


export default HomePageView;