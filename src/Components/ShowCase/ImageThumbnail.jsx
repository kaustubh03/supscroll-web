import React, { useEffect } from 'react';
import { supscroll } from "supscroll";
import 'supscroll/carousel.css';
import '../../App.css'

const ImageThumbnail = () =>{
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
        <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd91bEew3zIF0cwrYYvuWgbMSyCLsdsQNnR5OCiJMeLsEsx7qGAdlM0loXuZAGTWEa1yEXJ9fYEVtnlJL0mSL3xAzGIW7MsbtItUUFxRqKD0yO-t6mVICAUQo_DwiCVo208VIX_aqOQOiPrn9zkmV-iqcDY.webp?r=f91" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe6je1oB6V0brBRq4l3TlXn00R2soAjzU7Waa-x-xl6nYnThCt3S0aBMXnTqQ7ghImxPbIRsZHfk0wK71NyEqc-0ENI.webp?r=7a5" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZKKD6oX8un702f4IgP8GUR4JaSfD08LabACmH6vlei9pdFSRa78nTs9SWlAbjyU38DWLhmrI901p05qa1KejG3Cf_qUrDsLS7qg4WOLVpAvjBh7bw-cik1-widd1TphmwhQGts_6vlbSlvpI7G0ASCtCIY.webp?r=75b" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU-ayATMGN0i_CIpBz2DglMcKLzn2Si_idfs5HJvAafcj3rshe6nEUcgBMq58RzktkUqRAHPJ2aIHUZuGB-iJ4wcMxd858XASqqlgzAbFrLybPaqfBT8E-kVvuMN.jpg?r=f16" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbGqYkGUwSNgZRWLqyELz_qBfS2JUvG6RL9gehnXayitj4aigtPibsaPa5ySp0smrZg5vMtBC-iKDwzItiU8KtTR5fs.webp?r=8b3" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZXs6NwSYjdqlOAiIVvgLkyIKdzBoKSPWGbciAur-sTMyAg7nJXM_CKMyz_aulKCbDHI5WvnmzOlrIDS1ucLvrzMm9o.webp?r=fe3" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQO417AoaMguF_DtQ1zOivjKkMZEpP5zA1YFG1zwSewxnHSW3UyRVVbIUbhMdVsXnZzFolmiO9x3tteyklzoM_fZ9VA.webp?r=a8a" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjsKDiaKwLmrV662pwmVKEtRmbJI-s8M9ojCqr2QEdnPUJPX86RP-n9IGXxGcaHWkTf-cwz5e4kBLN3jYLM7HuBfYA.webp?r=01d" alt="SquareImage" />
            </div></a>
            <a href="http://example.com"><div class="children">
                <img src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd91bEew3zIF0cwrYYvuWgbMSyCLsdsQNnR5OCiJMeLsEsx7qGAdlM0loXuZAGTWEa1yEXJ9fYEVtnlJL0mSL3xAzGIW7MsbtItUUFxRqKD0yO-t6mVICAUQo_DwiCVo208VIX_aqOQOiPrn9zkmV-iqcDY.webp?r=f91" alt="SquareImage" />
            </div></a>
    </div>
</div>
}

export default ImageThumbnail;