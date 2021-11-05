import * as banner from '../../img/logo.png';

export default function Logo() {

    const img = banner.default;
    return (
     
            <div className="headerStartpage">
                <h1>FÄRGAPP</h1>
                <img src={img} alt="logo" className="img-fluid logo" />
            </div>
    )
}