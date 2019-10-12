const $output = $('.output').children()
const $numbers = $('.num')
const $operators = $('.oper')


// for (var i = 0; i < $numbers.length; i++) {
//   $($numbers).text('working');
// }
$(()=>{
  let operation = '';
  $($numbers).on('click', (event)=>{
    $($output).append($(event.target).text());
    operation += $(event.target).text();
    console.log(operation);
  })
  $($operators).on('click', (event)=>{
    $($output).append($(event.target).text());
    operation += $(event.target).text();
    console.log(operation);
  })
  $('.result').on('click', (event)=>{
    $($output).text(eval(operation));
  })
})
