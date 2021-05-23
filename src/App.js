
import { useState } from 'react';
import './App.css';
import './md.css'
import Menu from './Components/ShowCase/Menu';
import ImageThumbnail from './Components/ShowCase/ImageThumbnail';
import markdown from './markdown';
import TopStories from './Components/ShowCase/TopStories';

function App() {
  const [activeMenu, setActiveMenu] = useState('usage');
  const getContentBody = () =>{
    switch(activeMenu){
      case "usage":
        return <div className="usage" dangerouslySetInnerHTML={{__html: markdown}}></div>;
      case 'menu':
        return <><h3>Can be used for scrollable Menus or like Instagram Stories list</h3><div className='menu_showcase'><Menu /></div></>
      case 'image_carousel':
        return <><h3>Can be used for Thumbnails Sliders Menus like Netflix movies list</h3><ImageThumbnail /></>
      case 'googleTopStories':
        return <TopStories />
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div class="github-corner">
        <span><a href="https://github.com/kaustubh03/supscroll"><img
                    src="https://diamond.kaustubh.dev/images//github-corner-right.svg" alt="github" /></a></span>
    </div>
      <div className="App_title">
        <h1>SupScroll</h1>
        <h4>Implementing scrolling carousel on your frontend apps quickly.</h4>
        <h4 class="attribution">Built with ❤️  &nbsp; by <a href="https://github.com/kaustubh03">Kaustubh</a></h4>
      </div>
      <div className="App_content">
        <ul className="App_menu">
          <li onClick={()=>setActiveMenu('usage')} className={`${activeMenu==='usage' && 'active-menu'}`}>Usage</li>
          <li onClick={()=>setActiveMenu('image_carousel')} className={`${activeMenu==='image_carousel' && 'active-menu'}`}>Image Thumbnail Scroll</li>
          <li onClick={()=>setActiveMenu('menu')} className={`${activeMenu==='menu' && 'active-menu'}`}>Menu</li>
          <li onClick={()=>setActiveMenu('googleTopStories')} className={`${activeMenu==='googleTopStories' && 'active-menu'}`}>Google Top Stories</li>
        </ul>
        <div className="App_content_body">
          {getContentBody()}
        </div>
      </div>
      
    </div>
  );
}

export default App;
