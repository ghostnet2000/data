
data = [];

function generate_random(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function get_data(start_date, end_date, period) {
    
    d = start_date;
    accumulate = 0

    while( d <= end_date ){
        number = generate_random( 0, 10, 0);
        accumulate += number;
        data.push({ date: d, value: number, accumulated: accumulate });
        d = addMinutes(d, period);
    }
    
    return data;
}

s = new Date(2015,0,2)
e = new Date(2015,0,3)

console.log( get_data(s,e, 30))