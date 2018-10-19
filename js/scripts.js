$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var size = parseInt($("input#companySize").val());
    var complexity = parseInt($("option#companyComplexity").val());
    var companyPreference = parseInt($("option#companyPreference").val());


    if (companySize + companyComplexity + companyPreference === 3) {
      $('#rubyOnRails').show();
    } else if(companySize + companyComplexity + companyPreference > 3) {
      $('#cSharp').show();
    } else if(companySize + companyComplexity + companyPreference >= 6) {
      $('#java').show();
    }
    event.preventDefault();
  });



});
