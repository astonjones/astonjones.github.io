// $(function() {
//   $('#contact-form').on('submit', function(event) {
//     event.preventDefault();
//     let name = $('input[name="name"]').val(),
//         email = $('input[name="email"]').val(),
//         message = $('textarea[name="message"]').val();

//     $.ajax({
//       url: '/contact',
//       method: "POST",
//       contentType: 'application/json',
//       data: JSON.stringify({
//         name,
//         email,
//         message
//       }),
//       success: function(response) {
//         console.log("it made it here!");
//       },
//       fail: function(error) {
//         console.log(error);
//       }
//     });
//   });
// });