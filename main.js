
// let data = fs.readFileSync('./data/ranking.csv','utf8').split('\n').splice(1)

let dataset = []
let dataCountry = []
let country1 = {
    'Australia': 5,
    'Belize': 2,
    'Brazil': 3,
    'Canada': 7,
    'Chile': 3,
    'China': 4,
    'Finland': 2
}

let dummytest = [
    {
        country : 'Australia',
        value : 10
    },
    {
        country : 'Indonesia',
        value : 3
    },
    {
        country : 'Taiwan',
        value : 9
    },
    {
        country : 'Chinese',
        value : 15
    },
    {
        country : 'US',
        value : 12
    }
]

d3.csv("/data/ranking.csv").then(function (data) {
    let country = {}
    console.log(data[0], "data 0");
    for (let i = 0; i < data.length; i++) {
        if (country[data[i].country] == undefined) {
            country[data[i].country] = 1
        }
        country[data[i].country]++
        console.log(data[i]);
        
    }
    console.log(country, 'ini countrynya');
    dataCountry = d3.values(country)
    let nameCountry = d3.keys(country)
    let arrayNameCountry = [], arrayWinCountry = []
    for (let i = 0; i < 10; i++) {
        arrayNameCountry.push(nameCountry[i])
        arrayWinCountry.push(dataCountry[i])
    }

    console.log(arrayNameCountry, arrayWinCountry);

    

    // let dataset = [5, 10, 15, 20, 25, 1000]
    var margin = { top: 20, right: 30, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;


    var svg = d3.select("body").append("svg")
        .datum(dummytest)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .domain(dummytest.map(s => s.country))
        .range([0, width]);
        // data.map(function(d) { return d.country; })
    var y = d3.scaleLinear()
        .domain([0, 20])
        .range([height, 0]);

    var xAxis = d3.axisBottom()
        .scale(x)

    var yAxis = d3.axisLeft()
        .scale(y)

    var line = d3.line()
        .x(function (d, i) { return x(i); })
        .y(function (d) { return y(d); });


    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // svg.append("path")
    //     .attr("class", "line")
    //     .attr("d", line);

    svg.selectAll()
    .data(dummytest)
    .enter()
    .append('rect')
    .attr('x', (datum) => x(datum.country))
    .attr('y', (datum) => y(datum.value))
    .attr('height', (datum) => height - y(datum.value))
    .attr('width', x.bandwidth() - 10)

});

selectAll()
    .data(goals)
    .enter()
    .append('rect')
    .attr('x', (s) => xScale(s.language))
    .attr('y', (s) => yScale(s.value))
    .attr('height', (s) => height - yScale(s.value))
    .attr('width', xScale.bandwidth())


// const svg = d3.select('#chartArea').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#cacaca')

// svg.selectAll('rect')
//     .data(dataCountry)
//     .enter()
//     .append('rect')
//     .attr('class', 'bar')
//     .attr('x', function (datum, i) {
//         return (i * 25)
//     })
//     .attr('y', function (datum, i) {
//         return 300 - datum
//     })
//     .attr('width', 23)
//     .attr('height', function (datum) {
//         return datum
//     })
// d3.select('body').selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class', 'bar')
//     .style('height', function (d) {
//         return d * 5 + 'px'
//     })