$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var size = parseInt($("input#companySize").val());
    var complexity = parseInt($("option#companyComplexity").val());
    var companyPreference = parseInt($("option#companyPreference").val());
    event.preventDefault();

    if (companySize + companyComplexity + companyPreference === 3) {
      $('rubyOnRails').show();
    }
  }



});
