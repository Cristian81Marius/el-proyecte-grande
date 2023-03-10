import Footer from "../footer/Footer";
import MainNavigation from "../MainNavigation";
import classes from './Layout.module.css'


function Layout(props){
    return <div >
        <MainNavigation />
        <main className={classes.main}>
            {props.children}
        </main>
        <Footer/>
    </div>;
}

export default Layout;