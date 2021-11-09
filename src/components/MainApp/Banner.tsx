import * as banner from '../../img/bannerOfJanneAndOstkrokar.png';

export default function Banner () {
 
    const img = banner.default;

    return (
        <div>
            <img src={img} className="img-fluid krokar" alt="Image of Janne with ostkorkar" onClick={() => {alert('Mums filibabba!')}} />
       </div>
    )
}