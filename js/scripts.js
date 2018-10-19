$(document).ready(function() {
  $("form.quiz").submit(function(event) {
    var companySize = parseInt($("select#companySize").val());
    var companyComplexity = parseInt($("select#companyComplexity").val());
    var companyPreference = parseInt($("select#companyPreference").val());




    if ("#companySize" + "#companyComplexity" + "#companyPreference" === 3) {
      $('#rubyOnRails').show();
    } else if("#companySize" + "#companyComplexity" + "#companyPreference" > 3 <6) {
      $('#cSharp').show();
    } else {("#companySize" + "#companyComplexity" + "#companyPreference" >= 6)
      $('#java').show();
    }
    event.preventDefault();
  });
});
