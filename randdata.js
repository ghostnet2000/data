
data = [];

function generate_random(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function get_data(start_date, end_date) {
    
    d = start_date;
    
    while( d <= end_date ){
        number = generate_random( 0, 10, 3);
        data.push({ date: d, value: number });
        d = addMinutes(d, 15);
    }
    
    return data;
}

s = new Date(2015,10,2)
e = new Date(2015,10,3)

console.log( get_data(s,e))