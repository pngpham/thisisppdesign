const rainbow = [
    'rgba(255,231,0)',
    'rgba(255,73,176)',
    'rgba(247,40,94)',
    'rgba(100,177,69)',
    'rgba(46,85,165)',
    ];

let colorIndex = 0;

document.addEventListener('selectstart', () => {
    colorIndex = colorIndex + 1;
    
    if (colorIndex >= rainbow.length) colorIndex = 0;

    document.querySelector('body').style.setProperty('--select-color', `${rainbow[colorIndex]}`);
});