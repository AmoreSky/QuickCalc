// alert('hi')

function area_of_triangle(){
    // alert('hi')
    show.style.display = 'none';
    display.innerHTML = `<input type="text" placeholder="height" id="height" class='form-control my-4'>
    <input type="text" placeholder="base" id="base" class='form-control my-4'> 
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`;
    calculate.addEventListener('click', function(){
        // alert('hi');
        let heightValue = height.value;
        let baseValue = base.value;
        let area = 0.5 * heightValue * baseValue;
        show.innerHTML = `Area of Triangle: ${area}m²`;
        show.style.padding = '20px';
        show.style.display = 'block';
    });
}
function area_of_square(){
    // alert('hi')
    show.style.display = 'none';
    display.innerHTML = `
    <input type="text" placeholder="length" id="lengthValue" class='form-control my-4'> 
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`;
    calculate.addEventListener('click', function(){
        // alert('hi');
        var length = lengthValue.value;
        // alert(`Length: ${length}`);
        let area = length ** 2;
        show.innerHTML = `Area of Square: ${area}m²`;
        show.style.padding = '20px';
        show.style.display = 'block';
   });
}
function area_of_circle(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML = `
    <input type="text" placeholder="radius" id="radius" class='form-control my-4'> 
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        let pi = 22/7
        let radiusValue = radius.value
        let area = (pi * (radiusValue**2)).toFixed(2)
        // alert(area)
        show.innerHTML = `Area of Circle: ${area}m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })
}
function area_of_quadrilateral(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML= `
    <input type="text" placeholder="Diagonal Length" id="diagonal_length" class='form-control my-4'> 
    <input type="text" placeholder="Sum Of Heights" id="sum_of_heights" class='form-control my-4'>
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        // alert(0)
        let diagonal = diagonal_length.value
        let heights = sum_of_heights.value
        let area = 1/2 * diagonal * heights
        // alert(area)
        show.innerHTML = `Area of Quadrilateral: ${area}m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })    
}
function area_of_rhombus(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML= `
    <input type="text" placeholder="Diagonal 1" id="diagonal_one" class='form-control my-4'> 
    <input type="text" placeholder="Diagonal 2" id="diagonal_two" class='form-control my-4'>
    <button id='calculate' class='btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        // alert(0)
        let diagonal_1 = diagonal_one.value
        let diagonal_2 = diagonal_two.value
        let area = 1/2 * diagonal_1 * diagonal_2
        // alert(area)
        show.innerHTML = `Area of Rhombus: ${area}m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })    
}
function area_of_trapezium(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML= `
    <input type="text" placeholder="Base 1" id="base_one" class='form-control my-4'> 
    <input type="text" placeholder="Base 2" id="base_two" class='form-control my-4'>
    <input type="text" placeholder="Height" id="height" class='form-control my-4'>
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        // alert(0)
        let base_1 = base_one.value
        let base_2 = base_two.value
        let heightValue = height.value
        let area = 1/2 * (base_1 + base_2) * heightValue
        // alert(area)
        show.innerHTML = `Area of Trapezium: ${area}m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })    
}
function area_of_parallelogram(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML= `
    <input type="text" placeholder="Base" id="base" class='form-control my-4'> 
    <input type="text" placeholder="Height" id="height" class='form-control my-4'>
    <button id='calculate' class='btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        // alert(0)
        let baseValue = base.value
        let heightValue = height.value
        let area = baseValue * heightValue
        // alert(area)
        show.innerHTML = `Area of Parallelogram: ${area}m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })    
}
function body_mass_index(){
    // alert(0)
    show.style.display = 'none';
    display.innerHTML= `
    <input type="text" placeholder="Weight (kg)" id="weight" class='form-control my-4'> 
    <input type="text" placeholder="Height (m)" id="height" class='form-control my-4'>
    <button id='calculate' class = 'btn btn-dark w-50 btn-lg'>Calculate</button>`
    calculate.addEventListener('click', function(){
        // alert(0)
        let weightValue = weight.value
        let heightValue = height.value
        let bmi = (weightValue / (heightValue * heightValue)).toFixed(2)
        // alert(area)
        show.innerHTML = `Body Mass Index(BMI): ${bmi}kg/m²`
        show.style.padding = '20px';
        show.style.display = 'block';
    })    
}
