import * as banner from '../../img/bannerOfJanneAndOstkrokar.png';

export default function Banner () {
 
    const img = banner.default;

    return (
        <div>
            <img src={img} className="img-fluid" alt="image of janne with ostkorkar"  />
       </div>
    )
}