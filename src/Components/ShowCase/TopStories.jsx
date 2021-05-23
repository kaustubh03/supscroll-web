import React, { useEffect } from 'react';
import { supscroll } from "supscroll";
import 'supscroll/carousel.css';
import '../../App.css'

const TopStories = () =>{
    useEffect(()=>{

            let elem = document.querySelector('.supscroll .supscroll-wrapper');
            try{
                supscroll(elem);
            }
            catch(err){
                console.log(err)
            }
    },[]);
return <div className="supscroll">
    <div className="supscroll-wrapper">
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
        <a href="http://example.com">
            <div class="top-stories-children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6MVS2EAc_svTNTNPDi-gd0GO6vd7u84MAUNov1GrdlPUYwklW6UBotpvjAjfVaR2JjDbTMeFDMlfna7WV-jxTqzAE.webp?r=e9b" alt="SquareImage" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </a>
    </div>
</div>
}

export default TopStories;