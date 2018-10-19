$(document).ready(function() {
  $("form").submit(function(event) {
    var companySize = parseInt($("select#companySize").val());
    var companyComplexity = parseInt($("select#companyComplexity").val());
    var companyPreference = parseInt($("select#companyPreference").val());




    if ("#companySize" + "#companyComplexity" + "#companyPreference" === 3) {
      $('rubyOnRails').show();
    } else if("#companySize" + "#companyComplexity" + "#companyPreference" > 3) {
      $('cSharp').show();
    } else {("#companySize" + "#companyComplexity" + "#companyPreference" >= 6)
      $('java').show();
    }
    event.preventDefault();
  });
});
