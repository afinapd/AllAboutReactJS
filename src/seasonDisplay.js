import React from 'react'

const SeasonConﬁg = {
    Kemarau: {
        color: 'bg-warning',
        icon: 'sun'
    },
    Hujan: {
        color: 'bg-primary',
        icon: 'umbrella'
    }
};

const getSeason = (mm) => {
    if (mm > 2 && mm < 9) {
        return 'Kemarau';
    } else {
        return 'Hujan';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(new Date().getMonth());
    const { color, icon } = SeasonConﬁg[season];

    // const icon = season === 'Hujan' ? 'umbrella' : 'sun';
    // const color = season === 'Hujan' ? 'bg-primary' : 'bg-warning';
    return (
        <div>
            <h2>Musim</h2>
            <div className={`p-3 mb-2  ${color} text-white`}>
                <div>{icon}</div>
                <div>{season}</div>
            </div>
        </div>);
}
export default SeasonDisplay;