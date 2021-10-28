import * as banner from '../../img/bannerOfJanneAndOstkrokar.png';

export default function Banner () {
 
    const img = banner.default;

    return (
        <div>
            <img src={img} style={{ width: 400 }} alt="image of janne with ostkorkar" className="" />
       </div>
    )
}