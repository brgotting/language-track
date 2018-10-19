$(document).ready(function() {
  $("form").submit(function(event) {
    var companySize = parseInt($("option#companySize").val());
    var companyComplexity = parseInt($("option#companyComplexity").val());
    var companyPreference = parseInt($("option#companyPreference").val());
     $("#output").text(result);


    if ("#companySize" + "#companyComplexity" + "#companyPreference" === 3) {
      $(".rubyOnRails").show();
    } else if("#companySize" + "#companyComplexity" + "#companyPreference" > 3) {
      $('#cSharp').show();
    } else {("#companySize" + "#companyComplexity" + "#companyPreference" >= 6)
      $('#java').show();
    }
    event.preventDefault();
  });
});
