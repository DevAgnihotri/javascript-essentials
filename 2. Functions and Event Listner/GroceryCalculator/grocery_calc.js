function totalamount()
{
    grocery_1 = parseFloat(document.getElementById('grocery1').value);
    grocery_2 = parseFloat(document.getElementById('grocery2').value);
    grocery_3 = parseFloat(document.getElementById('grocery3').value);

    let total_amount = grocery_1+grocery_2+grocery_3;
    console.log(total_amount);

    document.getElementById('result').innerText = `Total Amount is->$ ${total_amount}`
}
