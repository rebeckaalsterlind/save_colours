import ColorsMockData from './ColorsMockData';

export default function CompColors () {
    // Exchange this for prop import from ncs api fetch
    const mockData: any = ColorsMockData;

    return (
        <div id="compColorsWrapper">
            {
                Object.keys(mockData).map((key, i) => {
                    
                    return (
                        <div key={key}>
                            <p>{key}</p>
                            {
                                Object.keys(mockData[key]).map((color, i) => {
                                    return <div className="colorSquare" style={{backgroundColor: mockData[key][color]}}></div>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}