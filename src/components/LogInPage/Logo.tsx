import * as banner from '../../img/color-app-icon.png';

export default function Logo() {

    const img = banner.default;
    return (
    
        <div className="headerStartpage">
            <img src={img} alt="logo" className="img-fluid logo" />
        </div>
    )
}