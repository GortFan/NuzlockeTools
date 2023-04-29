import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

export default function Layout(props){
    return(
        <div>
            <MainNavigation/>
            <main className = {classes.main}>{props.children}</main>
        </div>

    )
}

//Layout is a wrapper which adds a css module style on top of existing elements that are wrapped within this component. 
//It ensures that the elements within itself are not 'swallowed' by accepting them as props and applying {props.children} within the section that will be styled 
//props.children is a React specific function that has its own pre-defined behaviour which is the aforementioned prupose above. 
//To future me who is reading this, I highly recommend you go over the part in ths vid talking about this again and read up on it via other sources such as documentation or blog posts
